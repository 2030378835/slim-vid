import {
  getDownloadUrl,
  platforms,
  VERSION
} from '../../config/downloads'
import './Download.less'

export function Download() {
  return (
    <section className="section download" id="download">
      <div className="container">
        <header className="download__head">
          <span className="section__eyebrow">Download</span>
          <h2 className="section__title">下载 SlimVid</h2>
          <p className="section__lead">
            当前版本 {VERSION}。选择你的系统下载；未配置平台显示即将开放。
          </p>
        </header>

        <div className="download__grid">
          {platforms.map((p) => {
            const href = getDownloadUrl(p.key)
            const ready = Boolean(href)

            return (
              <div key={p.key} className="download__card">
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.detail}</p>
                </div>
                {ready ? (
                  <a className="btn btn--primary btn--block" href={href} download>
                    下载 {p.name}
                  </a>
                ) : (
                  <button type="button" className="btn btn--ghost btn--block" disabled>
                    即将开放
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
