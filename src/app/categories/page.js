'use client';

import React, { useState, useMemo } from 'react';
import { Heart, ChevronDown, Filter } from 'lucide-react';
import jewelryItems from '@/data/jewelryItems'; // Make sure this is your data file
import Link from 'next/link';

const JewelryPage = () => {
  const categories = [
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' },
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortOption, setSortOption] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategories(category ? [category] : []);
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    if (type === 'min') setMinPrice(value);
    else setMaxPrice(value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredItems = useMemo(() => {
    return jewelryItems.filter((item) => {
      const inCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const inPriceRange = item.price >= minPrice && item.price <= maxPrice;
      return inCategory && inPriceRange;
    });
  }, [selectedCategories, minPrice, maxPrice]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (sortOption === 'lowToHigh') return a.price - b.price;
      if (sortOption === 'highToLow') return b.price - a.price;
      return 0;
    });
  }, [filteredItems, sortOption]);

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const paginatedItems = sortedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button
          className="flex items-center bg-[#83272A] text-white px-4 py-2 rounded-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2" /> Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filters */}
        {(showFilters || window.innerWidth >= 768) && (
          <div className="md:w-1/4 md:pr-4 space-y-4 mb-4 md:mb-0">
            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <select
                onChange={handleCategoryChange}
                value={selectedCategories[0] || ''}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">All</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Price Range</label>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                  className="w-1/2 p-2 border rounded-md"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                  className="w-1/2 p-2 border rounded-md"
                  placeholder="Max"
                />
              </div>
              <input
                type="range"
                min={0}
                max={100000}
                value={maxPrice}
                onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Sort by</label>
              <select
                onChange={handleSortChange}
                value={sortOption}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">None</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-4 relative group hover:shadow-lg transition"
            >
              <button
                className="absolute top-2 right-2 text-red-500"
                onClick={() => toggleFavorite(item.id)}
                aria-label="Toggle Favorite"
              >
                <Heart fill={favorites.includes(item.id) ? 'currentColor' : 'none'} />
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-[#83272A] font-bold">₹{item.price.toLocaleString()}</p>
              <Link href={`/product/${item.id}`}>
                <button className="mt-2 w-full bg-[#83272A] text-white py-1 px-4 rounded-md hover:bg-[#a83a3f] transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-4 py-2 rounded-md border ${
                currentPage === idx + 1
                  ? 'bg-[#83272A] text-white'
                  : 'bg-white text-[#83272A]'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default JewelryPage;
