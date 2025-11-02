// API configuration and helper functions for CMS integration

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || process.env.CMS_API_URL || 'http://localhost:1337/api'

// Check if CMS is available (only check in development mode)
const isDevelopment = process.env.NODE_ENV === 'development'

// Track if warning has been shown to avoid spam
let cmsWarningShown = false

// Helper to check if error is a connection error
function isConnectionError(error: any): boolean {
  if (!error) return false
  const errorCode = error.code || error.cause?.code || ''
  const errorMessage = error.message || String(error)
  return (
    errorCode === 'ECONNREFUSED' ||
    errorCode === 'ENOTFOUND' ||
    errorCode === 'ETIMEDOUT' ||
    errorMessage.includes('fetch failed') ||
    errorMessage.includes('ECONNREFUSED')
  )
}

// Show CMS warning only once
function showCmsWarning(message: string) {
  if (isDevelopment && !cmsWarningShown) {
    console.warn(message)
    console.info('💡 Tip: This warning will only show once. Placeholder data is being used.')
    cmsWarningShown = true
  }
}

export interface Product {
  id: number
  slug: string
  name: string
  description: string
  specifications?: string
  image?: string
  images?: string[]
  category?: {
    id: number
    name: string
    slug: string
  }
  featured?: boolean
}

export interface Service {
  id: number
  title: string
  overview: string
  slug: string
}

export interface AboutContent {
  background: string
  vision: string
  mission: string
  values: string[]
}

// Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${CMS_API_URL}/products?populate=*`, {
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    
    const data = await response.json()
    return data.data || []
  } catch (error) {
    if (isConnectionError(error)) {
      showCmsWarning('⚠️  CMS not available. Using placeholder data. Connect to your CMS or set CMS_API_URL in .env.local')
      // Return mock data when CMS is not available
      const { mockProducts } = await import('./mockData')
      return mockProducts
    } else {
      console.error('Error fetching products:', error)
    }
    return []
  }
}

// Fetch featured products
export async function fetchFeaturedProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${CMS_API_URL}/products?filters[featured][$eq]=true&populate=*`, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch featured products')
    }
    
    const data = await response.json()
    return data.data || []
  } catch (error) {
    if (isConnectionError(error)) {
      showCmsWarning('⚠️  CMS not available. Using placeholder data. Connect to your CMS or set CMS_API_URL in .env.local')
      // Return featured products from mock data
      const { mockProducts } = await import('./mockData')
      return mockProducts.filter(p => p.featured)
    } else {
      console.error('Error fetching featured products:', error)
    }
    return []
  }
}

// Fetch single product by slug
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await fetch(`${CMS_API_URL}/products?filters[slug][$eq]=${slug}&populate=*`, {
      next: { revalidate: 3600 },
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }
    
    const data = await response.json()
    return data.data && data.data.length > 0 ? data.data[0] : null
  } catch (error) {
    if (isConnectionError(error)) {
      showCmsWarning('⚠️  CMS not available. Using placeholder data.')
    } else {
      console.error('Error fetching product:', error)
    }
    return null
  }
}

// Fetch all product slugs for static generation
export async function fetchProductSlugs(): Promise<string[]> {
  try {
    const response = await fetch(`${CMS_API_URL}/products?fields[0]=slug`, {
      next: { revalidate: 3600 },
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch product slugs')
    }
    
    const data = await response.json()
    return data.data?.map((product: Product) => product.slug) || []
  } catch (error) {
    if (isConnectionError(error)) {
      showCmsWarning('⚠️  CMS not available. Using placeholder data.')
    } else {
      console.error('Error fetching product slugs:', error)
    }
    return []
  }
}

// Fetch all services
export async function fetchServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${CMS_API_URL}/services?populate=*`, {
      next: { revalidate: 3600 },
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch services')
    }
    
    const data = await response.json()
    return data.data || []
  } catch (error) {
    if (isConnectionError(error)) {
      showCmsWarning('⚠️  CMS not available. Using placeholder data.')
      // Return mock data when CMS is not available
      const { mockServices } = await import('./mockData')
      return mockServices
    } else {
      console.error('Error fetching services:', error)
    }
    return []
  }
}

// Fetch about page content
export async function fetchAboutContent(): Promise<AboutContent | null> {
  try {
    const response = await fetch(`${CMS_API_URL}/about?populate=*`, {
      next: { revalidate: 3600 },
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch about content')
    }
    
    const data = await response.json()
    return data.data || null
  } catch (error) {
    if (isConnectionError(error)) {
      showCmsWarning('⚠️  CMS not available. Using placeholder data.')
      // Return mock data when CMS is not available
      const { mockAboutContent } = await import('./mockData')
      return mockAboutContent
    } else {
      console.error('Error fetching about content:', error)
    }
    return null
  }
}

// Get image URL from CMS response
export function getImageUrl(image: any): string | null {
  if (!image) {
    return null
  }
  
  if (typeof image === 'string') {
    // If it's already a full URL, return it
    if (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('data:')) {
      return image
    }
    // If it's a relative path, prepend CMS base URL
    const baseUrl = CMS_API_URL.replace('/api', '')
    return `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`
  }
  
  if (image.data?.attributes?.url) {
    const baseUrl = CMS_API_URL.replace('/api', '')
    return `${baseUrl}${image.data.attributes.url}`
  }
  
  if (image.url) {
    const baseUrl = CMS_API_URL.replace('/api', '')
    return `${baseUrl}${image.url}`
  }
  
  return null
}

