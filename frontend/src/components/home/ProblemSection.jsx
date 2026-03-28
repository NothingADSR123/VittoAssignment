const problems = [
  {
    icon: '⚡',
    title: 'Fragmented Systems',
    desc: 'Origination, underwriting, LMS, and collections run on separate platforms with no shared data layer. Every handoff is a data loss event.',
  },
  {
    icon: '🔧',
    title: 'Non-AI Native Vendors',
    desc: 'Most vendors add ML as an afterthought — a scoring API plugged into a workflow built for rule-based logic. The architecture cannot support real-time inference.',
  },
  {
    icon: '📉',
    title: 'Reactive Collections',
    desc: 'Collections teams act on DPD buckets, not on predicted default probability. By the time a borrower is flagged, the recovery window has already narrowed.',
  },
  {
    icon: '📋',
    title: 'Static Rule Engines',
    desc: 'Credit policies encoded as static rules cannot adapt to portfolio drift, macroeconomic shifts, or new borrower segments without manual intervention.',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#16213E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#E8EAF0' }}>
            Why existing infrastructure fails modern lending
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map(p => (
            <div
              key={p.title}
              className="p-6 rounded-lg transition-all duration-300 cursor-default group"
              style={{ backgroundColor: '#0F3460', border: '1px solid #1A1A2E' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D32F2F'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A2E'}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#E8EAF0' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
