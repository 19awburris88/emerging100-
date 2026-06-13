import CommitteePage from '../../components/CommitteePage'

export default function BESTAcademy() {
  return (
    <CommitteePage
      name="B.E.S.T. Academy"
      icon="🎓"
      tagline="Building Excellence in Students Today — mentoring and tutoring Atlanta's youth."
      overview="The B.E.S.T. (Building Excellence in Students Today) Academy is the flagship youth development program of Emerging 100 ATL. The committee coordinates mentoring, tutoring, and educational enrichment activities for K–12 students throughout the Atlanta community. Members serve as role models and invest directly in the academic and personal development of the next generation."
      chairs={['Destorian Cash', 'Demetrius Odom', 'Mikal Driver']}
      responsibilities={[
        'Plan and coordinate regular tutoring and mentoring sessions with K–12 students in partner schools.',
        'Recruit and onboard Emerging 100 members as mentors, ensuring training and accountability.',
        'Track student progress and report outcomes to the executive board each quarter.',
        'Build and maintain relationships with Atlanta-area schools and education administrators.',
        'Coordinate logistics for field trips, workshops, and educational enrichment events.',
        'Collaborate with the B.E.S.T. Academy program of 100 Black Men of Atlanta to align curriculum.',
      ]}
      goals={[
        'Establish consistent monthly mentoring sessions with at least three partner schools.',
        'Grow volunteer participation among E100 members by 25% over the term.',
        'Develop a structured curriculum for mentoring sessions aligned with academic standards.',
        'Launch a reading and STEM enrichment track for middle school students.',
        'Report measurable academic improvement data for students in the program.',
      ]}
      playbookUrl="/playbooks/e100_best_academy_playbook_v2.html"
      playbookPdfUrl="/playbooks/pdf/e100_best_academy_playbook_v2.pdf"
    />
  )
}
