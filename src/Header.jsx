import logoImg from './assets/img/inicio/logo.png'
import './Header.css'

export default function Header({ active = 'INICIO' }) {
  const navItems = [
    { label: 'INICIO', href: '#' },
    { label: 'NOSOTROS', href: '#nosotros' },
    { label: 'ESPECIALIDADES', href: '#especialidades' },
    { label: 'SERVICIOS', href: '#servicios' },
    { label: 'BLOG', href: '#blog' },
    { label: 'FARMACIA', href: '#farmacia' },
    { label: 'PAGOS', href: '#pagos' },
  ]

  return (
    <>
      <header className="site-header">
        <a href="#" className="logo">
          <img src={logoImg} alt="Medlife" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-title">MEDLIFE</span>
            <span className="logo-subtitle">VIRTUAL HEALTHCARE</span>
          </div>
        </a>
        <nav className="main-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={active.toUpperCase() === item.label ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="gray-bar"></div>
    </>
  )
}
