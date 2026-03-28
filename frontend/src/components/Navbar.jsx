import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Lending Lifecycle', href: '/lending-lifecycle' },
  { label: 'Collections', href: '/collections' },
  { label: 'Agentic AI', href: '/agentic-ai' },
  { label: 'API', href: '/api-infrastructure' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav style={{ backgroundColor: '#16213E', borderBottom: '1px solid #0F3460' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight" style={{ color: '#E8EAF0' }}>
          Vitto<span style={{ color: '#D32F2F' }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: pathname === link.href ? '#D32F2F' : '#8892A4' }}
              onMouseEnter={e => e.target.style.color = '#E8EAF0'}
              onMouseLeave={e => e.target.style.color = pathname === link.href ? '#D32F2F' : '#8892A4'}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-sm font-medium px-4 py-2 rounded transition-colors duration-200"
            style={{ color: '#E8EAF0', border: '1px solid #0F3460' }}
            onMouseEnter={e => e.target.style.borderColor = '#D32F2F'}
            onMouseLeave={e => e.target.style.borderColor = '#0F3460'}
          >
            Book a Demo
          </Link>
          <Link
            to="/signup"
            className="text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
            style={{ backgroundColor: '#D32F2F', color: '#fff' }}
            onMouseEnter={e => e.target.style.backgroundColor = '#B71C1C'}
            onMouseLeave={e => e.target.style.backgroundColor = '#D32F2F'}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: '#E8EAF0' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: '#16213E', borderTop: '1px solid #0F3460' }} className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link key={link.href} to={link.href} className="text-sm font-medium" style={{ color: '#8892A4' }} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/signup" className="text-sm font-semibold px-4 py-2 rounded text-center" style={{ backgroundColor: '#D32F2F', color: '#fff' }} onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
