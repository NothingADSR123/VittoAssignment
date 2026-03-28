const features = [
  {
    title: 'Propensity-to-Pay Scoring',
    desc: 'Every delinquent borrower is scored daily on their likelihood to make a payment in the next 7 days. The model uses repayment history, communication response rates, employment signals, and macroeconomic indicators. Collections teams work the highest-propensity accounts first — not the oldest DPD buckets.',
  },
  {
    title: 'Optimal Contact Timing',
    desc: 'The system learns when each borrower is most likely to respond — based on their historical response patterns — and schedules outreach accordingly. A borrower who consistently responds to calls on Saturday mornings will be contacted on Saturday mornings.',
  },
  {
    title: 'Channel Selection',
    desc: 'Not every borrower responds to the same channel. The system selects between call, SMS, WhatsApp, and field visit based on what has worked for that borrower in the past, and what has worked for similar borrower profiles.',
  },
  {
    title: 'Settlement Calculation',
    desc: 'For borrowers in deep delinquency, the system calculates the minimum acceptable settlement amount within policy-defined bands. Standard settlement offers are generated and communicated without requiring manual credit officer approval.',
  },
  {
    title: 'Field Visit Prioritisation',
    desc: 'Field visits are expensive. The system ranks borrowers by the expected recovery value of a field visit — factoring in outstanding amount, propensity score, and distance — so field agents spend their time where it has the highest impact.',
  },
  {
    title: 'Portfolio-Level Monitoring',
    desc: 'Real-time dashboards show DPD distribution, bucket migration rates, collection efficiency by agent and channel, and predicted NPA levels for the next 30 and 90 days.',
  },
]

export default function CollectionsPage() {
  return (
    <main className="py-20 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>Collections Intelligence</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#E8EAF0' }}>
            Act before the bucket deepens
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8892A4' }}>
            Collections driven by predicted behaviour, not historical DPD. The difference is the recovery window.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(f => (
            <div
              key={f.title}
              className="p-6 rounded-lg transition-all duration-300"
              style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D32F2F'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#0F3460'}
            >
              <h3 className="text-base font-semibold mb-3" style={{ color: '#E8EAF0' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
