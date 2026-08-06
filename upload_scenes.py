import json, os, subprocess, sys, time

BASE_TOKEN = "KmfXbts1xaTXqjsb3KIcJcSonrg"
TABLE_ID = "tbltfBGXvpgUEMAZ"
ATTACH_FIELD = "fldTOHr3VF"   # 插图
FAMID_FIELD = "fldLvNU1bA"    # 词族ID
PUBLIC = "/Users/zhangchengbin/Desktop/图像记忆单词/app/public"
SCENES = json.load(open("/tmp/scenes.json"))  # [{id, scene}]
LARK = "lark-cli"

# 1) 抓取全部词族记录（分页）
def run(args):
    p = subprocess.run(["lark-cli","base"]+args, capture_output=True, text=True)
    if p.returncode != 0:
        raise RuntimeError(p.stderr or p.stdout)
    return json.loads(p.stdout)

all_data, all_rids, field_ids = [], [], None
offset = 0
while True:
    args = ["+record-list","--base-token",BASE_TOKEN,"--table-id",TABLE_ID,
            "--limit","200","--offset",str(offset),"--format","json","--as","user"]
    d = run(args)
    data = d["data"]
    if field_ids is None:
        field_ids = data.get("field_id_list", [])
    rows = data.get("data", [])
    rids = data.get("record_id_list", [])
    if not rows:
        break
    all_data += rows
    all_rids += rids
    if not data.get("has_more"):
        break
    offset += 200

print(f"抓取记录数: {len(all_rids)}", file=sys.stderr)
fid_idx = field_ids.index(FAMID_FIELD)
att_idx = field_ids.index(ATTACH_FIELD)

# 2) 构建 词族ID -> (record_id, 已有插图数)
rec_by_famid = {}
for vals, rid in zip(all_data, all_rids):
    # 每行是 field_id_list 顺序的值数组
    if not isinstance(vals, list) or len(vals) <= max(fid_idx, att_idx):
        famid = vals.get(FAMID_FIELD) if isinstance(vals, dict) else None
        att = vals.get(ATTACH_FIELD) if isinstance(vals, dict) else None
    else:
        famid = vals[fid_idx]
        att = vals[att_idx]
    if famid is None:
        continue
    rec_by_famid[famid] = (rid, len(att) if isinstance(att, list) else 0)

# 3) 生成任务清单
tasks = []
for s in SCENES:
    famid = s["id"]
    if famid not in rec_by_famid:
        print(f"跳过(无飞书记录): {famid}", file=sys.stderr)
        continue
    rid, have = rec_by_famid[famid]
    if have > 0:
        continue  # 已上传，跳过
    local = os.path.join(PUBLIC, s["scene"].lstrip("/"))
    if not os.path.exists(local):
        print(f"跳过(本地缺图): {local}", file=sys.stderr)
        continue
    tasks.append((rid, local, famid))

print(f"待上传插图: {len(tasks)}", file=sys.stderr)

# 4) 上传（带重试 + 轻量间隔）
done = 0
for i, (rid, local, famid) in enumerate(tasks, 1):
    ok = False
    # lark-cli 要求 --file 为当前目录下的相对路径
    local_rel = os.path.relpath(local, PUBLIC)
    for attempt in range(4):
        try:
            p = subprocess.run(
                ["lark-cli","base","+record-upload-attachment",
                 "--base-token",BASE_TOKEN,"--table-id",TABLE_ID,
                 "--record-id",rid,"--field-id",ATTACH_FIELD,
                 "--file",local_rel,"--as","user"],
                cwd=PUBLIC, capture_output=True, text=True, timeout=120)
            out = p.stdout + p.stderr
            if '"ok":true' in out or '"ok": true' in out:
                ok = True
                break
            print(f"  !{famid} 尝试{attempt+1} 失败: {out[:200]}", file=sys.stderr)
        except Exception as e:
            print(f"  !{famid} 异常: {e}", file=sys.stderr)
        time.sleep(2)
    if ok:
        done += 1
    print(f"[{i}/{len(tasks)}] {famid} -> {'OK' if ok else 'FAIL'}", file=sys.stderr, flush=True)
    time.sleep(0.4)

print(f"完成上传: {done}/{len(tasks)}", file=sys.stderr)
