interface ProductInfoProps {
  name: string
  description: string
  specifications?: string
}

export default function ProductInfo({ name, description, specifications }: ProductInfoProps) {
  return (
    <div className="space-y-8 animate-slide-up">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          {name}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-primary-600">Description</h2>
        </div>
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {specifications && (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-accent-600">Specifications</h2>
          </div>
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: specifications }}
          />
        </div>
      )}
    </div>
  )
}

