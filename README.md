# Vitto – AI-Native Fintech Infrastructure

AI-first infrastructure for banks, NBFCs, and MFIs. Covers the full lending lifecycle: acquisition, underwriting, collections, LMS, and CRM.

<img width="1902" height="866" alt="image" src="https://github.com/user-attachments/assets/398dba29-d420-42a2-bc29-54de201185bf" />

---

## Project Structure

```
vitto/
├── frontend/          # React + Vite + Tailwind CSS
├── backend/           # Node.js + Express
├── sitemap.md         # Page-level sitemap with purpose and audience
├── article-retrofit-vs-ainative.md
└── README.md
```

---

## Setup

### Prerequisites

- Node.js >= 18
- PostgreSQL >= 14
- MongoDB >= 6

---

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

Copy `backend/.env.example` to `backend/.env` and set:

| Variable | Description |
|---|---|
| `PORT` | Backend port (default: 5000) |
| `PG_HOST` | PostgreSQL host |
| `PG_PORT` | PostgreSQL port |
| `PG_DATABASE` | Database name |
| `PG_USER` | Database user |
| `PG_PASSWORD` | Database password |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for signing JWTs (min 32 chars) |
| `JWT_EXPIRES_IN` | Token expiry (e.g. `7d`) |

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

---

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

---

## Database

### PostgreSQL – leads table

Created automatically on first server start:

```sql
CREATE TABLE leads (
  id                SERIAL PRIMARY KEY,
  email             VARCHAR(255),
  phone             VARCHAR(20),
  institution_name  VARCHAR(255) NOT NULL,
  institution_type  VARCHAR(100),
  city              VARCHAR(100),
  loan_book_size    VARCHAR(50),
  created_at        TIMESTAMPTZ DEFAULT NOW()
);
```

### MongoDB – OTP collection

Schema with TTL index (auto-expires after 10 minutes):

```js
{ identifier: String, otp: String, createdAt: Date }
// TTL index: expires: 600 (seconds)
```

---

## Deployment

### Frontend → Vercel

1. Connect the `vitto/frontend` directory to a Vercel project
2. Set environment variable: `VITE_API_URL=https://your-backend.onrender.com`
3. Build command: `npm run build` | Output directory: `dist`
4. The `vercel.json` handles client-side routing automatically

### Backend → Render

1. Create a new Web Service on Render
2. Set root directory to `backend/`
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables from `.env.example` in the Render dashboard

**Deployment URLs (update after deploying)**
- Frontend: `https://vitto.vercel.app`
- Backend API: `https://vitto-api.onrender.com`

---

## Pages

| Route | Page |
|---|---|
| `/` | Homepage |
| `/platform` | AI Platform (6 modules) |
| `/lending-lifecycle` | Full Stack Automation |
| `/collections` | Collections Intelligence |
| `/agentic-ai` | Agentic AI + RAG |
| `/api-infrastructure` | API Infrastructure |
| `/about` | About |
| `/contact` | Request Demo |
| `/signup` | Self Sign-Up (3-step) |
