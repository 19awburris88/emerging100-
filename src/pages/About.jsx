import './About.css'

const board = [
  { title: 'President',       name: 'Daniel Farr' },
  { title: 'Vice President',  name: 'Julius Thomas' },
  { title: 'Treasurer',       name: 'Brandon Whatley' },
  { title: 'Secretary',       name: 'Dr. Tony Price' },
  { title: 'Parliamentarian', name: 'Carl McCray' },
]

const values = [
  { v: 'Integrity',    d: 'We lead with honesty and accountability in everything we do.' },
  { v: 'Excellence',  d: 'We pursue the highest standard in service, character, and results.' },
  { v: 'Community',   d: 'We are rooted in Atlanta and invested in its people and future.' },
  { v: 'Brotherhood', d: 'We strengthen and support each other as a unified organization.' },
]

export default function About() {
  return (
    <main>
      <div className="page-hero">
        <p className="eyebrow">Who We Are</p>
        <h1>About Emerging 100 ATL</h1>
        <p>The official young professional auxiliary of the 100 Black Men of Atlanta, Inc.</p>
        <div className="gold-bar" />
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container about-mission">
          <div className="about-mission-text">
            <p className="tag">Our Mission</p>
            <h2 className="section-title">Built to Serve, Built to Lead</h2>
            <p>
              Emerging 100 Atlanta serves as the premier young professionals organization for high-achieving
              Black men aged 25–35. As the young professional auxiliary of the 100 Black Men of Atlanta, Inc.,
              we enhance the mentoring and tutoring programs of our parent organization while developing
              the next generation of Black male leaders.
            </p>
            <p style={{ marginTop: '16px' }}>
              Our work is centered on role modeling and community service. We believe that when we pour into
              our members, they are better equipped to pour into the communities they serve — creating a
              cycle of excellence that extends far beyond our membership.
            </p>
          </div>
          <div className="about-mission-quote card card-border-top">
            <p className="quote-text">
              "When we pour into our members, they are better equipped to pour into the communities they serve."
            </p>
            <span className="quote-attr">— Emerging 100 ATL</span>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Parent Org */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p className="tag">Our Foundation</p>
          <h2 className="section-title">100 Black Men of Atlanta, Inc.</h2>
          <p className="section-sub" style={{ maxWidth: '680px' }}>
            Emerging 100 ATL operates as the young professional auxiliary of the 100 Black Men of Atlanta —
            one of the most respected civic organizations in the country. Our work directly supports and
            extends the parent organization's mission of mentoring youth and strengthening communities.
          </p>

          <div className="grid-3" style={{ marginTop: '40px' }}>
            <div className="card">
              <div className="tag">Program</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '8px' }}>B.E.S.T. Academy</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Our flagship mentoring and tutoring program for K–12 students in the Atlanta community.
              </p>
            </div>
            <div className="card">
              <div className="tag">Program</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '8px' }}>Collegiate 100</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Supporting and engaging college-aged young men as they transition into professional life.
              </p>
            </div>
            <div className="card">
              <div className="tag">Event</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '8px' }}>Awards & Scholarship Gala</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Our annual gala recognizing emerging leaders and awarding scholarships to deserving students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Values */}
      <section className="section">
        <div className="container">
          <p className="tag">What We Stand For</p>
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid-2" style={{ marginTop: '32px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {values.map(v => (
              <div key={v.v} className="value-card card">
                <h3>{v.v}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Board */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p className="tag">2025–2027 Term</p>
          <h2 className="section-title">Executive Board</h2>
          <p className="section-sub">Elected leadership guiding Emerging 100 ATL for this term.</p>
          <div className="board-grid">
            {board.map(b => (
              <div key={b.name} className="board-card card">
                <div className="board-avatar">{b.name.charAt(0)}</div>
                <div>
                  <p className="board-title">{b.title}</p>
                  <p className="board-name">{b.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
