import CommitteePage from '../../components/CommitteePage'

export default function Collegiate100() {
  return (
    <CommitteePage
      name="Collegiate 100"
      icon="🏛️"
      tagline="Bridging the gap between college life and professional success for the next generation."
      overview="The Collegiate 100 committee focuses on engaging, mentoring, and developing college-aged Black men as they transition from academia into professional life. The committee creates pathways for college students to connect with Emerging 100 members and the broader 100 Black Men network, gain exposure to career opportunities, and develop the leadership skills needed to thrive in their fields."
      chairs={['Chris Moon', 'Dr. Fortune Onwuzuruike', 'Rickey Townsend', 'Corey Jones']}
      responsibilities={[
        'Build and maintain relationships with HBCUs and PWIs in the Atlanta metro area.',
        'Organize campus visit programs, career panels, and networking events for college students.',
        'Facilitate a pipeline for college students to transition into Emerging 100 membership.',
        'Coordinate mentoring pairings between E100 members and college-aged mentees.',
        'Plan an annual Collegiate Summit or engagement event for students.',
        'Connect students with internship and career opportunities through member networks.',
      ]}
      goals={[
        'Partner with at least four Atlanta-area colleges or universities during the term.',
        'Host two campus engagement events per academic year.',
        'Establish a formal Collegiate 100 chapter pipeline into E100 membership.',
        'Create a resource guide for college students covering career development, networking, and financial literacy.',
        'Grow the number of college-aged mentees connected to E100 members by 30%.',
      ]}
      playbookUrl="/playbooks/e100_c100_playbook_v2.html"
      playbookPdfUrl="/playbooks/pdf/e100_c100_playbook_v2.pdf"
    />
  )
}
