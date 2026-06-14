import { useParams } from 'react-router-dom'
import { committees } from '../data/index.js'
import CommitteePage from '../components/CommitteePage'

function NotFound() {
  return (
    <main>
      <div className="page-hero">
        <p className="eyebrow">404</p>
        <h1>Committee Not Found</h1>
        <p>This committee doesn't exist or may have moved.</p>
        <div className="gold-bar" />
      </div>
    </main>
  )
}

export default function CommitteeRoute() {
  const { slug } = useParams()
  const c = committees.find(c => c.slug === slug)
  if (!c) return <NotFound />
  return <CommitteePage {...c} />
}
