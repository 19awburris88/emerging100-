import { useState, useEffect } from 'react'
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <button
      className={`btt ${visible ? 'btt--on' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
