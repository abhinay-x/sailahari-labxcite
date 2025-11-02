import Image from 'next/image'
import Link from 'next/link'
import { Product, getImageUrl } from '@/lib/api'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block animate-scale-in"
    >
      <div className="relative h-64 w-full bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
        {getImageUrl(product.image) ? (
          <Image
            src={getImageUrl(product.image)!}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {product.category && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">
              {product.category.name}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{product.description}</p>
        <span className="inline-flex items-center bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-lg font-semibold text-sm group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300 group-hover:translate-x-2">
          View Details
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

