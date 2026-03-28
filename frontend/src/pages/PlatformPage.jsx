import { Link } from 'react-router-dom'

const modules = [
  {
    id: 'data-assessment',
    icon: '📊',
    title: 'Data-Based Assessment',
    summary: 'Multi-source data ingestion and normalisation into a unified borrower profile.',
    detail: `Vitto ingests data from credit bureaus (CIBIL, Experian, CRIF), bank statement analysers, GST filings, telecom operators, and alternative data sources. Each source is normalised into a structured borrower profile using domain-specific parsers — not generic JSON transformers.

The output is a feature vector that feeds directly into the ML credit model, with full lineage tracking so every input can be audited.`,
  },
  {
    id: 'ml-model',
    icon: '🤖',
    title: 'ML Credit Model',
    summary: 'Gradient-boosted and neural models trained on BFSI-specific repayment data.',
    detail: `The core credit model is an ensemble of gradient-boosted trees and a shallow neural network, trained on historical repayment data from the lending domain. The model is retrained on a rolling window to account for portfolio drift and macroeconomic shifts.

Feature importance is computed at inference time using SHAP values, giving credit officers a ranked list of factors that drove each decision. This is not post-hoc explainability — it is built into the inference pipeline.`,
  },
  {
    id: 'rule-engine',
    icon: '⚙️',
    title: 'Rule Engine & Decisioning',
    summary: 'Configurable credit policy rules layered on ML scores, with full version control.',
    detail: `Credit policy is expressed as a set of configurable rules that operate on the ML model's output and raw borrower attributes. Rules can be created, modified, and versioned by credit officers without engineering involvement.

Every rule change is logged with a timestamp, author, and the set of decisions it affected. This creates a complete audit trail for regulatory review.`,
  },
  {
    id: 'fraud',
    icon: '🛡️',
    title: 'Fraud Intelligence',
    summary: 'Identity verification, device signals, and network-based fraud detection at application time.',
    detail: `Fraud checks run in parallel with credit assessment, not sequentially. Identity verification uses document OCR, liveness detection, and cross-referencing against known fraud databases. Device fingerprinting captures signals like SIM swap history, device age, and app install patterns.

Network analysis identifies connections between applicants — shared addresses, phone numbers, or employer details — that may indicate organised fraud rings.`,
  },
  {
    id: 'collections',
    icon: '📞',
    title: 'Collection Intelligence',
    summary: 'Propensity-to-pay scoring and intelligent contact orchestration for collections teams.',
    detail: `The collections module scores every delinquent borrower daily on their propensity to pay, using repayment history, communication response patterns, and external signals. This score determines contact priority, channel selection (call, SMS, WhatsApp, field visit), and the timing of each outreach.

The system does not replace collections agents — it tells them who to call, when to call, and what to say, based on what has worked for similar borrower profiles in the past.`,
  },
  {
    id: 'agentic',
    icon: '🧠',
    title: 'Agentic AI Layer',
    summary: 'Autonomous agents for borrowers, field officers, and underwriters — powered by domain-trained SLMs.',
    detail: `See the dedicated Agentic AI page for a full technical breakdown.`,
    link: '/agentic-ai',
  },
]

export default function PlatformPage() {
  return (
    <main className="py-20 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>AI Platform</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#E8EAF0' }}>
            Six modules. One architecture.
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8892A4' }}>
            Each module is independently deployable but shares a common data layer, model registry, and audit infrastructure.
          </p>
        </div>

        <div className="space-y-12">
          {modules.map((m, i) => (
            <div
              key={m.id}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl flex-shrink-0">{m.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono" style={{ color: '#D32F2F' }}>0{i + 1}</span>
                    <h2 className="text-xl font-bold" style={{ color: '#E8EAF0' }}>{m.title}</h2>
                  </div>
                  <p className="text-sm font-medium mb-4" style={{ color: '#D32F2F' }}>{m.summary}</p>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#8892A4' }}>{m.detail}</p>
                  {m.link && (
                    <Link to={m.link} className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider" style={{ color: '#D32F2F' }}>
                      Full breakdown →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
