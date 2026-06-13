import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/emeging100playbook-logo.png'
import './Navbar.css'

const committees = [
  { label: 'B.E.S.T. Academy',                     path: '/committees/best-academy' },
  { label: 'Collegiate 100',                        path: '/committees/collegiate-100' },
  { label: 'Communication',                         path: '/committees/communication' },
  { label: 'Community Service',                     path: '/committees/community-service' },
  { label: 'Corporate Roundtable',                  path: '/committees/corporate-roundtable' },
  { label: 'Data',                                  path: '/committees/data' },
  { label: 'Emerging Development',                  path: '/committees/emerging-development' },
  { label: 'Emerging Leaders Awards & Gala',        path: '/committees/emerging-leaders-gala' },
  { label: 'Finance',                               path: '/committees/finance' },
  { label: 'Health & Wellness',                     path: '/committees/health-wellness' },
  { label: 'Newsletter',                            path: '/committees/newsletter' },
  { label: 'Operation Community Uplift',            path: '/committees/operation-community-uplift' },
  { label: 'Partnerships',                          path: '/committees/partnerships' },
  { label: 'Process & Governance',                  path: '/committees/process-governance' },
  { label: 'Social Fundraising',                    path: '/committees/social-fundraising' },
]

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
