import { Link } from 'react-router-dom'
import './Resources.css'

const committeePlaybooks = [
  { label: 'B.E.S.T. Academy',                  url: '/playbooks/e100_best_academy_playbook_v2.html',         path: '/committees/best-academy',              icon: '🎓' },
  { label: 'Collegiate 100',                     url: '/playbooks/e100_c100_playbook_v2.html',                 path: '/committees/collegiate-100',            icon: '🎒' },
  { label: 'Communication',                      url: '/playbooks/e100_communications_playbook_v1.html',       path: '/committees/communication',             icon: '📣' },
  { label: 'Community Service',                  url: '/playbooks/e100_community_service_playbook_v1.html',    path: '/committees/community-service',         icon: '🤝' },
  { label: 'Corporate Roundtable',               url: '/playbooks/e100_corporate_roundtable_playbook_v1.html', path: '/committees/corporate-roundtable',      icon: '💼' },
  { label: 'Data & Systems',                     url: '/playbooks/e100_data_playbook_v1.html',                 path: '/committees/data',                      icon: '📊' },
  { label: 'Emerging Development',               url: '/playbooks/e100_emerging_development_playbook_v1.html', path: '/committees/emerging-development',      icon: '🌱' },
  { label: 'Emerging Leaders Awards & Gala',     url: '/playbooks/e100_gala_playbook_v1.html',                 path: '/committees/emerging-leaders-gala',     icon: '🏆' },
  { label: 'Finance',                            url: '/playbooks/e100_finance_playbook_v1.html',              path: '/committees/finance',                   icon: '💰' },
  { label: 'Health & Wellness',                  url: '/playbooks/e100_health_wellness_playbook_v1.html',      path: '/committees/health-wellness',           icon: '💪' },
  { label: 'Newsletter',                         url: '/playbooks/e100_newsletter_playbook_v1.html',           path: '/committees/newsletter',                icon: '📰' },
  { label: 'Operation Community Uplift',         url: '/playbooks/e100_ocu_playbook_v1.html',                  path: '/committees/operation-community-uplift', icon: '🏙️' },
  { label: 'Partnerships & Fundraising',         url: '/playbooks/e100_partnerships_playbook_v1.html',         path: '/committees/partnerships',              icon: '🤜' },
  { label: 'Process & Governance',               url: '/playbooks/e100_process_governance_playbook_v1.html',   path: '/committees/process-governance',        icon: '⚙️' },
  { label: 'Social Fundraising',                 url: '/playbooks/e100_social_fundraising_playbook_v1.html',   path: '/committees/social-fundraising',        icon: '🎉' },
]

const sharedDocs = [
  {
    icon: '🗂️',
    label: 'Master Playbook Hub',
    desc: 'Central hub linking all 15 committee playbooks in one view.',
    url: '/playbooks/e100_master_playbook_hub.html',
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
                    Full Playbook ↗
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
