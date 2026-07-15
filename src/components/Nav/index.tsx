import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { navLinks } from '../../data/content'
import './Nav.less'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="SlimVid 首页">
          <img src={logo} alt="" width={28} height={28} />
          <span>SlimVid</span>
        </a>

        <nav className="nav__links" aria-label="页面导航">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary nav__cta" href="#download">
          下载
        </a>
      </div>
    </header>
  )
}
