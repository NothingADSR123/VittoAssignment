-- Run this in Supabase SQL Editor if the leads table already exists
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new';

-- If creating fresh, use this full schema:
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
