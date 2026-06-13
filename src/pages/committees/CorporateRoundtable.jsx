import CommitteePage from '../../components/CommitteePage'

export default function CorporateRoundtable() {
  return (
    <CommitteePage
      name="Corporate Roundtable"
      icon="💼"
      tagline="Connecting our members to corporate Atlanta — opportunity, access, and professional growth."
      overview="The Corporate Roundtable committee creates pathways for Emerging 100 members to engage with Atlanta's corporate and business community. Through curated roundtable discussions, executive panels, and professional development programming, this committee ensures members have direct access to the networks and knowledge needed to advance their careers and create economic opportunity in their communities."
      chairs={['Bobby Kannady', 'Tyler Royal']}
      responsibilities={[
        'Organize quarterly corporate roundtable events with executives and corporate leaders.',
        'Cultivate relationships with Atlanta-area companies for sponsorships, partnerships, and engagement.',
        'Create professional development workshops on career advancement, entrepreneurship, and networking.',
        'Identify and promote internship, job, and board seat opportunities for E100 members.',
        'Coordinate lunch-and-learn or fireside chat series featuring member professionals.',
        'Collaborate with the Partnerships committee on corporate engagement strategy.',
      ]}
      goals={[
        'Host four corporate roundtable events during the term, each with 20+ member attendance.',
        'Develop a corporate partner directory with commitment levels and engagement benefits.',
        'Launch an E100 professional mentoring track connecting members with executives.',
        'Create a job board or opportunity board accessible to all E100 members.',
        'Secure at least two new corporate sponsors for programming through relationship-building.',
      ]}
      playbookUrl="/playbooks/e100_corporate_roundtable_playbook_v1.html"
    />
  )
}
