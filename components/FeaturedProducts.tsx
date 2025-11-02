import Image from 'next/image'
import Link from 'next/link'
import { Product, getImageUrl } from '@/lib/api'

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg">Discover our most popular solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 w-full bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                {getImageUrl(product.image) ? (
                  <Image
                    src={getImageUrl(product.image)!}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center animate-float">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm font-medium">Product Preview</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {product.category && (
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {product.category.name}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
                <span className="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in">
          <Link
            href="/products"
            className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

