# Vitto API — curl Commands

Base URL (local): `http://localhost:5000`
Base URL (production): `https://vitto-api.onrender.com`

---

## 1. Health Check

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{ "status": "ok", "timestamp": "2026-03-28T10:00:00.000Z" }
```

---

## 2. POST /api/auth/send-otp

Send an OTP to an email address:

```bash
curl -X POST http://localhost:5000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email": "cto@nbfc.com"}'
```

Send an OTP to a phone number:

```bash
curl -X POST http://localhost:5000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+919876543210"}'
```

Expected response:
```json
{ "message": "OTP sent successfully" }
```

> The OTP is printed in the backend terminal (mock mode). Copy it for the next step.

---

## 3. POST /api/auth/verify-otp

```bash
curl -X POST http://localhost:5000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email": "cto@nbfc.com", "otp": "482910"}'
```

Expected response:
```json
{ "token": "<jwt_token>" }
```

> Save the token — use it as the Bearer token in the leads endpoint.

---

## 4. POST /api/leads

```bash
curl -X POST http://localhost:5000/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt_token>" \
  -d '{
    "email": "cto@nbfc.com",
    "phone": "+919876543210",
    "institution_name": "Example NBFC Ltd.",
    "institution_type": "NBFC",
    "city": "Mumbai",
    "loan_book_size": "₹100–500 Cr"
  }'
```

Expected response:
```json
{
  "id": 1,
  "email": "cto@nbfc.com",
  "phone": "+919876543210",
  "institution_name": "Example NBFC Ltd.",
  "institution_type": "NBFC",
  "city": "Mumbai",
  "loan_book_size": "₹100–500 Cr",
  "status": "new",
  "created_at": "2026-03-28T10:00:00.000Z"
}
```

---

## 5. GET /api/leads/:id

```bash
curl http://localhost:5000/api/leads/1
```

Expected response:
```json
{
  "id": 1,
  "email": "cto@nbfc.com",
  "phone": "+919876543210",
  "institution_name": "Example NBFC Ltd.",
  "institution_type": "NBFC",
  "city": "Mumbai",
  "loan_book_size": "₹100–500 Cr",
  "status": "new",
  "created_at": "2026-03-28T10:00:00.000Z"
}
```

---

## Error Responses

All endpoints return errors in this format:

```json
{ "message": "Descriptive error message" }
```

Common status codes:
- `400` — Validation error (missing fields, invalid OTP)
- `404` — Lead not found
- `500` — Internal server error
