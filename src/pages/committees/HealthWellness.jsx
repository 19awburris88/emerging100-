import CommitteePage from '../../components/CommitteePage'

export default function HealthWellness() {
  return (
    <CommitteePage
      name="Health & Wellness"
      icon="💪"
      tagline="Strong members build strong communities — investing in the whole man."
      overview="The Health & Wellness committee champions the physical, mental, and emotional well-being of Emerging 100 ATL members and the broader Atlanta community. The committee organizes fitness challenges, health screenings, mental health awareness events, and wellness workshops — recognizing that healthy members are more effective leaders, mentors, and community servants."
      chairs={['Johnathan Carey', 'Dr. Sam Chukwuma', 'Quinton Bennet']}
      responsibilities={[
        'Plan and host member wellness events including fitness challenges, health talks, and screenings.',
        'Partner with Atlanta health organizations, clinics, and professionals for community health events.',
        'Promote mental health awareness and create space for member well-being conversations.',
        'Coordinate community health fairs or free screening events in underserved Atlanta neighborhoods.',
        'Integrate wellness content into the organization\'s newsletter and communication channels.',
        'Track member participation in wellness programming and report outcomes to the board.',
      ]}
      goals={[
        'Host a minimum of four member wellness events per year covering physical and mental health.',
        'Organize one community health fair open to the public with free screenings.',
        'Launch a member fitness challenge to build camaraderie and healthy habits.',
        'Develop a mental health resource guide for E100 members.',
        'Partner with at least two Atlanta health organizations to co-host programming.',
      ]}
      playbookUrl="/playbooks/e100_health_wellness_playbook_v1.html"
    />
  )
}
