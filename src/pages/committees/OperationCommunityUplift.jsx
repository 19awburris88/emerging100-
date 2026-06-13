import CommitteePage from '../../components/CommitteePage'

export default function OperationCommunityUplift() {
  return (
    <CommitteePage
      name="Operation Community Uplift"
      icon="⬆️"
      tagline="Large-scale community transformation — organized, sustained, and impactful."
      overview="Operation Community Uplift (OCU) is the committee responsible for Emerging 100 ATL's largest and most ambitious community impact initiatives. Where Community Service handles regular volunteer events, OCU coordinates sustained, multi-layered programs designed to address systemic community needs — from economic empowerment and housing support to workforce development and civic engagement in Atlanta neighborhoods."
      chairs={['Reggie White', 'DJ Sims', 'Marvel Joseph', 'Nick Smith']}
      responsibilities={[
        'Identify high-need Atlanta communities for targeted, sustained uplift programming.',
        'Design and execute multi-phase community impact projects over the course of the term.',
        'Coordinate logistics, volunteer recruitment, and partnership management for OCU events.',
        'Secure community partnerships with local government, nonprofits, and institutions.',
        'Measure and document community impact outcomes with the support of the Data committee.',
        'Present OCU program results at the annual Awards Gala and year-end reports.',
      ]}
      goals={[
        'Launch one signature OCU initiative that runs consistently throughout the two-year term.',
        'Engage at least 50 E100 members in OCU programming over the term.',
        'Partner with two Atlanta city agencies or government offices on community programming.',
        'Develop a clear impact measurement framework for all OCU initiatives.',
        'Create a scalable OCU program model that can be replicated in future terms.',
      ]}
      playbookUrl="/playbooks/e100_ocu_playbook_v1.html"
    />
  )
}
