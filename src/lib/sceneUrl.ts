// 统一解析场景图 URL：把以 "/" 开头的绝对路径（如 /scenes/ab.jpg）
// 拼接到 Vite 的 BASE_URL 下，兼容根路径与子路径（GitHub Pages 项目页）部署。
// 覆盖所有静态引用（synced-scenes、families 数据）与动态引用（batch7/8 模板字符串）。
export function resolveSceneUrl(src: string): string {
  if (!src) return src;
  // 外链或 data URI 原样返回
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  const base = import.meta.env.BASE_URL || '/'; // Vite 保证以 '/' 结尾
  return base + src.replace(/^\//, '');
}
