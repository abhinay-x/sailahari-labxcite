export default function HeroSection({ tagline, description }: { tagline?: string; description?: string }) {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {tagline || 'Welcome to Sailahari'}
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {description || 'Your trusted partner for distribution, logistics, and business partnerships.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="/products"
              className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 text-center hover:shadow-xl hover:scale-105 transform"
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform">Browse Our Catalogue</span>
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 text-center hover:shadow-xl hover:scale-105 transform"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

