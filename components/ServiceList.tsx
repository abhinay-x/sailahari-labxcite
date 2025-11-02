import { Service } from '@/lib/api'
import ServiceCard from './ServiceCard'

interface ServiceListProps {
  services: Service[]
}

export default function ServiceList({ services }: ServiceListProps) {
  if (!services || services.length === 0) {
    return (
      <div className="py-16 md:py-24">
        <div className="container-custom text-center animate-fade-in">
          <p className="text-gray-600 text-lg">No services available at this time.</p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

