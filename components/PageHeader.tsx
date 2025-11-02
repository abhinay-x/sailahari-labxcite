interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-primary-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

