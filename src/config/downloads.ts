/**
 * SlimVid 安装包下载配置。
 * 安装包发布在 slim-vid 仓库的 GitHub Releases，与客户端自动更新同源。
 * 发版后请将 VERSION / TAG 与 SlimVid package.json 保持一致。
 */
export const VERSION = '1.1.0'
const TAG = `v${VERSION}`
const RELEASE_BASE = `https://github.com/2030378835/slim-vid/releases/download/${TAG}`

export const DOWNLOAD_CONFIG = {
  /** macOS · Apple Silicon (.dmg) */
  macArm: `${RELEASE_BASE}/SlimVid-${VERSION}-mac-arm64.dmg`,
  /** macOS · Intel (.dmg) */
  macIntel: `${RELEASE_BASE}/SlimVid-${VERSION}-mac-x64.dmg`,
  /** Windows x64 (.exe) */
  win: ``,
  /** Linux x64 (.AppImage) */
  linux: ``,
  /** 发行页 */
  releases: 'https://github.com/2030378835/slim-vid/releases'
} as const

export type DownloadConfig = typeof DOWNLOAD_CONFIG
export type PlatformKey = 'macArm' | 'macIntel' | 'win' | 'linux'
export type MacArch = 'arm' | 'x64'

export const macArchOptions: {
  arch: MacArch
  label: string
  key: Extract<PlatformKey, 'macArm' | 'macIntel'>
}[] = [
  { arch: 'arm', label: '.dmg (Apple Silicon)', key: 'macArm' },
  { arch: 'x64', label: '.dmg (Intel)', key: 'macIntel' }
]

export const platforms: {
  key: PlatformKey
  name: string
  detail: string
}[] = [
  { key: 'macArm', name: 'macOS', detail: 'Apple Silicon · .dmg' },
  { key: 'macIntel', name: 'macOS', detail: 'Intel · .dmg' },
  { key: 'win', name: 'Windows', detail: 'x64 · 安装包 .exe' },
  { key: 'linux', name: 'Linux', detail: 'x64 · AppImage' }
]

export function getDownloadUrl(key: PlatformKey): string {
  return DOWNLOAD_CONFIG[key].trim()
}

export function macDownloadHref(arch: MacArch): string {
  return getDownloadUrl(arch === 'arm' ? 'macArm' : 'macIntel')
}

export function isDownloadReady(key: PlatformKey): boolean {
  return Boolean(getDownloadUrl(key))
}
