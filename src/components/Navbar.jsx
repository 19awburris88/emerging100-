import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/emeging100playbook-logo.png'
import { committees as committeeData } from '../data/index.js'
import './Navbar.css'

const committees = committeeData.map(c => ({
  label: c.name,
  path: `/committees/${c.slug}`,
}))

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const location = useLocation()

  const closeAll = () => { setMenuOpen(false); setDropOpen(false) }

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" onClick={closeAll}>
          <img src={logo} alt="Emerging 100 ATL Playbook" className="navbar-logo" />
        </Link>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/"           className="nav-link" onClick={closeAll}>Home</NavLink>
          <NavLink to="/about"      className="nav-link" onClick={closeAll}>About</NavLink>
          <NavLink to="/resources"  className="nav-link" onClick={closeAll}>Resources</NavLink>

          <div
            className={`nav-dropdown ${dropOpen ? 'open' : ''}`}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              className={`nav-link nav-drop-btn ${location.pathname.startsWith('/committees') ? 'active' : ''}`}
              onClick={() => setDropOpen(o => !o)}
            >
              Committees <span className="chevron">▾</span>
            </button>
            <div className="dropdown-menu">
              {committees.map(c => (
                <NavLink key={c.path} to={c.path} className="dropdown-item" onClick={closeAll}>
                  {c.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
