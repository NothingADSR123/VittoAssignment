import { useState } from 'react'
import axios from 'axios'

const institutionTypes = ['Bank', 'NBFC', 'MFI', 'Fintech', 'Housing Finance Company', 'Other']
const loanBookSizes = ['< ₹100 Cr', '₹100–500 Cr', '₹500 Cr–2,000 Cr', '> ₹2,000 Cr']

export default function ContactPage() {
  const [form, setForm] = useState({
    email: '', phone: '', institution_name: '', institution_type: '',
    city: '', loan_book_size: '', message: '',
  })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      await axios.post('/api/leads', form)
      setStatus('success')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <main className="py-20 px-6 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1A1A2E' }}>
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">✓</div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#E8EAF0' }}>Request received</h2>
          <p className="text-sm" style={{ color: '#8892A4' }}>
            Our team will reach out within one business day to schedule a demo tailored to your institution's use case.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="py-20 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#D32F2F' }}>Request a Demo</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#E8EAF0' }}>Talk to our team</h1>
          <p className="text-base" style={{ color: '#8892A4' }}>
            We run demos against your actual use case — not a generic slide deck. Tell us about your institution.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
          </div>
          <Field label="Institution Name" name="institution_name" value={form.institution_name} onChange={handleChange} required />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SelectField label="Institution Type" name="institution_type" value={form.institution_type} onChange={handleChange} options={institutionTypes} required />
            <Field label="City" name="city" value={form.city} onChange={handleChange} required />
          </div>
          <SelectField label="Loan Book Size (AUM)" name="loan_book_size" value={form.loan_book_size} onChange={handleChange} options={loanBookSizes} />
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>What are you looking to solve?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full text-sm px-4 py-3 rounded outline-none resize-none"
              style={{ backgroundColor: '#16213E', color: '#E8EAF0', border: '1px solid #0F3460' }}
              placeholder="Describe your current challenge or the module you're most interested in..."
            />
          </div>

          {error && <p className="text-sm" style={{ color: '#D32F2F' }}>{error}</p>}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 rounded text-sm font-semibold transition-colors duration-200"
            style={{ backgroundColor: status === 'loading' ? '#B71C1C' : '#D32F2F', color: '#fff' }}
          >
            {status === 'loading' ? 'Submitting...' : 'Request Demo'}
          </button>
        </form>
      </div>
    </main>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full text-sm px-4 py-3 rounded outline-none"
        style={{ backgroundColor: '#16213E', color: '#E8EAF0', border: '1px solid #0F3460' }}
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options, required }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: '#8892A4' }}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full text-sm px-4 py-3 rounded outline-none"
        style={{ backgroundColor: '#16213E', color: value ? '#E8EAF0' : '#8892A4', border: '1px solid #0F3460' }}
      >
        <option value="">Select...</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
