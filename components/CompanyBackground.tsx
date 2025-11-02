interface CompanyBackgroundProps {
  background: string
}

export default function CompanyBackground({ background }: CompanyBackgroundProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="flex items-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full ml-4"></div>
          </div>
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed bg-white p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
            dangerouslySetInnerHTML={{ __html: background }}
            style={{ animationDelay: '0.2s' }}
          />
        </div>
      </div>
    </section>
  )
}

