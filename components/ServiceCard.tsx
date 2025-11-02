import { Service } from '@/lib/api'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-primary-500 animate-scale-in relative overflow-hidden">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300 animate-float">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
          {service.overview}
        </p>
        
        {/* Hover arrow */}
        <div className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          <span className="text-sm">Learn More</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

