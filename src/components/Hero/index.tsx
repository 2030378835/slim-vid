import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { getDownloadUrl, type PlatformKey } from '../../config/downloads'
import { detectClientOs, type ClientOs } from '../../utils/detectOs'
import { MacDownloadSplit } from './MacDownloadSplit'
import './Hero.less'

function osToPlatform(os: ClientOs): PlatformKey | null {
  if (os === 'win') return 'win'
  if (os === 'linux') return 'linux'
  return null
}

function HeroPrimaryCta({ os }: { os: ClientOs }) {
  if (os === 'mac') return <MacDownloadSplit />

  const platform = osToPlatform(os)
  if (platform) {
    const href = getDownloadUrl(platform)
    if (href) {
      return (
        <a className="btn btn--primary" href={href} download>
          立即下载
        </a>
      )
    }
    return (
      <button type="button" className="btn btn--primary" disabled>
        即将开放
      </button>
    )
  }

  // 无法识别系统：滚到下载区自行选择
  return (
    <a className="btn btn--primary" href="#download">
      立即下载
    </a>
  )
}

export function Hero() {
  const [os, setOs] = useState<ClientOs>('other')

  useEffect(() => {
    setOs(detectClientOs())
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--a" aria-hidden />
      <div className="hero__glow hero__glow--b" aria-hidden />
      <div className="hero__orb" aria-hidden>
        <img src={logo} alt="" className="hero__orb-icon" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__brand">SlimVid</p>
          <h1 className="hero__headline">把视频压到刚好</h1>
          <p className="hero__sub">
            轻量桌面压缩工具。拖拽入队、五档预设与自定义规则，自动硬件加速，压缩完一眼看体积变化。
          </p>
          <div className="hero__actions">
            <HeroPrimaryCta os={os} />
            <a className="btn btn--ghost" href="#features">
              了解功能
            </a>
          </div>
        </div>

        <div className="hero__stage" aria-hidden>
          <div className="mock">
            <div className="mock__chrome">
              <span className="mock__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="mock__title">
                <img src={logo} alt="" />
                SlimVid
              </span>
            </div>
            <div className="mock__body">
              <div className="mock__drop">
                <strong>拖入视频开始压缩</strong>
                <span>支持 mp4 / mov / mkv 等格式</span>
              </div>
              <div className="mock__task is-done">
                <div className="mock__task-top">
                  <span>travel_clip.mp4</span>
                  <em>完成</em>
                </div>
                <div className="mock__result">248 MB → 96 MB · −61%</div>
              </div>
              <div className="mock__task is-run">
                <div className="mock__task-top">
                  <span>demo_4k.mov</span>
                  <em>压缩中</em>
                </div>
                <div className="mock__bar">
                  <i />
                </div>
                <div className="mock__meta">2.4x · ETA 0:42</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
