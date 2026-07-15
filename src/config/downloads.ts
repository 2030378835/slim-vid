/**
 * SlimVid 安装包下载配置。
 * 填入完整 URL 后对应按钮可直接下载；留空字符串则展示「即将开放」。
 */
export const DOWNLOAD_CONFIG = {
  /** macOS · Apple Silicon (.dmg) */
  macArm: '',
  /** macOS · Intel (.dmg) */
  macIntel: '',
  /** Windows x64 (.exe) */
  win: '',
  /** Linux x64 (.AppImage) */
  linux: '',
  /** 源码仓库 */
  repo: 'https://gitee.com/qq2057187934/crazy-slim-vid'
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
