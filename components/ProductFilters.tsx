interface Category {
  id: number
  name: string
  slug: string
}

interface ProductFiltersProps {
  categories: Category[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  // Extract unique categories from products
  const uniqueCategories = categories.filter(
    (category, index, self) => index === self.findIndex((c) => c.slug === category.slug)
  )

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 sticky top-24 animate-scale-in">
      <div className="flex items-center mb-6">
        <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <h3 className="text-lg font-bold text-gray-900">Filter by Category</h3>
      </div>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === null
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
          }`}
        >
          All Categories
        </button>
        {uniqueCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in ${
              selectedCategory === category.slug
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
            style={{ animationDelay: `${(index + 1) * 0.05}s` }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
}

