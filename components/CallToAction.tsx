interface CallToActionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function CallToAction({
  title = 'Ready to Get Started?',
  description = 'Contact us today to learn more about our products and services.',
  buttonText = 'Contact Us',
  buttonLink = '/contact',
}: CallToActionProps) {
  const patternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.2,
  }

  return (
    <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={patternStyle}></div>
      </div>
      <div className="container-custom text-center relative z-10">
        <div className="animate-scale-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">{title}</h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {description}
          </p>
          <a
            href={buttonLink}
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

