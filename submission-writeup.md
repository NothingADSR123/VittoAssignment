# Vitto — Submission Write-Up

**Candidate:** Aditya
**Role:** Full Stack Intern
**Date:** March 2026

---

## What I Built

A complete public-facing product website for Vitto — an AI-native digital credit infrastructure platform for Banks, NBFCs, and MFIs.

**Frontend (React + Vite + Tailwind CSS)**
- 9 pages: Homepage, AI Platform, Lending Lifecycle, Collections Intelligence, Agentic AI, API Infrastructure, About, Contact/Demo, Self Sign-Up
- Homepage with 8 sections matching the design spec: Hero with live dashboard mockup, Problem cards, Solution layout, 6 AI module cards, Business Impact metrics, Social Proof, CTA Banner, Footer
- 3-step sign-up flow with OTP verification, organisation form, and success screen
- Fully responsive, dark theme (#1A1A2E / #D32F2F), hover states on all interactive elements

**Backend (Node.js + Express)**
- 4 REST endpoints: send-otp, verify-otp, create lead, get lead
- PostgreSQL (Supabase) for lead storage with full schema including status field
- MongoDB Atlas for OTP sessions with 10-minute TTL index
- JWT-based session tokens after OTP verification
- Input validation via express-validator, clean controller-service architecture

---

## Key Design Decisions

**Why a dashboard mockup instead of a static image**
The spec asked for a "dashboard preview framed convincingly." Rather than a placeholder image that would look generic, I built a live React component that renders mock metrics — credit decision latency, AUC scores, recovery rates — using the same design tokens as the rest of the site. It communicates the product's value immediately without needing a real screenshot.

**Why Supabase instead of a local PostgreSQL instance**
The task requires a deployed backend. Supabase provides a managed PostgreSQL instance with a connection string that works identically to a local pg pool — no code changes needed between local and production. The `pg` library connects to it directly, keeping the architecture clean.

**Why MongoDB Atlas for OTP sessions**
OTP records are ephemeral by nature. MongoDB's TTL index handles automatic expiry at the database level — no cron job, no cleanup logic needed. The 10-minute window is enforced by the database itself, not application code.

**Content approach**
Every page was written from the perspective of a credit professional explaining to another. No hollow phrases like "unleash the power of AI." The Agentic AI page explains RAG pipelines, SLM vs generic LLM tradeoffs, and hallucination risk in regulated environments — the kind of content a CTO would actually find credible.

---

## Most Challenging Part

The most technically interesting challenge was the OTP flow end-to-end. The identifier (email or phone) needs to be consistent across send-otp and verify-otp, the OTP must be single-use (deleted after verification), and the JWT must encode the identifier for downstream use. Getting the MongoDB TTL index to work correctly with Mongoose required setting `expires: 600` on the `createdAt` field — not on a separate expiry field — which is a subtle distinction in Mongoose's TTL implementation.

On the frontend, the 3-step sign-up flow required careful state management to pass the JWT from step 1 to step 2 without exposing it in the URL or losing it on re-render.

---

## What I Would Do Differently With More Time

**Real OTP delivery.** The current implementation logs the OTP to the backend console. With more time, I would integrate Resend (email) and Twilio (SMS) — both have free tiers and straightforward Node.js SDKs. The service layer is already structured to make this a one-function change.

**Auth middleware on protected routes.** The JWT is generated but not verified on the `/api/leads` endpoint. I would add a middleware that validates the Bearer token before allowing lead creation — closing the gap between the sign-up flow and the API security model.

**Visual lifecycle diagram.** The bonus deliverable — an SVG or React diagram of the AI-driven lending lifecycle from acquisition to closure — would add significant visual depth to the platform page. I would build this as a React Flow diagram with decision nodes for each AI intervention point.

---

## Thought Leadership Article

See `article-retrofit-vs-ainative.md` in the repository root.

---

## Positioning Statement

> "A traditional LOS records what happened. Vitto decides what should happen next."
