import CommitteePage from '../../components/CommitteePage'

export default function Finance() {
  return (
    <CommitteePage
      name="Finance"
      icon="💰"
      tagline="Stewarding our resources with integrity to sustain the mission now and for years to come."
      overview="The Finance committee is responsible for the fiscal health of Emerging 100 ATL. Working alongside the Treasurer, the committee oversees budgeting, financial reporting, dues collection, expense management, and financial compliance. The committee ensures the organization operates sustainably and that resources are allocated effectively to maximize mission impact."
      chairs={['Bryan Hatcher', 'Jamario Walker']}
      responsibilities={[
        'Develop and manage the annual organizational budget in partnership with the Treasurer.',
        'Monitor monthly income and expenses and report financial health to the executive board.',
        'Oversee member dues collection and ensure all accounts are current.',
        'Audit committee spending against approved budgets and flag variances.',
        'Ensure tax compliance, filing deadlines, and financial recordkeeping are maintained.',
        'Evaluate financial requests from committees and make funding recommendations.',
      ]}
      goals={[
        'Establish a 6-month operating reserve for the organization by end of term.',
        'Implement a transparent budget reporting process shared with all committee chairs.',
        'Reduce dues delinquency by 20% through proactive outreach and payment plans.',
        'Create a financial policy guide for all committee chairs on expense submission and approval.',
        'Explore and present grant or foundation funding opportunities relevant to E100 programs.',
      ]}
      playbookUrl="/playbooks/e100_finance_playbook_v1.html"
    />
  )
}
