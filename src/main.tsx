import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

// 使用 HashRouter：路由信息放在 URL 的 # 之后（如 /word-memory/#/family/xxx）。
// 这样在 GitHub Pages（尤其是绑定了 apex 自定义域的项目页）下，
// 直接访问或刷新深层页面都不会触发 404，且对根路径部署同样兼容。
// 静态资源（assets / scenes）仍由 Vite 的 base=/word-memory/ 控制，不受路由影响。
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
