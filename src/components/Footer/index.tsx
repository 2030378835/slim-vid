import logo from '../../assets/logo.png'
import { DOWNLOAD_CONFIG } from '../../config/downloads'
import './Footer.less'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="" width={22} height={22} />
          <span>SlimVid</span>
        </div>
        <p className="footer__copy">© {year} SlimVid · 轻量视频压缩</p>
        <a
          className="footer__link"
          href={DOWNLOAD_CONFIG.repo}
          target="_blank"
          rel="noreferrer"
        >
          Gitee 仓库
        </a>
      </div>
    </footer>
  )
}
