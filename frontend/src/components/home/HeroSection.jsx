import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1A1A2E' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#0F3460 1px, transparent 1px), linear-gradient(90deg, #0F3460 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: '#D32F2F' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: '#0F3460', color: '#D32F2F', border: '1px solid #D32F2F22' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#D32F2F' }} />
          AI-Native · Not Retrofitted
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#E8EAF0' }}>
          AI-First Infrastructure for<br />
          <span style={{ color: '#D32F2F' }}>Modern Financial Services</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed" style={{ color: '#8892A4' }}>
          Vitto is not retrofitted AI bolted onto legacy systems. It is not a fragmented set of point solutions.
          It is a unified, domain-trained AI infrastructure built ground-up for Banks, NBFCs, and MFIs.
        </p>

        <p className="text-sm max-w-2xl mx-auto mb-10" style={{ color: '#8892A4' }}>
          From credit assessment to collections — every layer is AI-native, explainable, and built for regulated financial environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded text-sm font-semibold transition-colors duration-200"
            style={{ backgroundColor: '#D32F2F', color: '#fff' }}
            onMouseEnter={e => e.target.style.backgroundColor = '#B71C1C'}
            onMouseLeave={e => e.target.style.backgroundColor = '#D32F2F'}
          >
            Book a Demo
          </Link>
          <Link
            to="/platform"
            className="px-8 py-3.5 rounded text-sm font-semibold transition-colors duration-200"
            style={{ color: '#E8EAF0', border: '1px solid #0F3460' }}
            onMouseEnter={e => { e.target.style.borderColor = '#D32F2F'; e.target.style.color = '#D32F2F' }}
            onMouseLeave={e => { e.target.style.borderColor = '#0F3460'; e.target.style.color = '#E8EAF0' }}
          >
            Explore Platform →
          </Link>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
          style={{ border: '1px solid #0F3460', backgroundColor: '#16213E' }}>
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#0F3460', borderBottom: '1px solid #1A1A2E' }}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D32F2F' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF9800' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4CAF50' }} />
            <div className="ml-4 text-xs font-mono" style={{ color: '#8892A4' }}>vitto.ai / dashboard</div>
          </div>
          {/* Mock dashboard content */}
          <div className="p-6 grid grid-cols-3 gap-4">
            {[
              { label: 'Applications Today', value: '1,284', change: '+12%', color: '#4CAF50' },
              { label: 'Avg Decision Time', value: '1.7s', change: '-0.3s', color: '#2196F3' },
              { label: 'Recovery Rate', value: '78.4%', change: '+3.1%', color: '#D32F2F' },
            ].map(stat => (
              <div key={stat.label} className="p-4 rounded-lg" style={{ backgroundColor: '#0F3460' }}>
                <div className="text-xs mb-1" style={{ color: '#8892A4' }}>{stat.label}</div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#E8EAF0' }}>{stat.value}</div>
                <div className="text-xs font-semibold" style={{ color: stat.color }}>{stat.change}</div>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6 grid grid-cols-2 gap-4">
            {/* Mock chart bar */}
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#0F3460' }}>
              <div className="text-xs mb-3" style={{ color: '#8892A4' }}>Credit Decisions — Last 7 Days</div>
              <div className="flex items-end gap-1 h-16">
                {[60, 80, 55, 90, 70, 95, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm transition-all"
                    style={{ height: `${h}%`, backgroundColor: i === 5 ? '#D32F2F' : '#1A1A2E' }} />
                ))}
              </div>
            </div>
            {/* Mock model scores */}
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#0F3460' }}>
              <div className="text-xs mb-3" style={{ color: '#8892A4' }}>Model Performance</div>
              {[
                { label: 'Credit Model AUC', val: 87 },
                { label: 'Fraud Precision', val: 94 },
                { label: 'Collection Propensity', val: 79 },
              ].map(m => (
                <div key={m.label} className="mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: '#8892A4' }}>{m.label}</span>
                    <span style={{ color: '#E8EAF0' }}>{m.val}%</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ backgroundColor: '#1A1A2E' }}>
                    <div className="h-1 rounded-full" style={{ width: `${m.val}%`, backgroundColor: '#D32F2F' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '< 2s', label: 'Credit Decision Latency' },
            { value: '40%', label: 'Reduction in Default Rate' },
            { value: '3×', label: 'Collections Recovery Lift' },
            { value: '99.9%', label: 'API Uptime SLA' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: '#D32F2F' }}>{stat.value}</div>
              <div className="text-xs" style={{ color: '#8892A4' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
