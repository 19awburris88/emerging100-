import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Resources from './pages/Resources'
import CommitteeRoute from './pages/CommitteeRoute'
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
        <Route path="/"                    element={<Home />} />
        <Route path="/resources"           element={<Resources />} />
        <Route path="/committees/:slug"    element={<CommitteeRoute />} />
        <Route path="*"                    element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
