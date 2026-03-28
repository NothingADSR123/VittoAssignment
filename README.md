# Vitto – AI-Native Fintech Infrastructure

> Full Stack Intern Assignment — Vitto Technologies

AI-first infrastructure for banks, NBFCs, and MFIs. Covers the full lending lifecycle: acquisition, underwriting, collections, LMS, and CRM.

<img width="1902" height="866" alt="image" src="https://github.com/user-attachments/assets/398dba29-d420-42a2-bc29-54de201185bf" />

---

## About This Assignment

This repository is a submission for the Vitto Full Stack Intern assignment. The task was to build the public-facing product website for Vitto — an AI-native digital credit infrastructure platform — along with a working backend API and sign-up flow.

The assignment covers product thinking, frontend engineering, backend API design, and database architecture. Every page, component, and API endpoint was built from scratch to reflect Vitto's positioning as infrastructure for Banks, NBFCs, and MFIs — not a generic fintech SaaS product.

### What the assignment asked for

| Deliverable | Description |
|---|---|
| Website Sitemap | Structured sitemap with purpose, audience, and conversion goal per page |
| Homepage | Full React homepage with 8 sections matching the design spec |
| AI Platform Page | Deep-dive into all 6 AI modules with technical copy |
| Full Stack Automation Page | 5 operational layers with 29+ submodules, structured with visual hierarchy |
| Thought Leadership Article | 700-word article: "Retrofit AI vs AI-Native Infrastructure in BFSI" |
| Self Sign-Up Flow | 3-step frontend flow + full backend API with OTP, JWT, PostgreSQL, MongoDB |

---

## What This Repo Contains

```
vitto/
├── frontend/                        # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── pages/                   # 9 pages (Homepage, Platform, Collections, etc.)
│   │   ├── components/
│   │   │   ├── home/                # 7 homepage sections as individual components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx                  # React Router setup
│   │   └── main.jsx
│   ├── vercel.json                  # Vercel routing config for React Router
│   └── .env.example
│
├── backend/                         # Node.js + Express
│   ├── src/
│   │   ├── config/
│   │   │   ├── postgres.js          # Supabase PostgreSQL connection
│   │   │   └── mongo.js             # MongoDB Atlas connection
│   │   ├── models/
│   │   │   └── otp.model.js         # Mongoose OTP schema with TTL index
│   │   ├── controllers/             # Request/response handlers
│   │   ├── services/                # Business logic layer
│   │   ├── routes/                  # Express route definitions
│   │   └── server.js                # App entry point
│   ├── migrations/
│   │   └── 001_add_status_to_leads.sql
│   ├── render.yaml                  # Render deployment config
│   └── .env.example
│
├── sitemap.md                       # Full sitemap with audience + conversion goals
├── article-retrofit-vs-ainative.md  # Thought leadership article (Deliverable 5)
├── api-curl-commands.md             # curl commands for all 4 API endpoints
├── submission-writeup.md            # Approach, design decisions, challenges
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, React Router v6 |
| Backend | Node.js, Express, express-validator, JWT |
| Primary DB | PostgreSQL via Supabase (lead storage) |
| Session DB | MongoDB Atlas (OTP sessions with TTL) |
| Deployment | Vercel (frontend) + Render (backend) |

---

## Project Structure

The frontend and backend are separate folders within this monorepo. Run them independently.

---

## Setup

### Prerequisites

- Node.js >= 18
- A Supabase account (free tier) for PostgreSQL
- A MongoDB Atlas account (free tier) for OTP sessions

### Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

### Backend

```bash
cd backend
npm install
cp .env.example .env   # fill in your values
npm run dev        # http://localhost:5000
```

---

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and fill in:

| Variable | Description |
|---|---|
| `PORT` | Backend port (default: 5000) |
| `DATABASE_URL` | Supabase PostgreSQL connection string (URI format) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret for signing JWTs (min 32 chars) |
| `JWT_EXPIRES_IN` | Token expiry (e.g. `7d`) |

For the frontend, `VITE_API_URL` is only needed in production (Vercel). Locally, Vite's proxy handles `/api` requests automatically.

---

## Database Setup

### PostgreSQL (Supabase)

Run this in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id                SERIAL PRIMARY KEY,
  email             VARCHAR(255),
  phone             VARCHAR(20),
  institution_name  VARCHAR(255) NOT NULL,
  institution_type  VARCHAR(100),
  city              VARCHAR(100),
  loan_book_size    VARCHAR(50),
  status            VARCHAR(50) DEFAULT 'new',
  created_at        TIMESTAMPTZ DEFAULT NOW()
);
```

If the table already exists without the `status` column:
```sql
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new';
```

### MongoDB (Atlas)

No manual setup needed. The OTP collection and TTL index are created automatically by Mongoose when the server first starts.

---

## API Endpoints

### Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/send-otp` | Send OTP to email or phone |
| POST | `/api/auth/verify-otp` | Verify OTP, returns JWT |

**POST /api/auth/send-otp**
```json
{ "email": "user@institution.com" }
// or
{ "phone": "+919876543210" }
```

**POST /api/auth/verify-otp**
```json
{ "email": "user@institution.com", "otp": "482910" }
```
Returns: `{ "token": "<jwt>" }`

> OTP is printed to the backend terminal in development (mock mode — no real SMS/email).

### Leads

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/leads` | Create a new lead |
| GET | `/api/leads/:id` | Fetch lead by ID |

**POST /api/leads**
```json
{
  "email": "cto@nbfc.com",
  "phone": "+919876543210",
  "institution_name": "Example NBFC Ltd.",
  "institution_type": "NBFC",
  "city": "Mumbai",
  "loan_book_size": "₹100–500 Cr"
}
```

See `api-curl-commands.md` for full curl examples with expected responses.

---

## Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Homepage | Full 8-section homepage with hero, problem, solution, modules, impact, social proof |
| `/platform` | AI Platform | Deep-dive into all 6 AI modules |
| `/lending-lifecycle` | Full Stack Automation | 5 operational layers with submodules |
| `/collections` | Collections Intelligence | Propensity scoring, contact orchestration |
| `/agentic-ai` | Agentic AI | RAG pipeline, SLM vs LLM, 3 AI agents |
| `/api-infrastructure` | API Infrastructure | Endpoints, SLAs, sandbox, webhooks |
| `/about` | About | Mission, values, team context |
| `/contact` | Request Demo | Lead capture form |
| `/signup` | Self Sign-Up | 3-step OTP-verified onboarding flow |

---

## Deployment

**Live URLs**
- Frontend: `https://vittoassignment.vercel.app/`
- Backend API: `https://vittoassignment.onrender.com/`

---

## Other Files

- `sitemap.md` — full sitemap with strategic purpose, target audience, and conversion goal for each page
- `article-retrofit-vs-ainative.md` — thought leadership article comparing retrofit AI vs AI-native infrastructure in BFSI
- `api-curl-commands.md` — ready-to-run curl commands for testing all 4 API endpoints
- `submission-writeup.md` — 1–2 page write-up covering approach, design decisions, and what I'd do differently
