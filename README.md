# SlimVid 官网

SlimVid 官方落地站 — **Vite + React + TypeScript + Less**。

## 开发

```bash
pnpm install
pnpm dev
```

浏览器打开终端提示的本地地址即可。

## 构建

```bash
pnpm build
pnpm preview
```

产物在 `dist/`。

## 下载链接

编辑 [`src/config/downloads.ts`](src/config/downloads.ts)：

```ts
export const DOWNLOAD_CONFIG = {
  macArm: '',    // macOS Apple Silicon .dmg
  macIntel: '',  // macOS Intel .dmg
  win: '',       // Windows .exe
  linux: '',     // Linux AppImage
  repo: 'https://gitee.com/qq2057187934/crazy-slim-vid'
}
```

有链接：点击直接下载。留空：显示「即将开放」。
macOS 访客在 Hero 可切换 Apple Silicon / Intel 后再下载。

## 页面结构

单页锚点：Hero → 功能 → 流程 → 使用说明 → 下载 → 页脚。
