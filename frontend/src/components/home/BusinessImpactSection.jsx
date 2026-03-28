const impacts = [
  {
    metric: '< 2 seconds',
    label: 'Faster Decisions',
    desc: 'Real-time credit decisioning at the point of application. No overnight batch jobs or manual review queues for standard cases.',
  },
  {
    metric: '40% reduction',
    label: 'Reduced Credit Risk',
    desc: 'Domain-trained models identify default signals earlier and with higher precision than bureau-only or rule-based approaches.',
  },
  {
    metric: '3× lift',
    label: 'Increased Recovery',
    desc: 'Propensity-to-pay scoring and intelligent contact scheduling improve right-party contact rates and promise-to-pay conversions.',
  },
  {
    metric: 'REST + Webhooks',
    label: 'Seamless Integrations',
    desc: 'API-first architecture integrates with your existing CBS, LOS, or CRM without requiring a full system replacement.',
  },
]

export default function BusinessImpactSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>Business Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#E8EAF0' }}>
            Measurable outcomes, not feature lists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map(item => (
            <div
              key={item.label}
              className="p-6 rounded-lg text-center transition-all duration-300"
              style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D32F2F'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#0F3460'}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: '#D32F2F' }}>{item.metric}</div>
              <div className="text-sm font-semibold mb-3" style={{ color: '#E8EAF0' }}>{item.label}</div>
              <p className="text-xs leading-relaxed" style={{ color: '#8892A4' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
