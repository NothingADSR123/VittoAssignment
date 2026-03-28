const features = [
  {
    title: 'Domain-trained models',
    desc: 'Models trained on BFSI-specific data — bureau signals, repayment behaviour, field agent notes — not generic tabular datasets.',
  },
  {
    title: 'Unified data architecture',
    desc: 'A single data layer connects acquisition, underwriting, servicing, and collections. No ETL pipelines between modules.',
  },
  {
    title: 'Explainability by design',
    desc: 'Every credit decision comes with a reason code. Regulators, credit officers, and borrowers can all understand why a decision was made.',
  },
  {
    title: 'Real-time inference',
    desc: 'Sub-2-second decisioning at the point of application. No batch scoring, no overnight jobs.',
  },
]

export default function SolutionSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>The Vitto Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#E8EAF0' }}>
            Infrastructure designed for AI — not adapted to it
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#8892A4' }}>
            Vitto was architected with AI as the primary execution layer, not as a plugin. Every module — from lead scoring to field collections — runs on models that understand the lending domain.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#8892A4' }}>
            The result is a system where data flows without friction, decisions are made in real time, and every output is auditable. This is what AI-native means in practice.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-4">
          {features.map(f => (
            <div
              key={f.title}
              className="flex gap-4 p-5 rounded-lg transition-all duration-200"
              style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D32F2F'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#0F3460'}
            >
              <div className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#D32F2F', marginTop: '6px' }} />
              <div>
                <div className="text-sm font-semibold mb-1" style={{ color: '#E8EAF0' }}>{f.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
