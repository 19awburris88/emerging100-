import { Link } from 'react-router-dom'
import { committees as committeeData } from '../data/index.js'
import './Resources.css'

const committeePlaybooks = committeeData.map(c => ({
  label: c.name,
  url: c.playbookUrl,
  pdf: c.playbookPdfUrl,
  path: `/committees/${c.slug}`,
  icon: c.icon,
}))

const sharedDocs = [
  {
    icon: '🗂️',
    label: 'Master Playbook Hub',
    desc: 'Central hub linking all 15 committee playbooks in one view.',
    url: '/playbooks/e100_master_playbook_hub.html',
  },
  {
    icon: '📅',
    label: '2026–2027 Program Calendar',
    desc: 'Official org-wide calendar with all committee dates, events, and deadlines for the 2026–2027 season.',
    url: '/playbooks/e100_calendar_2026_2027.html',
  },
  {
    icon: '💬',
    label: 'Outstanding Chair Questions',
    desc: '183 questions from incoming chairs — 135 answered and growing. A living reference for new leadership.',
    url: '/playbooks/e100_outstanding_questions.html',
  },
  {
    icon: '✅',
    label: 'Event Checklists',
    desc: 'Step-by-step checklists for every Emerging 100 event type.',
    url: '/playbooks/e100_event_checklists.html',
  },
  {
    icon: '❓',
    label: '141 Transition Questions',
    desc: 'Essential questions every new chair should answer about their committee.',
    url: '/playbooks/e100_141_questions.html',
  },
  {
    icon: '🪑',
    label: 'New Chair Guide',
    desc: 'Interactive guide walking new chairs through their first 90 days.',
    url: '/playbooks/e100_new_chair_questions.html',
  },
]

export default function Resources() {
  return (
    <main>
      <div className="page-hero">
        <p className="eyebrow">Emerging 100 ATL</p>
        <h1>Playbook Resources</h1>
        <p>Every committee guide, shared doc, and reference in one place.</p>
        <div className="gold-bar" />
      </div>

      {/* Shared docs */}
      <section className="section">
        <div className="container">
          <p className="tag">Org-Wide</p>
          <h2 className="section-title">Shared Documents</h2>
          <p className="section-sub">Resources that apply across all committees and roles.</p>
          <div className="res-shared-grid">
            {sharedDocs.map(d => (
              <a
                key={d.label}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="res-shared-card card"
              >
                <div className="res-shared-icon">{d.icon}</div>
                <div>
                  <p className="res-shared-label">{d.label}</p>
                  <p className="res-shared-desc">{d.desc}</p>
                </div>
                <span className="res-shared-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Committee playbooks */}
      <section className="section">
        <div className="container">
          <p className="tag">By Committee</p>
          <h2 className="section-title">Committee Playbooks</h2>
          <p className="section-sub">Each playbook contains goals, RACI charts, timelines, checklists, and full committee documentation.</p>
          <div className="res-committee-grid">
            {committeePlaybooks.map(c => (
              <div key={c.label} className="res-committee-card card">
                <div className="res-committee-top">
                  <span className="res-committee-icon">{c.icon}</span>
                  <p className="res-committee-label">{c.label}</p>
                </div>
                <div className="res-committee-actions">
                  <Link to={c.path} className="res-action-link">Overview</Link>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="res-action-playbook">
                    View ↗
                  </a>
                  <a href={c.pdf} download className="res-action-download">
                    PDF ↓
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
