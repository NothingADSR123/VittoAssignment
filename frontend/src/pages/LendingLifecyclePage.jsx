const layers = [
  {
    num: '01',
    title: 'Customer Acquisition',
    desc: 'AI-driven lead scoring and channel attribution to identify high-intent, credit-eligible prospects before they apply.',
    modules: [
      { name: 'Lead Scoring', detail: 'Rank inbound leads by predicted credit eligibility using pre-application signals.' },
      { name: 'Channel Attribution', detail: 'Track which acquisition channels produce the lowest default rates, not just the highest volumes.' },
      { name: 'Pre-qualification API', detail: 'Soft-check eligibility in real time without a bureau pull, reducing drop-off at the top of the funnel.' },
    ],
  },
  {
    num: '02',
    title: 'Underwriting & LOS',
    desc: 'End-to-end loan origination with ML-assisted underwriting, automated document processing, and configurable credit policy.',
    modules: [
      { name: 'Application Processing', detail: 'Structured intake with OCR-based document extraction and validation.' },
      { name: 'Credit Assessment', detail: 'Multi-bureau pull, bank statement analysis, and ML scoring in a single workflow.' },
      { name: 'Policy Engine', detail: 'Configurable rules layered on ML scores, with version control and audit trail.' },
      { name: 'Sanction & Disbursement', detail: 'Automated sanction letter generation and disbursement trigger on policy approval.' },
    ],
  },
  {
    num: '03',
    title: 'Collections',
    desc: 'Predictive collections that act before delinquency deepens, not after.',
    modules: [
      { name: 'Propensity Scoring', detail: 'Daily scoring of all active borrowers on likelihood to pay in the next 7 days.' },
      { name: 'Contact Orchestration', detail: 'Automated scheduling of calls, SMS, and WhatsApp based on borrower response history.' },
      { name: 'Field Visit Allocation', detail: 'Prioritise field visits by recovery probability and outstanding amount.' },
      { name: 'Settlement Engine', detail: 'Calculate and offer settlement amounts within policy-defined bands, without manual approval for standard cases.' },
      { name: 'Legal Trigger', detail: 'Automated escalation to legal workflow when recovery probability drops below threshold.' },
    ],
  },
  {
    num: '04',
    title: 'Loan Management System (LMS)',
    desc: 'Real-time loan servicing with automated repayment processing, restructuring workflows, and portfolio monitoring.',
    modules: [
      { name: 'Repayment Processing', detail: 'Automated reconciliation of NACH, UPI, and manual payments against EMI schedules.' },
      { name: 'Restructuring Workflow', detail: 'Configurable restructuring templates with automated recalculation of schedules.' },
      { name: 'Portfolio Dashboard', detail: 'Real-time view of DPD distribution, NPA levels, and collection efficiency.' },
      { name: 'Regulatory Reporting', detail: 'Automated generation of RBI-mandated reports from live portfolio data.' },
    ],
  },
  {
    num: '05',
    title: 'CRM & Communications',
    desc: 'Borrower relationship management with AI-assisted communication across the full loan lifecycle.',
    modules: [
      { name: 'Borrower 360', detail: 'Unified view of every interaction, transaction, and communication for each borrower.' },
      { name: 'Automated Notifications', detail: 'EMI reminders, payment confirmations, and statement delivery via preferred channel.' },
      { name: 'Complaint Management', detail: 'Structured intake and resolution tracking for borrower grievances, with SLA monitoring.' },
    ],
  },
]

export default function LendingLifecyclePage() {
  return (
    <main className="py-20 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>Full Stack Automation</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#E8EAF0' }}>
            The full lending lifecycle, automated
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8892A4' }}>
            Five operational layers. Each one AI-native. All connected through a shared data architecture.
          </p>
        </div>

        <div className="space-y-10">
          {layers.map(layer => (
            <div key={layer.num} className="p-8 rounded-lg" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
              <div className="flex items-start gap-6 mb-6">
                <span className="text-3xl font-bold font-mono flex-shrink-0" style={{ color: '#D32F2F' }}>{layer.num}</span>
                <div>
                  <h2 className="text-xl font-bold mb-2" style={{ color: '#E8EAF0' }}>{layer.title}</h2>
                  <p className="text-sm" style={{ color: '#8892A4' }}>{layer.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-14">
                {layer.modules.map(mod => (
                  <div key={mod.name} className="p-4 rounded" style={{ backgroundColor: '#0F3460', border: '1px solid #1A1A2E' }}>
                    <div className="text-sm font-semibold mb-1" style={{ color: '#E8EAF0' }}>{mod.name}</div>
                    <div className="text-xs leading-relaxed" style={{ color: '#8892A4' }}>{mod.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
