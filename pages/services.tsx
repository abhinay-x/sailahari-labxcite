import HeadMeta from '@/components/HeadMeta'
import PageHeader from '@/components/PageHeader'
import ServiceList from '@/components/ServiceList'
import { fetchServices } from '@/lib/api'
import { GetStaticProps } from 'next'
import { Service } from '@/lib/api'

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  return (
    <>
      <HeadMeta
        title="Our Services - Sailahari"
        description="Discover our comprehensive range of services including distribution, logistics, and partnerships."
      />
      <PageHeader title="Our Services" />
      <ServiceList services={services} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const services = await fetchServices()

  return {
    props: {
      services,
    },
    revalidate: 3600, // ISR: Revalidate every hour
  }
}

