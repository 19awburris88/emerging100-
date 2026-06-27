import { Link } from 'react-router-dom'
import logo from '../assets/emeging100playbook-logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Emerging 100 ATL" className="footer-logo-img" />
          </div>
          <a
            href="https://emerging100atl.org"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ext-link"
          >
            emerging100atl.org ↗
          </a>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/committees/best-academy">B.E.S.T. Academy</Link>
          <Link to="/committees/collegiate-100">Collegiate 100</Link>
          <Link to="/committees/emerging-leaders-gala">Awards Gala</Link>
        </div>

        <div className="footer-links">
          <h4>Leadership</h4>
          <span>President: Daniel Farr</span>
          <span>Vice President: Julius Thomas</span>
          <span>Treasurer: Brandon Whatley</span>
          <span>Secretary: Dr. Tony Price</span>
          <span>Parliamentarian: Carl McCray</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Emerging 100 ATL. Internal Playbook — For Members Only.</span>
        </div>
      </div>
    </footer>
  )
}
