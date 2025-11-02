import Image from 'next/image'
import { useState } from 'react'
import { getImageUrl } from '@/lib/api'

interface ProductGalleryProps {
  mainImage: string
  images?: string[]
}

export default function ProductGallery({ mainImage, images = [] }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage)

  const allImages = [mainImage, ...images].filter(Boolean)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Main Image */}
      <div className="relative aspect-square w-full bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl overflow-hidden shadow-2xl group">
        {getImageUrl(selectedImage) ? (
          <Image
            src={getImageUrl(selectedImage)!}
            alt="Product"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl flex items-center justify-center animate-float">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-gray-600 font-medium">Product Preview</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {allImages.map((image, index) => {
            const imageUrl = getImageUrl(image)
            return imageUrl ? (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square rounded-xl overflow-hidden border-4 transition-all duration-300 transform hover:scale-105 ${
                  selectedImage === image 
                    ? 'border-primary-600 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-primary-400 shadow-md'
                }`}
              >
                <Image
                  src={imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 12.5vw"
                />
              </button>
            ) : null
          })}
        </div>
      )}
    </div>
  )
}

