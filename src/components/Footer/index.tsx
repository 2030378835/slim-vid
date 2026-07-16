import logo from '../../assets/logo.png'
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
          href="https://github.com/2030378835"
          target="_blank"
          rel="noreferrer"
        >
          作者
        </a>
      </div>
    </footer>
  )
}
