import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import BESTAcademy from './pages/committees/BESTAcademy'
import Collegiate100 from './pages/committees/Collegiate100'
import Communication from './pages/committees/Communication'
import CommunityService from './pages/committees/CommunityService'
import CorporateRoundtable from './pages/committees/CorporateRoundtable'
import Data from './pages/committees/Data'
import EmergingDevelopment from './pages/committees/EmergingDevelopment'
import EmergingLeadersGala from './pages/committees/EmergingLeadersGala'
import Finance from './pages/committees/Finance'
import HealthWellness from './pages/committees/HealthWellness'
import Newsletter from './pages/committees/Newsletter'
import OperationCommunityUplift from './pages/committees/OperationCommunityUplift'
import Partnerships from './pages/committees/Partnerships'
import ProcessGovernance from './pages/committees/ProcessGovernance'
import SocialFundraising from './pages/committees/SocialFundraising'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NotFound() {
  return (
    <main>
      <div className="page-hero">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <div className="gold-bar" />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/committees/best-academy"              element={<BESTAcademy />} />
        <Route path="/committees/collegiate-100"            element={<Collegiate100 />} />
        <Route path="/committees/communication"             element={<Communication />} />
        <Route path="/committees/community-service"         element={<CommunityService />} />
        <Route path="/committees/corporate-roundtable"      element={<CorporateRoundtable />} />
        <Route path="/committees/data"                      element={<Data />} />
        <Route path="/committees/emerging-development"      element={<EmergingDevelopment />} />
        <Route path="/committees/emerging-leaders-gala"     element={<EmergingLeadersGala />} />
        <Route path="/committees/finance"                   element={<Finance />} />
        <Route path="/committees/health-wellness"           element={<HealthWellness />} />
        <Route path="/committees/newsletter"                element={<Newsletter />} />
        <Route path="/committees/operation-community-uplift" element={<OperationCommunityUplift />} />
        <Route path="/committees/partnerships"              element={<Partnerships />} />
        <Route path="/committees/process-governance"        element={<ProcessGovernance />} />
        <Route path="/committees/social-fundraising"        element={<SocialFundraising />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
