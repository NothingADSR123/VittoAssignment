const agents = [
  {
    name: 'Borrower Agent',
    icon: '👤',
    desc: `The Borrower Agent handles inbound queries from loan applicants and active borrowers. It can answer questions about application status, EMI schedules, outstanding balances, and repayment options — without routing to a human agent for standard queries.

It is not a chatbot with scripted responses. It retrieves live data from the LMS and LOS, reasons over it, and generates a contextually accurate response. When a borrower asks "why was my loan amount reduced?", the agent retrieves the credit decision record, reads the SHAP-attributed reason codes, and explains the decision in plain language.

The agent escalates to a human when it detects distress signals, legal threats, or queries outside its confidence threshold.`,
  },
  {
    name: 'Field Agent',
    icon: '🏃',
    desc: `The Field Agent is a mobile-first assistant for on-ground collections and verification officers. Before a field visit, it briefs the officer on the borrower's repayment history, last contact outcome, and the recommended approach based on similar borrower profiles.

During the visit, the officer can ask the agent questions in natural language — "what is the minimum settlement amount for this borrower?" or "has this borrower made any partial payments this month?" — and get accurate answers pulled from the LMS in real time.

Post-visit, the agent captures the outcome, updates the collections system, and adjusts the borrower's contact schedule based on what was learned.`,
  },
  {
    name: 'Underwriter Agent',
    icon: '📋',
    desc: `The Underwriter Agent assists credit officers in reviewing complex or exception cases — applications that fall outside standard policy parameters and require human judgment.

It surfaces the relevant data points, flags inconsistencies between declared income and bank statement cash flows, and retrieves comparable cases from the portfolio history. The officer does not need to navigate multiple systems — the agent assembles the case file.

It can also draft a credit memo with the key facts, the model's recommendation, and the policy exceptions being invoked. The officer reviews, edits, and approves. The agent does not make the final decision — it reduces the cognitive load of making it.`,
  },
]

export default function AgenticAIPage() {
  return (
    <main className="py-20 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>Agentic AI</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#E8EAF0' }}>
            Agents that understand lending
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8892A4' }}>
            Not general-purpose LLMs with a fintech prompt. Domain-trained models with access to live portfolio data.
          </p>
        </div>

        {/* RAG Pipeline */}
        <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: '#E8EAF0' }}>How the RAG pipeline works</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#8892A4' }}>
            Retrieval-Augmented Generation (RAG) is the mechanism by which the agents access live data without hallucinating. When a query arrives, the system retrieves the relevant records from the LMS, LOS, or collections database — borrower profile, transaction history, policy documents — and passes them as context to the language model.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>
            The model does not rely on memorised training data to answer questions about a specific borrower. It reads the retrieved records and reasons over them. This means the agents are always working with current data, and their responses are traceable to specific source records.
          </p>
        </div>

        {/* Why not generic LLMs */}
        <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: '#E8EAF0' }}>Why generic LLMs are insufficient for lending</h2>
          <div className="space-y-3">
            {[
              'Generic LLMs have no understanding of credit bureau data formats, DPD bucket logic, or RBI regulatory requirements.',
              'They cannot reason over structured financial data — bank statement cash flows, EMI schedules, or collateral valuations — without domain-specific fine-tuning.',
              'Hallucination risk in a regulated environment is not acceptable. A generic model may confidently state an incorrect outstanding balance or a wrong settlement amount.',
              'Latency and cost at scale: large general-purpose models are expensive to run per-query. A domain-trained SLM (Small Language Model) delivers comparable accuracy on lending tasks at a fraction of the inference cost.',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-xs font-mono mt-0.5 flex-shrink-0" style={{ color: '#D32F2F' }}>✗</span>
                <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why domain SLM */}
        <div className="p-8 rounded-lg mb-16" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: '#E8EAF0' }}>Why a domain-trained SLM is better</h2>
          <div className="space-y-3">
            {[
              'Trained on BFSI-specific corpora: credit policy documents, RBI circulars, loan agreements, collections scripts, and underwriting guidelines.',
              'Understands domain terminology natively — DPD, NPA, LTV, FOIR, bureau score bands — without needing it explained in the prompt.',
              'Smaller model size means lower latency and lower cost per inference, making it viable for high-volume operations like collections contact centres.',
              'Easier to audit and validate for regulatory compliance than a black-box general-purpose model.',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-xs font-mono mt-0.5 flex-shrink-0" style={{ color: '#D32F2F' }}>✓</span>
                <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Agents */}
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#E8EAF0' }}>The three agents</h2>
        <div className="space-y-8">
          {agents.map(agent => (
            <div
              key={agent.name}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D32F2F'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#0F3460'}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{agent.icon}</span>
                <h3 className="text-xl font-bold" style={{ color: '#E8EAF0' }}>{agent.name}</h3>
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#8892A4' }}>{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
