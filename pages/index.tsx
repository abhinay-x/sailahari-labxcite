import HeadMeta from '@/components/HeadMeta'
import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import CallToAction from '@/components/CallToAction'
import { fetchFeaturedProducts } from '@/lib/api'
import { GetStaticProps } from 'next'
import { Product } from '@/lib/api'

interface HomeProps {
  featuredProducts: Product[]
}

export default function Home({ featuredProducts }: HomeProps) {
  return (
    <>
      <HeadMeta
        title="Sailahari - Your Trusted Partner for Distribution & Logistics"
        description="Welcome to Sailahari. We provide distribution, logistics, and partnerships. Browse our featured products and discover how we can help your business."
      />
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <CallToAction />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredProducts = await fetchFeaturedProducts()

  return {
    props: {
      featuredProducts,
    },
    revalidate: 3600, // ISR: Revalidate every hour
  }
}

