const values = [
  { title: 'Domain depth over feature breadth', desc: 'We build fewer things and understand them deeply. Every module is designed by people who have worked in credit, collections, or lending operations.' },
  { title: 'Explainability is not optional', desc: 'In a regulated industry, a model that cannot explain its decisions is a liability. Every Vitto output comes with an audit trail.' },
  { title: 'Infrastructure, not applications', desc: 'We build the layer that other systems run on. Our job is to make your existing teams faster and more accurate — not to replace them.' },
]

export default function AboutPage() {
  return (
    <main className="py-20 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>About Vitto</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#E8EAF0' }}>
            Built by people who understand lending
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8892A4' }}>
            Vitto was founded by a team with backgrounds in credit risk, collections operations, and financial infrastructure engineering. We built this because we spent years working around the limitations of existing systems.
          </p>
        </div>

        <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: '#E8EAF0' }}>Our mission</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>
            To give every bank, NBFC, and MFI access to the same quality of AI infrastructure that was previously only available to the largest institutions with the largest engineering teams. Credit decisions should be fast, accurate, and explainable — regardless of the size of the institution making them.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {values.map(v => (
            <div key={v.title} className="p-6 rounded-lg flex gap-4" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#D32F2F' }} />
              <div>
                <div className="text-sm font-semibold mb-1" style={{ color: '#E8EAF0' }}>{v.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#16213E', border: '1px solid #D32F2F' }}>
          <p className="text-sm mb-4" style={{ color: '#8892A4' }}>Headquartered in India. Serving lending institutions across South and Southeast Asia.</p>
          <p className="text-xs" style={{ color: '#8892A4' }}>Vitto Technologies Pvt. Ltd. · CIN: U72900MH2024PTC000000</p>
        </div>
      </div>
    </main>
  )
}
