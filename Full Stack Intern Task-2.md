# Vitto

## Full Stack Intern Assignment

## Build the AI-First BFSI Website

### A product thinking + engineering exercise for exceptional builders.

```
Role Full Stack Intern
Duration 1 Day
Tech Stack React.js (Frontend) | Node.js + Express (Backend) | PostgreSQL + MongoDB (Database)
Submission GitHub repository link + deployed preview (Vercel/Netlify) + brief write-up PDF
Contact Submit via email to your recruiter at Vitto
```
#### Important Notice

You may use AI tools to assist your thinking, but every deliverable must reflect your own understanding. If asked, you must
be able to explain every design decision, every component, every API endpoint. Copy-paste from AI without comprehension
is immediately disqualifying.

## 01 / Context — What is Vitto?

Vitto is being positioned as AI-native digital credit infrastructure for Banks, NBFCs, and Microfinance Institutions. It is not a
retrofitted SaaS product with an AI tab bolted on — it is infrastructure designed from the ground up around machine
learning, agentic AI, and full-stack lending automation.
The platform covers every stage of the lending lifecycle:
● Customer acquisition and onboarding
● AI-driven underwriting and decisioning
● Automated LOS (Loan Origination System)
● LMS (Loan Management System) with ledger and insurance
● Collections intelligence with propensity scoring
● Fraud detection and KYC verification
● Agentic AI layer for borrowers, field agents, and back office
Your job is to build the public-facing website that communicates this positioning to decision-makers at Banks and NBFCs —
CTOs, CROs, Head of Credit, and Digital Transformation leads. This is not a marketing microsite. It is a technical product
website that must convey depth, credibility, and clarity.

## 02 / Deliverables

You are required to complete all of the following. Each deliverable is evaluated independently.

### Deliverable 1 — Website Structure & Sitemap

Design a structured sitemap for the Vitto website. For each page, document:
● Why this page exists (the strategic reason)
● Who is the primary audience (e.g., CTO, Credit Risk Head, Operations Lead)
● What is the conversion goal (e.g., book demo, read platform docs, sign up)


Required pages:
● Homepage
● AI-First Platform Page
● Lending Lifecycle / Full Stack Automation Page
● Collections Intelligence Page
● Agentic AI Page
● API Infrastructure Page
● About / Why Vitto
● Contact / Request Demo Page
● Self Sign-Up Page

### Deliverable 2 — Homepage (Full React Component)

Build a complete, functional homepage as a React component. The design reference has been provided — match its
structure and visual language while adding your own craft. The homepage must include all of the following sections:
Section A — Hero
● Primary positioning: "AI-First Infrastructure for Modern Financial Services"
● Sub-copy that makes three things clear: this is not retrofitted AI; this is not fragmented vendors; this is
built specifically for Banks / NBFCs / MFIs
● Two CTAs: "Book a Demo" (primary) and "Explore Platform" (secondary)
● A dashboard preview image or animated mockup — use placeholder if needed, but it must be framed
convincingly
Section B — The Problem ("The Reality of Today's Lending Technology")
● Four problems displayed as numbered cards (matching the design reference)
● 1. Fragmented Systems — Siloed LOS, LMS, CRM with no unified data layer
● 2. Non-AI Native Vendors — AI bolted on top of legacy systems
● 3. Reactive Collections — No predictive capability, manual prioritization
● 4. Static Rule Engines — Rules that don't learn or adapt
Section C — The Solution ("AI-native decisioning meets full stack operational automation")
● Two-column layout: left side copy + right side feature list with icons
● Three key differentiators: Domain-trained Models / Unified Architecture / Explainability
Section D — The AI Layer of Vitto (6 Modules)
● Six module cards in a 3×2 grid:
● Data-Based Assessment | ML Model | Rule Engine & Decisioning
● Fraud Intelligence | Collection Intelligence | Agentic AI Layer
● Each card: module name, one-line description, "Explore" link
Section E — Business Impact (Measurable from Day One)
● Faster credit decisions — stat or claim with context
● Reduced portfolio risk — stat or claim
● Increased recovery rates — stat or claim
● Seamless integrations — number of pre-built integrations
Section F — Social Proof
● Partner logos row (use placeholder SVGs or text)


● Two testimonial cards with quote, name, designation, and institution
Section G — CTA Banner
● "Discover the key to grow your business" — red background CTA section
● Two buttons: Book a Demo + Learn More
Section H — Footer
● Logo + tagline + newsletter signup
● Navigation columns: Pages, Partners, Platform
● Social links and copyright

### Deliverable 3 — AI-First Platform Page

Build a dedicated platform page that explains Vitto's six AI modules in depth. For each module, write real, technical copy —
not marketing fluff. Specifically, the Agentic AI section must address:
● How Agentic AI works in a BFSI context (RAG pipeline + SLM trained on credit policy)
● Why generic ChatGPT / public LLMs are insufficient for regulated lending environments
● Why a domain-trained Small Language Model (SLM) matters: explainability, policy compliance,
hallucination control
● Three AI Agents: Borrower Agent (self-service queries), Field Agent (assisted collections), Underwriter
Agent (policy Q&A)

### Deliverable 4 — Full Stack Automation Page

Structure the 29+ operational modules into 5 clean layers. Do not list them as raw text. Group intelligently and present with
visual hierarchy. Each layer should have a clear name, icon, and 3–5 sub-modules listed below it.
Module Description / Requirements
Layer A Customer Acquisition — Lead Management, Partner Onboarding, DIY / Assisted / Partner / Employee journeys
Layer B UnderwritingE-Sign & Disbursement^ &^ LOS^ —^ KYC (Individual^ +^ Entity),^ UCIC^ &^ Dedupe,^ Document^ Fetch^ &^ Analyzer,^ Rule^ Engine,^ Underwriting,^
Layer C Collections — Allotment, PTP Capture, Payment Gateway Integration, Omni-channel automation (WhatsApp, SMS, AI Calls)
Layer D LMS — Ledger Creation, Insurance Auto Deduct, Loan Closure, Debt Tagging
Layer E CRM & Communications — 360 Customer View, Service Management, Internal Hub, Campaigns, Reporting & Analytics

### Deliverable 5 — Thought Leadership Article

Write a 600–900 word article titled: "Retrofit AI vs AI-Native Infrastructure in BFSI"
The article must cover:
● A clear comparison of both approaches (table or prose)
● Long-term cost implications of patching AI onto legacy stacks
● Decisioning depth: why retrofitted AI cannot access the data layer needed for real-time, accurate decisions
● Why future-ready institutions must rearchitect, not patch
Tone: institutional, technically credible, no hollow buzzwords. Write it as if a CTO at a mid-sized NBFC would want to share it
with their board.

### Deliverable 6 — Self Sign-Up Flow (Frontend + Backend)

Build a working sign-up flow for institutions that want to onboard onto Vitto. The flow has three steps:
● Step 1 — Email and phone number entry with OTP verification


● Step 2 — Organisation details form: institution name, type (Bank / NBFC / MFI), city, approximate loan
book size
● Step 3 — Submission confirmation screen: "Our team will reach out within 24 hours"
Backend requirements:
● Node.js + Express API with the following endpoints:
● POST /api/auth/send-otp — accepts email or phone, sends mock OTP
● POST /api/auth/verify-otp — validates OTP, returns session token
● POST /api/leads — saves organisation details to PostgreSQL
● GET /api/leads/:id — retrieves lead record
● PostgreSQL for lead storage (schema: id, email, phone, institution_name, institution_type, city,
loan_book_size, created_at, status)
● MongoDB for OTP session management (TTL index of 10 minutes)
● Input validation and error handling required
● Provide a Postman collection or curl commands for testing all endpoints

## 03 / Technical Stack

You must use the following stack. No substitutions without written justification.
Layer Technology Notes
Frontend React.js _FunctionalCSS Modules_^ _components, for styling._^ _hooks. No_^ _class_^ _components._^ _Tailwind_^ _CSS_^ _or_^
Backend Node.js + Express _RESTfulvalidation._^ _APIs. Async/await._^ _JWT-based_^ _session_^ _handling._^ _Middleware_^ _for_^
Primary Database PostgreSQL _For lead storage. Migrations required. Use pg or Prisma._
Session / Cache
DB MongoDB^ _For_^ _OTP_^ _sessions_^ _with_^ _TTL_^ _index._^ _Use_^ _Mongoose._^
Deployment Vercel(backend)^ (frontend) +^ Render^ /^ Railway^ _Provide live URLs in submission._
Version Control Git + GitHub _Clean commit history. Feature branches preferred._

## 04 / Design & UX Expectations

The design reference image has been shared. Match the visual language but add your own craftsmanship. The following are
non-negotiable:
● Clean, modern AI-first aesthetic — dark navy (#1A1A2E) and red (#D32F2F) as primary palette
● Typography must feel institutional — no playful rounded fonts, no Comic Sans, no system defaults
● No generic fintech stock language — do not write "unleash the power of AI" or "transform your journey"
● Real human tone — write as if an experienced credit professional is explaining to another
● Responsive across desktop and mobile
● Smooth scroll transitions between sections — no jarring jumps
● Hover states on all interactive cards and buttons
● Loading states on all API calls in the sign-up flow

#### Bonus: Visual Diagram (Optional, Advanced)

If you have the design skill, create a visual diagram of the AI-driven lending lifecycle — from lead acquisition through
disbursement to collections and closure. Include decision nodes for AI interventions. This can be done in Figma, drawn in
SVG, or rendered as a React diagram component.
Additionally, write a one-line positioning statement that contrasts Vitto against traditional LOS vendors. Example format:
"[Traditional LOS] is a transaction system. Vitto is a decisioning system."

## 05 / Evaluation Criteria


Your submission will be scored across the following criteria. Reviewers will look at your code, your copy, your design, and
your ability to explain your choices.
Criteria What We Look For Weight
Website Structure & Sitemap Complete, well-reasoned sitemap with target audience and conversion goals per page 15%
Homepage Draft (UI + Copy) Full homepage built in React with all 6 sections, responsive, Vitto design language 20%
AI Platform Page All 6 modules clearly explained; Agentic AI section explains SLM vs generic ChatGPT 20%
Full-Stack Automation Page All 5 operational layers structured intelligently with clear grouping logic 15%
Thought Leadership Article "Retrofit AI vs AI-Native" — comparison, cost implications, decisioning depth 10%
Backend API Design RESTful or GraphQL API design for Sign-up and Lead Capture with Node.js + Postgres 10%
Design Quality & UX Visual design quality, responsiveness, avoidance of generic stock fintech language 10%
Generic Buzzword Penalty Heavy use of hollow buzzwords with no substance — points deducted -10%
What will disqualify your submission:
● Copying homepage copy directly from another fintech product's website
● Using a React template without meaningfully adapting it to Vitto's context
● No database schema or non-functional API endpoints
● Unable to explain your design decisions in a follow-up call
● Excessive use of buzzwords with zero technical substance

## 06 / Submission Format

Submit all of the following by the end of Day 1:

#### GitHub Repository

```
● Monorepo or two repos (frontend + backend)
● Clear README with: setup instructions, environment variables, how to run locally, live URLs
● Clean commit history — we look at commit messages
● No API keys or secrets committed to the repo — use .env files
```
#### Live URLs

```
● Frontend deployed on Vercel or Netlify
● Backend deployed on Render, Railway, or any free-tier platform
● Both must be accessible without authentication
```
#### Write-Up PDF (1–2 pages)

```
● Summary of your approach: what you built, why you made the design decisions you did
● Which part of the task you found most challenging and how you solved it
● One thing you would do differently with more time
● Your thought leadership article (Deliverable 5) can be included here
```
#### Postman Collection or curl commands

```
● All 4 backend API endpoints must be testable
● Include example request bodies and expected responses
```

#### The spirit of this assignment

We are not looking for perfection. We are looking for how you think. A homepage that is 80% complete but demonstrates
genuine product thinking, clean code structure, and real understanding of the BFSI context will score higher than a
pixel-perfect template clone with no depth.
Vitto is building the infrastructure that the next generation of lending in India runs on. The people who build it must be able to
understand both the technology and the domain. This assignment tests both.
Good luck.
Vitto | AI-Native Digital Credit Infrastructure
_This document is confidential and intended only for the recipient._


