import { Link } from 'react-router-dom'
import { useState } from 'react'

const footerLinks = {
  Product: [
    { label: 'AI Platform', href: '/platform' },
    { label: 'Lending Lifecycle', href: '/lending-lifecycle' },
    { label: 'Collections', href: '/collections' },
    { label: 'Agentic AI', href: '/agentic-ai' },
    { label: 'API Infrastructure', href: '/api-infrastructure' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get Started', href: '/signup' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer style={{ backgroundColor: '#16213E', borderTop: '1px solid #0F3460' }} className="mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="text-xl font-bold mb-3" style={{ color: '#E8EAF0' }}>
            Vitto<span style={{ color: '#D32F2F' }}>.</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>
            AI-native infrastructure for banks, NBFCs, and MFIs. Built for the full lending lifecycle.
          </p>
          <div className="flex gap-4 mt-6">
            {['LinkedIn', 'Twitter', 'GitHub'].map(s => (
              <a key={s} href="#" className="text-xs font-medium transition-colors" style={{ color: '#8892A4' }}
                onMouseEnter={e => e.target.style.color = '#D32F2F'}
                onMouseLeave={e => e.target.style.color = '#8892A4'}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D32F2F' }}>{section}</div>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm transition-colors" style={{ color: '#8892A4' }}
                    onMouseEnter={e => e.target.style.color = '#E8EAF0'}
                    onMouseLeave={e => e.target.style.color = '#8892A4'}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D32F2F' }}>Newsletter</div>
          <p className="text-sm mb-4" style={{ color: '#8892A4' }}>Insights on AI in lending, collections, and credit risk.</p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 text-sm px-3 py-2 rounded outline-none"
              style={{ backgroundColor: '#0F3460', color: '#E8EAF0', border: '1px solid #1A1A2E' }}
            />
            <button
              className="text-sm font-semibold px-4 py-2 rounded transition-colors"
              style={{ backgroundColor: '#D32F2F', color: '#fff' }}
              onMouseEnter={e => e.target.style.backgroundColor = '#B71C1C'}
              onMouseLeave={e => e.target.style.backgroundColor = '#D32F2F'}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #0F3460' }} className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs" style={{ color: '#8892A4' }}>© 2025 Vitto Technologies Pvt. Ltd. All rights reserved.</p>
        <p className="text-xs" style={{ color: '#8892A4' }}>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  )
}
