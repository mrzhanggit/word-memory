import path from "path"
import os from "node:os"
import { execFileSync } from "node:child_process"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

const memoryImageDir = process.env.MEMORY_IMAGE_DIR || path.join(os.homedir(), 'Downloads', '记忆图片')
const imageSyncScript = path.resolve(__dirname, 'scripts/sync-memory-images.mjs')

function runImageSync() {
  execFileSync(process.execPath, [imageSyncScript], { cwd: __dirname, stdio: 'inherit' })
}

function memoryImageSync(): Plugin {
  return {
    name: 'memory-image-sync',
    buildStart() {
      runImageSync()
    },
    configureServer(server) {
      runImageSync()
      server.watcher.add(memoryImageDir)
      let timer: ReturnType<typeof setTimeout> | undefined
      const handleImageChange = (file: string) => {
        if (!file.startsWith(`${memoryImageDir}${path.sep}`)) return
        clearTimeout(timer)
        timer = setTimeout(() => {
          runImageSync()
          server.ws.send({ type: 'full-reload' })
        }, 300)
      }
      server.watcher.on('add', handleImageChange)
      server.watcher.on('change', handleImageChange)
      server.httpServer?.once('close', () => {
        server.watcher.off('add', handleImageChange)
        server.watcher.off('change', handleImageChange)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // 项目页部署在 https://mrzhanggit.github.io/word-memory/ 子路径下；
  // 通过环境变量 VITE_BASE 覆盖，默认根路径（本地 dev / 云沙箱根部署仍用 '/'）。
  base: process.env.VITE_BASE || '/',
  plugins: [memoryImageSync(), inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
