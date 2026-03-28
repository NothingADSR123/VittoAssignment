import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#D32F2F' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to move beyond retrofitted AI?
        </h2>
        <p className="text-base mb-10 text-white opacity-80 max-w-2xl mx-auto">
          See how Vitto's unified infrastructure performs on your portfolio data. No generic demos — we run a live assessment against your actual use case.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded text-sm font-semibold transition-colors duration-200 bg-white"
            style={{ color: '#D32F2F' }}
            onMouseEnter={e => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={e => e.target.style.backgroundColor = '#fff'}
          >
            Book a Demo
          </Link>
          <Link
            to="/platform"
            className="px-8 py-3.5 rounded text-sm font-semibold transition-colors duration-200 text-white"
            style={{ border: '2px solid rgba(255,255,255,0.5)' }}
            onMouseEnter={e => e.target.style.borderColor = '#fff'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  )
}
