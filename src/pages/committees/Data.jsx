import CommitteePage from '../../components/CommitteePage'

export default function Data() {
  return (
    <CommitteePage
      name="Data"
      icon="📊"
      tagline="Turning information into insight — data-driven decision making for Emerging 100 ATL."
      overview="The Data committee is responsible for collecting, analyzing, and reporting organizational data that informs strategy and demonstrates impact. This includes membership metrics, program outcomes, event attendance, scholarship data, and community service hours. The committee ensures leadership has the information needed to make effective decisions and that the organization can clearly communicate its impact to stakeholders."
      chairs={['Casey Jostine', 'Kirk Willabus']}
      responsibilities={[
        'Build and maintain dashboards tracking key organizational KPIs and member engagement metrics.',
        'Collect and analyze program outcome data from all committee operations.',
        'Prepare quarterly data reports for the executive board and annual impact reports.',
        'Standardize data collection methods across committees to ensure consistency.',
        'Manage member database integrity and ensure records are current and accurate.',
        'Provide data analysis support for grant applications, sponsorship decks, and community reports.',
      ]}
      goals={[
        'Build a centralized organizational dashboard accessible to the executive board.',
        'Establish a standard data collection protocol adopted by all committees.',
        'Produce the organization\'s first formal annual impact report with key metrics.',
        'Create a scholarship tracking system for awardees and outcomes.',
        'Develop a member engagement scoring model to identify and reconnect inactive members.',
      ]}
      playbookUrl="/playbooks/e100_data_playbook_v1.html"
    />
  )
}
