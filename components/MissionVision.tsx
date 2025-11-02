interface MissionVisionProps {
  vision: string
  mission: string
  values?: string[]
}

export default function MissionVision({ vision, mission, values }: MissionVisionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-500 animate-scale-in">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center mr-4 animate-float">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-600">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{vision}</p>
          </div>
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent-500 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-lg flex items-center justify-center mr-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-accent-600">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{mission}</p>
          </div>
        </div>
        
        {values && values.length > 0 && (
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group flex items-start p-4 rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:rotate-12 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold pt-1">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

