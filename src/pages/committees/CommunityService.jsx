import CommitteePage from '../../components/CommitteePage'

export default function CommunityService() {
  return (
    <CommitteePage
      name="Community Service"
      icon="🤝"
      tagline="Serving Atlanta with purpose — hands-on impact in the neighborhoods we call home."
      overview="The Community Service committee leads Emerging 100 ATL's grassroots volunteer and service initiatives throughout the Atlanta metropolitan area. From food drives to neighborhood cleanups and back-to-school events, this committee coordinates the hands-on community engagement work that makes the Emerging 100 mission tangible. Every service event is an opportunity to model excellence while making a direct impact."
      chairs={['Bayo Adegbite', 'Neil Phillips', 'Kofi Gyebi', 'Yohance Thomas']}
      responsibilities={[
        'Plan, organize, and execute a minimum of six community service events per year.',
        'Identify and maintain relationships with Atlanta nonprofit and community partner organizations.',
        'Coordinate member volunteer sign-ups, logistics, and day-of event management.',
        'Track volunteer hours and service impact data for reporting and recognition.',
        'Align service events with the organization\'s focus areas: education, health, and economic empowerment.',
        'Collaborate with Operation Community Uplift for large-scale service initiatives.',
      ]}
      goals={[
        'Log a collective 1,000+ volunteer hours across the membership during the term.',
        'Establish two ongoing recurring service partnerships with Atlanta nonprofits.',
        'Host a signature community service event that becomes a flagship annual program.',
        'Develop a service impact report to be shared at the Awards Gala.',
        'Increase member participation in service events by making sign-up and logistics seamless.',
      ]}
      playbookUrl="/playbooks/e100_community_service_playbook_v1.html"
      playbookPdfUrl="/playbooks/pdf/e100_community_service_playbook_v1.pdf"
    />
  )
}
