import CommitteePage from '../../components/CommitteePage'

export default function ProcessGovernance() {
  return (
    <CommitteePage
      name="Process & Governance"
      icon="⚖️"
      tagline="The foundation that keeps us accountable, compliant, and built to last."
      overview="The Process & Governance committee ensures that Emerging 100 ATL operates in accordance with its bylaws, policies, and best practices for organizational management. The committee reviews and updates governance documents, oversees member conduct and accountability, supports election processes, and ensures that the organization's internal processes are efficient, fair, and documented. Good governance is what transforms a good organization into a lasting institution."
      chairs={['Bobby Daniels', 'Terrance Pryor', 'Archie Wilson']}
      responsibilities={[
        'Review, update, and maintain the organization\'s bylaws and standing rules.',
        'Develop and enforce standard operating procedures (SOPs) for committees and events.',
        'Oversee member accountability: attendance tracking, conduct standards, and disciplinary processes.',
        'Facilitate election processes including nominations, balloting, and results certification.',
        'Ensure legal and nonprofit compliance requirements are met and documented.',
        'Maintain an organized archive of all governance documents, meeting minutes, and resolutions.',
      ]}
      goals={[
        'Complete a full bylaws review and update within the first six months of the term.',
        'Create a Process & Governance handbook accessible to all members.',
        'Implement a digital system for tracking member attendance and compliance.',
        'Develop and distribute a new member agreement form outlining expectations and commitments.',
        'Establish a transparent process for member grievances and disciplinary review.',
      ]}
      playbookUrl="/playbooks/e100_process_governance_playbook_v1.html"
      playbookPdfUrl="/playbooks/pdf/e100_process_governance_playbook_v1.pdf"
    />
  )
}
