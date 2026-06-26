import CommitteePage from '../../components/CommitteePage'

export default function Collegiate100() {
  return (
    <CommitteePage
      name="Collegiate 100"
      icon="🏛️"
      tagline="Bridging the gap between college life and professional success for the next generation."
      overview="The Collegiate 100 committee engages and develops college students across five Atlanta campuses – Georgia State University, Spelman College, Clark Atlanta University, Morehouse College, and Oglethorpe University. Through the Career Fair, the RISE Leadership Development Program for women, mentorship events, and campus programming, C100 Chairs serve as connectors and champions for the next generation of leaders as they move from the college campus into the corporation."
      chairs={['Donte Wilder', 'Nile Oates', 'Dylan Merriweather', 'Desmond Hazel', 'Ian Barrett']}
      advisors={['Fortune Onwuzuruike', 'Rickey Townsend', 'Chris Moon']}
      term="2026–2027"
      responsibilities={[]}
      goals={[]}
      playbookUrl="/playbooks/e100_c100_playbook_v2.html"
      playbookPdfUrl="/playbooks/pdf/e100_c100_playbook_v2.pdf"
    />
  )
}
