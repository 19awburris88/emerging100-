import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import leadershipImg from '../assets/newhero.jpg'
import { committees as committeeData } from '../data/index.js'
import './Home.css'

const committees = committeeData.map(c => ({
  label: c.name,
  path: `/committees/${c.slug}`,
  icon: c.icon,
  desc: c.tagline,
}))

const pillars = [
  { title: 'Mentorship', desc: 'Connecting Black youth with professional role models who invest in their success.' },
  { title: 'Community',  desc: 'Serving Atlanta with purpose — from education to economic empowerment.' },
  { title: 'Leadership', desc: 'Developing the next generation of Black male leaders in every sector.' },
  { title: 'Excellence', desc: 'Holding ourselves to the highest standard — in service, character, and impact.' },
]

export default function Home() {
  const [query, setQuery]     = useState('')
  const [count163, setCount163] = useState(0)
  const [count15,  setCount15]  = useState(0)
  const statsRef  = useRef(null)
  const firedRef  = useRef(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firedRef.current) {
          firedRef.current = true
          obs.disconnect()
          const dur = 1400
          let t0 = null
          const step = (ts) => {
            if (!t0) t0 = ts
            const p = Math.min((ts - t0) / dur, 1)
            const e = 1 - Math.pow(1 - p, 3)
            setCount163(Math.round(e * 163))
            setCount15(Math.round(e * 15))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const filtered = committees.filter(c =>
    !query ||
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.desc.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main>
      {/* Hero */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${leadershipImg})` }}
      >
        <div className="home-hero-content">
          <p className="eyebrow">Emerging 100 ATL — Internal Playbook</p>
          <h1>Greatness<br />Starts Here.</h1>
          <p className="hero-sub">
            The official committee playbook for Emerging 100 Atlanta — the premier young professionals
            auxiliary of the 100 Black Men of Atlanta, Inc.
          </p>
          <div className="hero-actions">
            <Link to="/committees/best-academy" className="btn btn-gold">Explore Committees</Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar" ref={statsRef}>
        <div className="container stats-inner">
          <div className="stat">
            <span className="stat-num">{count163}</span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">{count15}</span>
            <span className="stat-label">Committees</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">25–35</span>
            <span className="stat-label">Member Age Range</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">ATL</span>
            <span className="stat-label">Based in Atlanta, GA</span>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="tag">Our Foundation</p>
            <h2 className="section-title">Built on Four Pillars</h2>
            <p className="section-sub">Every committee aligns to these core principles.</p>
          </div>
          <div className="grid-4">
            {pillars.map(p => (
              <div key={p.title} className="pillar-card card">
                <div className="pillar-bar" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Committees Grid */}
      <section className="section">
        <div className="container">
          <div className="committee-section-header">
            <div>
              <p className="tag">The Playbook</p>
              <h2 className="section-title">All Committees</h2>
              <p className="section-sub">Select a committee to view its mission, chairs, responsibilities, and resources.</p>
            </div>
            <div className="committee-search-wrap">
              <input
                className="committee-search"
                type="search"
                placeholder="Search committees…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                aria-label="Search committees"
              />
              {query && (
                <span className="committee-count">
                  {filtered.length} of {committees.length} committees
                </span>
              )}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="committee-grid">
              {filtered.map((c, i) => (
                <Link
                  to={c.path}
                  key={c.path}
                  className="committee-card"
                  style={{ '--i': i }}
                >
                  <span className="committee-icon">{c.icon}</span>
                  <div>
                    <h3>{c.label}</h3>
                    <p>{c.desc}</p>
                  </div>
                  <span className="committee-arrow">→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="committee-no-results">
              <p>No committees match "<strong>{query}</strong>".</p>
              <button onClick={() => setQuery('')}>Clear search</button>
            </div>
          )}
        </div>
      </section>

      {/* Foundation CTA */}
      <section className="mission-cta">
        <div className="container mission-cta-inner">
          <div>
            <p className="tag">Our Foundation</p>
            <h2>The young professionals auxiliary of the<br />100 Black Men of Atlanta, Inc.</h2>
          </div>
          <p style={{ maxWidth: '340px', opacity: 0.85, lineHeight: 1.65 }}>
            Emerging 100 ATL enhances the mentoring and tutoring programs of our parent organization
            while developing the next generation of Black male leaders in Atlanta.
          </p>
        </div>
      </section>
    </main>
  )
}
