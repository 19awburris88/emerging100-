import CommitteePage from '../../components/CommitteePage'

export default function SocialFundraising() {
  return (
    <CommitteePage
      name="Social Fundraising"
      icon="🎉"
      tagline="Building brotherhood, raising funds, and creating moments members will remember."
      overview="The Social Fundraising committee is responsible for planning and executing social events that build member camaraderie, engage the community, and generate revenue for the organization. From member mixers and happy hours to themed fundraisers and community socials, this committee ensures that E100's social calendar is active, inclusive, and financially productive."
      chairs={['Artie De Los Santos', 'Remington Role', 'Raeshawn Pelote', 'Robert Timmons']}
      responsibilities={[
        'Plan and execute a minimum of six member social events per year.',
        'Develop and manage fundraising events that generate net revenue for the organization.',
        'Coordinate venue sourcing, ticketing, sponsorships, and logistics for all social events.',
        'Create engaging event concepts that appeal to a broad cross-section of the membership.',
        'Partner with the Finance committee to track social event revenue and expenses.',
        'Promote social events in collaboration with the Communication committee.',
      ]}
      goals={[
        'Host at least one large-scale community social fundraiser that becomes an annual tradition.',
        'Ensure all social events generate net-positive revenue after expenses.',
        'Increase member attendance at social events by improving promotion and event quality.',
        'Develop a social event calendar for the full term at the start of the year.',
        'Create a post-event feedback process to continuously improve the member social experience.',
      ]}
      playbookUrl="/playbooks/e100_social_fundraising_playbook_v1.html"
      playbookPdfUrl="/playbooks/pdf/e100_social_fundraising_playbook_v1.pdf"
    />
  )
}
