import { useState } from 'react'
import api from '../api'

const institutionTypes = ['Bank', 'NBFC', 'MFI', 'Fintech', 'Housing Finance Company', 'Other']
const loanBookSizes = ['< ₹100 Cr', '₹100–500 Cr', '₹500 Cr–2,000 Cr', '> ₹2,000 Cr']
const STEPS = ['Verify Identity', 'Organisation Details', 'Done']

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full text-sm px-4 py-3 rounded outline-none"
        style={{ backgroundColor: '#0F3460', color: '#E8EAF0', border: '1px solid #1A1A2E' }}
      />
    </div>
  )
}

function Btn({ onClick, loading, children }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full py-3 rounded text-sm font-semibold transition-colors duration-200"
      style={{ backgroundColor: loading ? '#B71C1C' : '#D32F2F', color: '#fff' }}
    >
      {loading ? 'Please wait...' : children}
    </button>
  )
}

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [contact, setContact] = useState('')
  const [otp, setOtp] = useState('')
  const [token, setToken] = useState('')
  const [form, setForm] = useState({
    institution_name: '',
    institution_type: '',
    city: '',
    loan_book_size: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  const handleSendOtp = async () => {
    if (!contact) return setError('Enter your email or phone number.')
    setLoading(true)
    setError('')
    try {
      const isEmail = contact.includes('@')
      await api.post('/api/auth/send-otp', isEmail ? { email: contact } : { phone: contact })
      setOtpSent(true)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP. Try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    if (!otp) return setError('Enter the OTP.')
    setLoading(true)
    setError('')
    try {
      const isEmail = contact.includes('@')
      const res = await api.post('/api/auth/verify-otp', {
        ...(isEmail ? { email: contact } : { phone: contact }),
        otp,
      })
      setToken(res.data.token)
      setStep(2)
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid or expired OTP.')
    } finally {
      setLoading(false)
    }
  }

  const handleOrgSubmit = async () => {
    if (!form.institution_name || !form.institution_type || !form.city) {
      return setError('Please fill in all required fields.')
    }
    setLoading(true)
    setError('')
    try {
      const isEmail = contact.includes('@')
      await api.post(
        '/api/leads',
        { ...(isEmail ? { email: contact } : { phone: contact }), ...form },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setStep(3)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen py-20 px-6 flex items-center justify-center" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="w-full max-w-md">

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {STEPS.map((label, i) => {
            const num = i + 1
            const active = step === num
            const done = step > num
            return (
              <div key={label} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: done || active ? '#D32F2F' : '#0F3460', color: '#fff' }}
                  >
                    {done ? '✓' : num}
                  </div>
                  <span className="text-xs hidden sm:block" style={{ color: active ? '#E8EAF0' : '#8892A4' }}>
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-8 h-px mx-1" style={{ backgroundColor: done ? '#D32F2F' : '#0F3460' }} />
                )}
              </div>
            )
          })}
        </div>

        <div className="p-8 rounded-lg" style={{ backgroundColor: '#16213E', border: '1px solid #0F3460' }}>

          {/* Step 1 — OTP */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: '#E8EAF0' }}>Verify your identity</h2>
              <p className="text-sm mb-6" style={{ color: '#8892A4' }}>
                Enter your work email or phone number to receive a one-time code.
              </p>
              <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>Email or Phone</label>
              <input
                type="text"
                value={contact}
                onChange={e => setContact(e.target.value)}
                placeholder="you@institution.com or +91XXXXXXXXXX"
                className="w-full text-sm px-4 py-3 rounded outline-none mb-4"
                style={{ backgroundColor: '#0F3460', color: '#E8EAF0', border: '1px solid #1A1A2E' }}
              />
              {!otpSent ? (
                <Btn onClick={handleSendOtp} loading={loading}>Send OTP</Btn>
              ) : (
                <>
                  <p className="text-xs mb-3" style={{ color: '#8892A4' }}>OTP sent. Check your email or SMS.</p>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    placeholder="6-digit code"
                    maxLength={6}
                    className="w-full text-sm px-4 py-3 rounded outline-none mb-4 tracking-widest"
                    style={{ backgroundColor: '#0F3460', color: '#E8EAF0', border: '1px solid #1A1A2E' }}
                  />
                  <Btn onClick={handleVerifyOtp} loading={loading}>Verify &amp; Continue</Btn>
                  <button
                    onClick={() => { setOtpSent(false); setOtp(''); setError('') }}
                    className="w-full mt-3 text-xs text-center"
                    style={{ color: '#8892A4' }}
                  >
                    Resend OTP
                  </button>
                </>
              )}
            </div>
          )}

          {/* Step 2 — Org form */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: '#E8EAF0' }}>Your organisation</h2>
              <p className="text-sm mb-6" style={{ color: '#8892A4' }}>
                Tell us about your institution so we can tailor your experience.
              </p>
              <div className="space-y-4">
                <Field
                  label="Institution Name *"
                  value={form.institution_name}
                  onChange={e => setForm(f => ({ ...f, institution_name: e.target.value }))}
                />
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>Institution Type *</label>
                  <select
                    value={form.institution_type}
                    onChange={e => setForm(f => ({ ...f, institution_type: e.target.value }))}
                    className="w-full text-sm px-4 py-3 rounded outline-none"
                    style={{ backgroundColor: '#0F3460', color: form.institution_type ? '#E8EAF0' : '#8892A4', border: '1px solid #1A1A2E' }}
                  >
                    <option value="">Select type...</option>
                    {institutionTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <Field
                  label="City *"
                  value={form.city}
                  onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                />
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>Loan Book Size (AUM)</label>
                  <select
                    value={form.loan_book_size}
                    onChange={e => setForm(f => ({ ...f, loan_book_size: e.target.value }))}
                    className="w-full text-sm px-4 py-3 rounded outline-none"
                    style={{ backgroundColor: '#0F3460', color: form.loan_book_size ? '#E8EAF0' : '#8892A4', border: '1px solid #1A1A2E' }}
                  >
                    <option value="">Select range...</option>
                    {loanBookSizes.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <Btn onClick={handleOrgSubmit} loading={loading}>Complete Sign Up</Btn>
              </div>
            </div>
          )}

          {/* Step 3 — Success */}
          {step === 3 && (
            <div className="text-center py-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"
                style={{ backgroundColor: '#D32F2F' }}
              >
                ✓
              </div>
              <h2 className="text-xl font-bold mb-3" style={{ color: '#E8EAF0' }}>You are in</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>
                Your account request has been received. Our team will reach out within one business day
                to complete onboarding and set up your sandbox environment.
              </p>
            </div>
          )}

          {error && (
            <p className="mt-4 text-xs" style={{ color: '#D32F2F' }}>{error}</p>
          )}
        </div>
      </div>
    </main>
  )
}
