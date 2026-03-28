# Retrofit AI vs AI-Native Infrastructure in BFSI

The financial services industry has spent the last three years adding AI to systems that were never designed for it. The results are predictable: marginal improvements in specific workflows, significant integration overhead, and a growing gap between what AI can do and what institutions are actually getting from it.

This is the retrofit problem. And it is more expensive than most technology leaders realise.

## What Retrofit Actually Means

Retrofit AI is not a pejorative. It describes a real architectural pattern: take an existing system — a loan origination platform, a collections workflow tool, a core banking system — and attach an ML model to one of its decision points. The model scores an application. The existing system acts on the score.

The problem is not the model. The problem is everything around it.

A retrofitted system has a data layer that was designed for rule-based logic, not for the feature engineering that ML models require. It has a workflow engine that processes applications sequentially, not in the parallel, event-driven manner that real-time inference demands. It has an audit trail built for human reviewers, not for the kind of model explainability that regulators now expect.

When you bolt an ML model onto this architecture, you get a system that is slower than it should be, harder to maintain than it needs to be, and less accurate than the model is capable of being.

## The Cost Implications

The direct costs of retrofit AI are visible: integration fees, data pipeline engineering, model hosting infrastructure. The indirect costs are harder to quantify but significantly larger.

Consider data latency. A retrofitted credit scoring system typically pulls bureau data, runs it through a transformation layer, and passes it to the model. Each step adds latency. The result is a system that takes 30 to 90 seconds to return a credit decision — not because the model is slow, but because the data infrastructure around it was not built for speed. The model itself might run in 200 milliseconds.

Consider model drift. A model trained on historical data degrades as the portfolio evolves. In an AI-native system, retraining is a first-class operation — the infrastructure is built to support it. In a retrofitted system, retraining requires re-engineering the data pipeline, re-validating the integration, and re-testing the workflow. The operational cost of keeping the model current is high enough that many institutions simply do not do it on the cadence the model requires.

Consider explainability. RBI and other regulators increasingly require that credit decisions be explainable to borrowers and auditable by examiners. A retrofitted model can produce SHAP values, but surfacing those values in a human-readable format, attaching them to the loan record, and making them accessible to the credit officer reviewing an exception case — all of that requires custom engineering that the original system was not designed to support.

## Decisioning Limitations

The most significant limitation of retrofit AI is not technical — it is architectural. A retrofitted system makes decisions at specific, predefined points in a workflow. The model scores an application at intake. It does not continuously update that score as new information arrives. It does not share its output with the collections module. It does not inform the LMS about which borrowers are at elevated risk of prepayment or default.

In a lending operation, information flows continuously. A borrower's bank account balance changes. Their employer changes. They miss a utility payment. Each of these signals is relevant to their credit risk, but a retrofitted system has no mechanism to incorporate them after the initial decision is made.

An AI-native architecture treats the model as a continuous service, not a batch process. The credit score is not a number computed at application time and stored in a field. It is a live output that updates as the underlying data changes, and that is accessible to every module in the system — underwriting, servicing, collections, and CRM — through a shared inference layer.

## Why AI-Native Is the Correct Architecture for BFSI

The argument for AI-native infrastructure is not that it produces better models. The models themselves — gradient-boosted trees, neural networks, transformer-based language models — are largely the same regardless of the infrastructure they run on.

The argument is that AI-native infrastructure allows those models to operate at their actual capability. It removes the latency imposed by legacy data pipelines. It enables continuous retraining without re-engineering. It makes explainability a structural property of the system rather than an afterthought. And it allows model outputs to flow across the full lending lifecycle, rather than being siloed within a single workflow step.

For banks, NBFCs, and MFIs operating in a competitive and increasingly regulated environment, the question is not whether to use AI. That decision has already been made. The question is whether to continue paying the compounding cost of retrofit, or to build on infrastructure that was designed for the way AI actually works.

The institutions that answer that question correctly in the next two years will have a structural advantage in credit quality, operational efficiency, and regulatory compliance that will be very difficult for their competitors to close.

---

*Vitto is an AI-native infrastructure platform for lending institutions. This article reflects the views of the Vitto research team.*
