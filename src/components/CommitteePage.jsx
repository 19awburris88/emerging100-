import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CommitteePage.css'

export default function CommitteePage({
  name,
  icon,
  tagline,
  overview,
  chairs = [],
  advisors = [],
  supporting = [],
  responsibilities = [],
  goals = [],
  resources = [],
  term = '2026–2027',
  playbookUrl = null,
  playbookPdfUrl = null,
}) {
  const [activeId, setActiveId] = useState(null)

  const navItems = [
    { id: 'cp-overview',         label: 'Overview',         show: !!overview },
    { id: 'cp-leadership',       label: 'Leadership',       show: chairs.length > 0 || advisors.length > 0 },
    { id: 'cp-goals',            label: 'Goals',            show: goals.length > 0 },
    { id: 'cp-responsibilities', label: 'Responsibilities', show: responsibilities.length > 0 },
    { id: 'cp-resources',        label: 'Resources',        show: true },
  ].filter(n => n.show)

  useEffect(() => {
    const ids = ['cp-overview', 'cp-leadership', 'cp-goals', 'cp-responsibilities', 'cp-resources']
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.find(e => e.isIntersecting)
        if (hit) setActiveId(hit.target.id)
      },
      { rootMargin: '-25% 0px -65% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <p className="eyebrow">Committee Playbook</p>
        <h1>{icon && <span className="cp-hero-icon">{icon}</span>} {name}</h1>
        {tagline && <p>{tagline}</p>}
        <div className="gold-bar" />
      </div>

      {/* Sticky tab nav */}
      <div className="cp-tab-nav">
        <div className="container cp-tabs">
          <nav className="cp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cp-bc-sep">›</span>
            <span>{name}</span>
          </nav>
          <div className="cp-tab-nav-right">
            <div className="cp-tab-list">
            {navItems.map(n => (
              <button
                key={n.id}
                className={`cp-tab ${activeId === n.id ? 'cp-tab--active' : ''}`}
                onClick={() => scrollTo(n.id)}
              >
                {n.label}
              </button>
            ))}
            </div>
            {playbookUrl && (
              <a
                href={playbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-playbook-btn"
              >
                Full Playbook ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="cp-body container">

        {/* Overview */}
        {overview && (
          <section className="cp-section" id="cp-overview">
            <div className="tag">Overview</div>
            <h2 className="cp-section-title">Committee Mission</h2>
            <p className="cp-overview">{overview}</p>
          </section>
        )}

        <div className="cp-two-col">

          {/* Chairs, Advisors & Supporting */}
          {(chairs.length > 0 || advisors.length > 0 || supporting.length > 0) && (
            <section className="cp-section cp-card card card-border-top" id="cp-leadership">
              <div className="tag">Leadership</div>
              <h2 className="cp-section-title">Committee Chairs</h2>
              <div className="cp-chairs">
                {chairs.map((c, i) => (
                  <div key={i} className="cp-chair">
                    <div className="cp-chair-avatar">{c.charAt(0)}</div>
                    <div>
                      <p className="cp-chair-name">{c}</p>
                      <p className="cp-chair-role">Committee Chair</p>
                    </div>
                  </div>
                ))}
              </div>
              {advisors.length > 0 && (
                <>
                  <h3 className="cp-section-subtitle">Advisors</h3>
                  <div className="cp-chairs">
                    {advisors.map((a, i) => (
                      <div key={i} className="cp-chair">
                        <div className="cp-chair-avatar">{a.charAt(0)}</div>
                        <div>
                          <p className="cp-chair-name">{a}</p>
                          <p className="cp-chair-role">Advisor</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {supporting.length > 0 && (
                <>
                  <h3 className="cp-section-subtitle">Supporting</h3>
                  <div className="cp-chairs">
                    {supporting.map((s, i) => (
                      <div key={i} className="cp-chair">
                        <div className="cp-chair-avatar">{s.charAt(0)}</div>
                        <div>
                          <p className="cp-chair-name">{s}</p>
                          <p className="cp-chair-role">Supporting</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          {/* Goals */}
          {goals.length > 0 && (
            <section className="cp-section cp-card card card-border-top" id="cp-goals">
              <div className="tag">{term} Term</div>
              <h2 className="cp-section-title">Goals & Priorities</h2>
              <ul className="cp-list cp-goals">
                {goals.map((g, i) => (
                  <li key={i}>
                    <span className="cp-check">✓</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* Responsibilities */}
        {responsibilities.length > 0 && (
          <section className="cp-section" id="cp-responsibilities">
            <div className="tag">Core Duties</div>
            <h2 className="cp-section-title">Key Responsibilities</h2>
            <div className="cp-resp-grid">
              {responsibilities.map((r, i) => (
                <div key={i} className="cp-resp-card card">
                  <div className="cp-resp-num">{String(i + 1).padStart(2, '0')}</div>
                  <p>{r}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Resources */}
        <section className="cp-section cp-resources card" id="cp-resources">
          <div className="tag">Documents</div>
          <h2 className="cp-section-title">Resources</h2>
          <ul className="cp-resource-list">
            {(playbookPdfUrl || playbookUrl) && (
              <li>
                <a
                  href={playbookPdfUrl || playbookUrl}
                  download={playbookPdfUrl ? true : undefined}
                  target={playbookPdfUrl ? undefined : '_blank'}
                  rel={playbookPdfUrl ? undefined : 'noopener noreferrer'}
                  className="cp-resource-link cp-resource-featured"
                >
                  <span className="cp-resource-icon">📥</span>
                  <div>
                    <span className="cp-resource-featured-label">Download Committee Playbook</span>
                    <span className="cp-resource-featured-sub">Full PDF — goals, RACI, timelines, checklists & more</span>
                  </div>
                  <span className="cp-resource-arrow">↓</span>
                </a>
              </li>
            )}
            {resources.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="cp-resource-link">
                  <span className="cp-resource-icon">📄</span>
                  <span>{r.label}</span>
                  <span className="cp-resource-arrow">↗</span>
                </a>
              </li>
            ))}
            {!playbookUrl && resources.length === 0 && (
              <div className="cp-resources-empty">
                <p>Documents and resources will be added here as they become available.</p>
                <p className="cp-resources-hint">Contact the committee chairs to request access to materials.</p>
              </div>
            )}
          </ul>
        </section>

      </div>
    </main>
  )
}
