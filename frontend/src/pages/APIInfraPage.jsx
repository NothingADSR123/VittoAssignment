const endpoints = [
  { method: 'POST', path: '/v1/assess/credit', desc: 'Submit a borrower profile for real-time credit assessment. Returns score, reason codes, and policy decision.' },
  { method: 'GET', path: '/v1/borrower/:id/profile', desc: 'Retrieve the unified borrower profile including bureau data, bank statement summary, and repayment history.' },
  { method: 'POST', path: '/v1/collections/score', desc: 'Get propensity-to-pay scores for a batch of delinquent borrowers.' },
  { method: 'POST', path: '/v1/fraud/check', desc: 'Run fraud checks on an application — identity, device, and network signals.' },
  { method: 'GET', path: '/v1/portfolio/summary', desc: 'Portfolio-level metrics: DPD distribution, NPA levels, collection efficiency.' },
  { method: 'POST', path: '/v1/leads', desc: 'Submit a qualified lead for pre-qualification scoring.' },
]

const methodColors = {
  GET: '#4CAF50',
  POST: '#2196F3',
  PUT: '#FF9800',
  DELETE: '#D32F2F',
}

export default function APIInfraPage() {
  return (
    <main className="py-20 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>API Infrastructure</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#E8EAF0' }}>
            API-first. Integrate without replacing.
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8892A4' }}>
            Every Vitto capability is available as a REST API. Integrate individual modules into your existing CBS, LOS, or CRM — or deploy the full stack.
          </p>
        </div>

        {/* SLA cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Uptime SLA', value: '99.9%' },
            { label: 'Credit Decision P95', value: '< 1.8s' },
            { label: 'Fraud Check P95', value: '< 800ms' },
            { label: 'API Versioning', value: 'Semantic' },
          ].map(s => (
            <div key={s.label} className="p-5 rounded-lg text-center" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
              <div className="text-xl font-bold mb-1" style={{ color: '#D32F2F' }}>{s.value}</div>
              <div className="text-xs" style={{ color: '#8892A4' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Endpoints */}
        <h2 className="text-xl font-bold mb-6" style={{ color: '#E8EAF0' }}>Core endpoints</h2>
        <div className="space-y-3 mb-16">
          {endpoints.map(ep => (
            <div key={ep.path} className="p-5 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
              <span
                className="text-xs font-bold font-mono px-2 py-1 rounded flex-shrink-0"
                style={{ backgroundColor: methodColors[ep.method] + '22', color: methodColors[ep.method] }}
              >
                {ep.method}
              </span>
              <div>
                <code className="text-sm font-mono" style={{ color: '#E8EAF0' }}>{ep.path}</code>
                <p className="text-xs mt-1" style={{ color: '#8892A4' }}>{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Auth & integration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Authentication', desc: 'API key + JWT. All requests require a signed token. Keys are scoped to specific endpoints and environments.' },
            { title: 'Webhooks', desc: 'Subscribe to events — loan sanctioned, payment received, DPD threshold crossed — and receive real-time POST callbacks.' },
            { title: 'Sandbox', desc: 'A fully isolated sandbox environment with synthetic portfolio data for integration testing before production deployment.' },
          ].map(item => (
            <div key={item.title} className="p-6 rounded-lg" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#E8EAF0' }}>{item.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#8892A4' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
