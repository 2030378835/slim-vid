# SlimVid 官网

SlimVid 官方落地站 — **Vite + React + TypeScript + Less**。

线上地址：https://2030378835.github.io/slim-vid/

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

产物在 `dist/`。`vite.config.ts` 中 `base` 为 `/slim-vid/`，与 GitHub 仓库名一致。

## 部署到 GitHub Pages

推送 `main` 后由 Actions 自动构建并发布：

1. 仓库 **Settings → Pages → Source** 选 **GitHub Actions**
2. `git push origin main`
3. 在 **Actions** 中查看 `Deploy GitHub Pages` 是否成功
4. 打开 https://2030378835.github.io/slim-vid/

也可在 Actions 页手动运行该工作流（`workflow_dispatch`）。

## 下载链接

安装包发布在 [slim-vid Releases](https://github.com/2030378835/slim-vid/releases)，与桌面端自动更新同源。

编辑 [`src/config/downloads.ts`](src/config/downloads.ts) 中的 `VERSION`（发版时与 SlimVid `package.json` 同步）：

```ts
const VERSION = '1.0.0'
const TAG = `v${VERSION}`
const RELEASE_BASE = `https://github.com/2030378835/slim-vid/releases/download/${TAG}`
```

桌面端源码（crazy-slimVid）可保持私有；用户只能从 Releases 下载安装包。
macOS 访客在 Hero 可切换 Apple Silicon / Intel 后再下载。

## 页面结构

单页锚点：Hero → 功能 → 流程 → 使用说明 → 下载 → 页脚。
