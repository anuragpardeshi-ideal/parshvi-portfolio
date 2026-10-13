import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Home', href: '/#top', id: 'top' },
  { label: 'Work', href: '/#work', id: 'work' },
  { label: 'Featured Project', href: '/#featured', id: 'featured' },
  { label: 'About', href: '/#about', id: 'about' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const active = pathname === '/' ? (hash.slice(1) || 'top') : ''

  return (
    <header className="site-header" id="top" aria-label="Main navigation">
      <div className="container-page header-inner">
        <Link className="brand" to="/" aria-label="Parshvi Gandhi, home" onClick={() => setOpen(false)}>
          <span className="brand-monogram">PG</span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-identity"><strong>PARSHVI GANDHI</strong><small>Product Designer</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Desktop navigation">
          {navigation.map((item) => <a className={active === item.id ? 'nav-link active' : 'nav-link'} href={item.href} key={item.id} aria-current={active === item.id ? 'page' : undefined}>{item.label}</a>)}
          <a className="contact-button" href="/#contact">Contact <ArrowRight size={14} aria-hidden="true" /></a>
        </nav>
        <button className="mobile-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => <a href={item.href} key={item.id} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a href="/#contact" onClick={() => setOpen(false)}>Contact <ArrowRight size={16} aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  )
}
