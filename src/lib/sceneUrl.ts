// 统一解析场景图 URL：把以 "/scenes/" 开头的绝对路径（如 /scenes/ark.jpg）
// 解析到独立插图基址 VITE_SCENE_BASE（若配置），否则拼接到 Vite 的 BASE_URL 下，
// 兼容根路径、子路径（GitHub Pages 项目页）与外部存储（Supabase Storage / CloudStudio）。
// VITE_SCENE_BASE 的语义是"scenes 内容根"：图片文件直接位于其下，
// 例如 CloudStudio: https://host/scenes，Supabase: https://ref.supabase.co/storage/v1/object/public/scenes
export function resolveSceneUrl(src: string): string {
  if (!src) return src;
  // 外链或 data URI 原样返回
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  // 若配置了独立的插图基址（如 GitHub Pages 不打包大图，改从 Supabase/CloudStudio 加载），
  // 则 /scenes/ 开头的场景图走独立基址，其余静态资源仍走 BASE_URL。
  const sceneBase = (import.meta.env.VITE_SCENE_BASE as string | undefined)?.replace(/\/+$/, '');
  if (sceneBase && src.startsWith('/scenes/')) {
    return sceneBase + '/' + src.replace(/^\/scenes\//, '');
  }
  const base = import.meta.env.BASE_URL || '/'; // Vite 保证以 '/' 结尾
  return base + src.replace(/^\//, '');
}
