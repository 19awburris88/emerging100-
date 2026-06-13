import CommitteePage from '../../components/CommitteePage'

export default function Partnerships() {
  return (
    <CommitteePage
      name="Partnerships"
      icon="🔗"
      tagline="Building alliances that expand our reach and multiply our impact across Atlanta."
      overview="The Partnerships committee cultivates and manages strategic relationships between Emerging 100 ATL and external organizations — corporations, nonprofits, civic institutions, and community groups. These partnerships provide resources, amplify the organization's mission, create opportunities for members, and expand E100's sphere of influence in Atlanta and beyond."
      chairs={['Joshua-John Frank', 'Brandon Berry', 'Avion Cainion', 'Justin Keys']}
      responsibilities={[
        'Identify, prospect, and develop relationships with potential partner organizations.',
        'Negotiate and formalize partnership agreements with clearly defined mutual benefits.',
        'Maintain a partnership portfolio and ensure existing partners receive ongoing value and recognition.',
        'Collaborate with Finance and the Gala committee on corporate sponsorship strategy.',
        'Create partnership decks, one-pagers, and proposals for outreach.',
        'Report on partnership pipeline, active relationships, and value delivered each quarter.',
      ]}
      goals={[
        'Onboard five new organizational partners during the term across varied sectors.',
        'Create a formal Partnership Prospectus document used for all outreach.',
        'Develop tiered partnership levels (Gold, Silver, Bronze) with clear benefits and pricing.',
        'Re-engage dormant or lapsed partnerships from previous terms.',
        'Host a partner appreciation event or recognition moment at the Gala.',
      ]}
      playbookUrl="/playbooks/e100_partnerships_playbook_v1.html"
      playbookPdfUrl="/playbooks/pdf/e100_partnerships_playbook_v1.pdf"
    />
  )
}
