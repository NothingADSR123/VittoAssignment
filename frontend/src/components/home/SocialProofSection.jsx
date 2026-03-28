const testimonials = [
  {
    quote: "We replaced three separate vendors with Vitto's unified platform. The reduction in data reconciliation overhead alone justified the switch. The ML-driven collections module improved our bucket-1 recovery rate by 28% in the first quarter.",
    name: 'Head of Credit Risk',
    org: 'Mid-sized NBFC, Maharashtra',
    initials: 'CR',
  },
  {
    quote: "What stood out was the explainability layer. Our credit committee could see exactly why a loan was approved or declined — with feature-level attribution. That's something none of our previous vendors could provide.",
    name: 'Chief Technology Officer',
    org: 'Regional Cooperative Bank',
    initials: 'CT',
  },
]

const logos = ['Bank Alpha', 'FinServe Co.', 'CreditPlus', 'LendRight', 'MFI Group', 'NovaBanc']

export default function SocialProofSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#16213E' }}>
      <div className="max-w-6xl mx-auto">
        {/* Logos */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#8892A4' }}>
            Trusted by lending institutions across India
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map(logo => (
              <div
                key={logo}
                className="px-6 py-3 rounded text-sm font-semibold"
                style={{ backgroundColor: '#0F3460', color: '#8892A4', border: '1px solid #1A1A2E' }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#0F3460', border: '1px solid #1A1A2E' }}
            >
              <div className="text-3xl mb-4" style={{ color: '#D32F2F' }}>"</div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#8892A4' }}>{t.quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: '#D32F2F', color: '#fff' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: '#E8EAF0' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#8892A4' }}>{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
