import { useState, useMemo } from 'react'
import HeadMeta from '@/components/HeadMeta'
import PageHeader from '@/components/PageHeader'
import ProductSearch from '@/components/ProductSearch'
import ProductFilters from '@/components/ProductFilters'
import ProductGrid from '@/components/ProductGrid'
import { fetchProducts, Product } from '@/lib/api'
import { GetStaticProps } from 'next'

interface ProductsProps {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory =
        selectedCategory === null || product.category?.slug === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [products, searchTerm, selectedCategory])

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = products
      .map((p) => p.category)
      .filter((c): c is NonNullable<typeof c> => c !== null && c !== undefined)
    
    return cats.filter(
      (category, index, self) => index === self.findIndex((c) => c.slug === category.slug)
    )
  }, [products])

  return (
    <>
      <HeadMeta
        title="Product Catalogue - Sailahari"
        description="Browse our complete product catalogue. Search and filter products by category to find exactly what you need."
      />
      <PageHeader title="Product Catalogue" subtitle="Discover our wide range of products" />
      
      <div className="py-12 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Filters */}
            <div className="lg:col-span-1">
              <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <ProductSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
              <div className="mb-6 flex items-center justify-between animate-fade-in">
                <p className="text-gray-700 font-medium">
                  Showing <span className="text-primary-600 font-bold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()

  return {
    props: {
      products,
    },
    revalidate: 60, // ISR: Revalidate every minute for product updates
  }
}

