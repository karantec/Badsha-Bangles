"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const jewelryItems = [
  {
    id: "gold-bangle-1",
    name: "Elegant Gold Bangle",
    price: 25000,
    image: "/categories/1.png",
    category: "bangles",
    description:
      "A beautifully crafted gold bangle with intricate design work, perfect for special occasions.",
  },
  {
    id: "necklace-set-1",
    name: "Royal Necklace Set",
    price: 45000,
    image: "/categories/2.png",
    category: "necklaces",
    description:
      "An elegant necklace set featuring traditional designs with a modern touch.",
  },
  {
    id: "jewelry-set-1",
    name: "Complete Bridal Set",
    price: 35000,
    image: "/categories/3.png",
    category: "sets",
    description:
      "A complete bridal jewelry set including necklace, earrings, and bangles for your special day.",
  },
  {
    id: "green-emerald-1",
    name: "Green Emerald Bangle",
    price: 30000,
    image: "/categories/4.png",
    category: "bangles",
    description:
      "Beautiful emerald-studded bangles that bring a touch of color to any outfit.",
  },
  {
    id: "necklace-2",
    name: "Classic Gold Necklace",
    price: 38000,
    image: "/categories/5.png",
    category: "necklaces",
    description:
      "A timeless classic gold necklace that complements both traditional and modern attire.",
  },
  {
    id: "ornate-necklace-1",
    name: "Ornate Necklace",
    price: 50000,
    image: "/categories/6.png",
    category: "necklaces",
    description:
      "An ornately designed necklace with detailed craftsmanship showcasing traditional artistry.",
  },
  {
    id: "gold-necklace-3",
    name: "Gold Necklace",
    price: 42000,
    image: "/categories/7.png",
    category: "necklaces",
    description:
      "A premium gold necklace with elegant design suitable for weddings and ceremonies.",
  },
  {
    id: "bangles-set-1",
    name: "Bangles Set",
    price: 28000,
    image: "/categories/8.png",
    category: "bangles",
    description:
      "A set of matching bangles that creates a harmonious look when worn together.",
  },
  {
    id: "gold-set-1",
    name: "Gold Jewelry Set",
    price: 65000,
    image: "/categories/9.png",
    category: "sets",
    description:
      "A comprehensive gold jewelry set for those who value matching accessories.",
  },
  {
    id: "red-earrings-1",
    name: "Red Gemstone Earrings",
    price: 15000,
    image: "/categories/10.png",
    category: "earrings",
    description:
      "Beautiful earrings featuring vibrant red gemstones that make a bold statement.",
  },
  {
    id: "gold-earrings-1",
    name: "Gold Earrings",
    price: 18000,
    image: "/categories/12.png",
    category: "earrings",
    description:
      "Delicate gold earrings with intricate designs, perfect for everyday elegance.",
  },
  {
    id: "gold-set-2",
    name: "Elegant Gold Set",
    price: 55000,
    image: "/categories/13.png",
    category: "sets",
    description:
      "An elegant gold set that combines tradition with contemporary design elements.",
  },
  {
    id: "bangles-set-2",
    name: "Designer Bangles Set",
    price: 32000,
    image: "/categories/14.png",
    category: "bangles",
    description:
      "Designer bangles featuring artistic patterns and premium craftsmanship.",
  },
  {
    id: "bangles-set-3",
    name: "Traditional Bangles Set",
    price: 29000,
    image: "/categories/15.png",
    category: "bangles",
    description:
      "A traditional set of bangles that evokes the beauty of cultural heritage.",
  },
];

// Quick View Modal Component
const QuickViewModal = ({ item, onClose }) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    // Lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      // Restore scroll
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="w-full p-6">
              <Image
                src={item.image}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* <div className="md:w-1/2 p-6">
              <div className="mb-6">
                <h3 className="text-gray-700 font-medium mb-2">Description</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function JewelryPage() {
  const [priceRange, setPriceRange] = useState([0, 70000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);

  const itemsPerPage = 12;

  const categories = [
    { id: "necklaces", name: "Necklaces" },
    { id: "bangles", name: "Bangles" },
    { id: "earrings", name: "Earrings" },
    { id: "sets", name: "Jewelry Sets" },
    { id: "rings", name: "Rings" },
  ];

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories(value ? [value] : []);
    setCurrentPage(1); // Reset to first page when changing filters
  };

  const resetFilters = () => {
    setPriceRange([0, 70000]);
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  const openQuickView = (item) => {
    setQuickViewItem(item);
  };

  const closeQuickView = () => {
    setQuickViewItem(null);
  };

  const filteredItems = jewelryItems.filter((item) => {
    if (item.price < priceRange[0] || item.price > priceRange[1]) return false;
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(item.category)
    )
      return false;
    return true;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = sortedItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  return (
    <main className="bg-[#FFF3F3] min-h-screen py-6">
      {quickViewItem && (
        <QuickViewModal item={quickViewItem} onClose={closeQuickView} />
      )}

      <div className="container mx-auto px-4">
        <nav className="text-sm mb-6 py-2">
          <ol className="flex items-center gap-2">
            <li className="flex items-center">
              <Link
                href="/"
                className="hover:text-[#83272A] text-gray-700 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-500">/</span>
              <span className="font-medium text-[#83272A]">
                Jewelry Collection
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-[#83272A] mb-6 text-center md:text-left">
          Exquisite Jewelry Collection
        </h1>

        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full py-2 bg-white border border-gray-200 rounded-md flex justify-between items-center px-4 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-800">
              {showFilters ? "Hide Filters" : "Show Filters"}
            </span>
            <svg
              className={`h-5 w-5 text-gray-600 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div
            className={`md:w-1/4 lg:w-1/5 space-y-4 ${
              showFilters ? "block" : "hidden"
            } md:block`}
          >
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg text-gray-800">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-[#83272A] hover:underline font-medium"
                >
                  Reset All
                </button>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Category</h3>
                <div>
                  <select
                    value={selectedCategories[0] || ""}
                    onChange={handleCategoryChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-[#83272A] focus:border-[#83272A]"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="70000"
                    step="1000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full accent-[#83272A]"
                  />
                  <input
                    type="range"
                    min="0"
                    max="70000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full accent-[#83272A]"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full rounded-md border border-gray-300 py-2 pl-7 pr-2 text-sm"
                      />
                    </div>
                    <span className="text-gray-400">-</span>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full rounded-md border border-gray-300 py-2 pl-7 pr-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-3 text-gray-800">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Have questions about our jewelry collection?
              </p>
              <button className="w-full py-2 bg-[#83272A] text-white rounded-md font-medium hover:bg-[#6d2023] transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap items-center justify-between mb-6 border border-gray-100">
              <div className="text-sm text-gray-600 mb-2 sm:mb-0">
                Showing {sortedItems.length} products
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border border-gray-300 bg-white pl-3 pr-8 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-[#83272A] focus:border-[#83272A]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {paginatedItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group"
                    >
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="w-full h-56 object-cover object-center"
                        />
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full ${
                            favorites.includes(item.id)
                              ? "bg-red-500 text-white"
                              : "bg-white text-gray-600 hover:bg-gray-100"
                          } shadow-sm transition-colors`}
                          title={
                            favorites.includes(item.id)
                              ? "Remove from Favorites"
                              : "Add to Favorites"
                          }
                        >
                          {favorites.includes(item.id) ? (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          )}
                        </button>
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => openQuickView(item)}
                            className="bg-white text-[#83272A] px-4 py-2 rounded-md font-medium hover:bg-[#83272A] hover:text-white transition-colors transform translate-y-2 group-hover:translate-y-0 transition-transform"
                          >
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-gray-800 font-medium text-base mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[#83272A] font-semibold">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <nav
                      className="inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => {
                        const pageNumber = i + 1;
                        // Show first page, last page, current page, and pages right before and after current page
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          Math.abs(pageNumber - currentPage) <= 1
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => setCurrentPage(pageNumber)}
                              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                currentPage === pageNumber
                                  ? "z-10 bg-[#83272A] border-[#83272A] text-white"
                                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          (pageNumber === 2 && currentPage > 3) ||
                          (pageNumber === totalPages - 1 &&
                            currentPage < totalPages - 2)
                        ) {
                          return (
                            <span
                              key={pageNumber}
                              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}

                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No products found
                </h3>
                <p className="mt-1 text-gray-500">
                  Try adjusting your filters or search criteria.
                </p>
                <div className="mt-6">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#83272A] hover:bg-[#6d2023] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#83272A]"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
