import Head from 'next/head'

interface HeadMetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function HeadMeta({
  title = 'Sailahari - Your Trusted Partner',
  description = 'Welcome to Sailahari. We provide distribution, logistics, and partnerships.',
  image = '/og-image.jpg',
  url = 'https://sailahari.com',
}: HeadMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  )
}

