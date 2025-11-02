import Link from 'next/link'

export default function InquiryButton() {
  return (
    <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <Link
        href="/contact"
        className="group inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-600 text-white px-10 py-4 rounded-xl font-bold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 text-center text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
      >
        <span className="mr-2">Send Inquiry</span>
        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

