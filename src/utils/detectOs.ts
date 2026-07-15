export type ClientOs = 'mac' | 'win' | 'linux' | 'other'

export function detectClientOs(): ClientOs {
  if (typeof navigator === 'undefined') return 'other'

  const ua = navigator.userAgent
  const platform = navigator.platform || ''

  if (/iPhone|iPad|iPod/.test(ua)) return 'other'
  if (/Mac/.test(platform) || /Macintosh/.test(ua)) return 'mac'
  if (/Win/.test(platform) || /Windows/.test(ua)) return 'win'
  if (/Linux/.test(platform) || /Linux/.test(ua)) return 'linux'
  return 'other'
}

/** 尽量识别 Apple Silicon；无法判断时默认 arm */
export async function detectMacArch(): Promise<'arm' | 'x64'> {
  try {
    const uad = (
      navigator as Navigator & {
        userAgentData?: {
          getHighEntropyValues: (
            hints: string[]
          ) => Promise<{ architecture?: string }>
        }
      }
    ).userAgentData

    if (uad?.getHighEntropyValues) {
      const { architecture } = await uad.getHighEntropyValues(['architecture'])
      if (architecture === 'x86') return 'x64'
      if (architecture === 'arm') return 'arm'
    }
  } catch {
    // ignore
  }
  return 'arm'
}
