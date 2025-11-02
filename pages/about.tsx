import HeadMeta from '@/components/HeadMeta'
import PageHeader from '@/components/PageHeader'
import CompanyBackground from '@/components/CompanyBackground'
import MissionVision from '@/components/MissionVision'
import { fetchAboutContent } from '@/lib/api'
import { GetStaticProps } from 'next'
import { AboutContent } from '@/lib/api'

interface AboutProps {
  aboutContent: AboutContent | null
}

export default function About({ aboutContent }: AboutProps) {
  // Default content if CMS data is not available
  const background = aboutContent?.background || 'We are a leading company in distribution and logistics, committed to excellence and customer satisfaction.'
  const vision = aboutContent?.vision || 'To be the most trusted partner in distribution and logistics.'
  const mission = aboutContent?.mission || 'To deliver exceptional value through innovative solutions and reliable partnerships.'
  const values = aboutContent?.values || ['Integrity', 'Excellence', 'Innovation', 'Customer Focus']

  return (
    <>
      <HeadMeta
        title="About Us - Sailahari"
        description="Learn about Sailahari's background, vision, mission, and values. Discover how we can help your business succeed."
      />
      <PageHeader title="About Us" />
      <CompanyBackground background={background} />
      <MissionVision vision={vision} mission={mission} values={values} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutContent = await fetchAboutContent()

  return {
    props: {
      aboutContent,
    },
    revalidate: 3600, // ISR: Revalidate every hour
  }
}

