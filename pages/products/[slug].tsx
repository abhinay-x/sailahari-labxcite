import { GetStaticProps, GetStaticPaths } from 'next'
import HeadMeta from '@/components/HeadMeta'
import ProductGallery from '@/components/ProductGallery'
import ProductInfo from '@/components/ProductInfo'
import InquiryButton from '@/components/InquiryButton'
import { fetchProductBySlug, fetchProductSlugs, Product, getImageUrl } from '@/lib/api'
import Link from 'next/link'

interface ProductDetailProps {
  product: Product | null
}

export default function ProductDetail({ product }: ProductDetailProps) {
  if (!product) {
    return (
      <>
        <HeadMeta title="Product Not Found - Sailahari" />
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            href="/products"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <HeadMeta
        title={`${product.name} - Sailahari`}
        description={product.description}
        image={getImageUrl(product.image) || undefined}
        url={`https://sailahari.com/products/${product.slug}`}
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary-600">Products</Link>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div>
              <ProductGallery
                mainImage={product.image || ''}
                images={product.images || []}
              />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo
                name={product.name}
                description={product.description}
                specifications={product.specifications}
              />
              <InquiryButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchProductSlugs()

  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: 'blocking', // Generate pages on-demand if not found
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const product = await fetchProductBySlug(slug)

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
    },
    revalidate: 3600, // ISR: Revalidate every hour
  }
}

