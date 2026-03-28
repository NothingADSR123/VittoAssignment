import { Link } from 'react-router-dom'

const modules = [
  {
    icon: '📊',
    title: 'Data-Based Assessment',
    desc: 'Multi-source data ingestion — bureau, bank statements, GST, telecom — normalised into a unified borrower profile.',
    href: '/platform',
  },
  {
    icon: '🤖',
    title: 'ML Credit Model',
    desc: 'Gradient-boosted and neural models trained on domain-specific repayment data, with continuous retraining pipelines.',
    href: '/platform',
  },
  {
    icon: '⚙️',
    title: 'Rule Engine & Decisioning',
    desc: 'Configurable policy rules layered on top of ML scores. Credit officers can override, audit, and version-control every policy.',
    href: '/platform',
  },
  {
    icon: '🛡️',
    title: 'Fraud Intelligence',
    desc: 'Identity verification, device fingerprinting, and network-based fraud detection running at application time.',
    href: '/platform',
  },
  {
    icon: '📞',
    title: 'Collection Intelligence',
    desc: 'Propensity-to-pay scoring, optimal contact timing, and channel selection — driven by borrower behaviour patterns.',
    href: '/collections',
  },
  {
    icon: '🧠',
    title: 'Agentic AI Layer',
    desc: 'Autonomous agents for borrowers, field officers, and underwriters — powered by domain-trained SLMs, not generic LLMs.',
    href: '/agentic-ai',
  },
]

export default function AIModulesSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#16213E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>AI Modules</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#E8EAF0' }}>
            Six layers. One unified platform.
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: '#8892A4' }}>
            Each module is independently deployable but designed to work together — sharing data, context, and model outputs across the full lending lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(m => (
            <div
              key={m.title}
              className="p-6 rounded-lg flex flex-col justify-between transition-all duration-300 group"
              style={{ backgroundColor: '#0F3460', border: '1px solid #1A1A2E' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D32F2F'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A2E'}
            >
              <div>
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#E8EAF0' }}>{m.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#8892A4' }}>{m.desc}</p>
              </div>
              <Link
                to={m.href}
                className="text-xs font-semibold uppercase tracking-wider transition-colors"
                style={{ color: '#D32F2F' }}
                onMouseEnter={e => e.target.style.color = '#E8EAF0'}
                onMouseLeave={e => e.target.style.color = '#D32F2F'}
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
