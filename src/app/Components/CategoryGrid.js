// src/app/components/CategoryGrid.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Exquisite bangles",
    price: "Rs. 500",
    image: "/homeimage/1.png", // You'll need to replace with your actual image paths
    slug: "exquisite-bangles",
  },
  {
    id: 2,
    title: "Graceful jewellery set",
    price: "Rs. 500",
    image: "/homeimage/2.png",
    slug: "jewellery-sets",
  },
  {
    id: 3,
    title: "Timeless Neckpiece",
    price: "Rs. 500",
    image: "/homeimage/3.png",
    slug: "neckpieces",
  },
  {
    id: 4,
    title: "Exquisite bangles",
    price: "Rs. 500",
    image: "/homeimage/4.png",
    slug: "exquisite-bangles",
  },
  {
    id: 5,
    title: "Opulent Jhumkis",
    price: "Rs. 500",
    image: "/homeimage/5.png",
    slug: "jhumkis",
  },
  {
    id: 6,
    title: "Refined Rings",
    price: "Rs. 500",
    image: "/homeimage/6.png",
    slug: "rings",
  },
  {
    id: 7,
    title: "Sophisticated Nose-rings",
    price: "Rs. 500",
    image: "/homeimage/7.png",
    slug: "nose-rings",
  },
  {
    id: 8,
    title: "Regal Ere-rings",
    price: "Rs. 500",
    image: "/homeimage/8.png",
    slug: "ere-rings",
  },
];

export default function CategoryGrid() {
  // For demonstration, we'll use placeholder images if real images aren't available
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // In a real app, you might want to check if images exist
    setImagesLoaded(true);
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">Shop by category</h2>
          <Link href="/categories" className="text-sm hover:underline">
            View More
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.id}
              className="block group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-2">
                {imagesLoaded ? (
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    // Fallback to placeholder if image fails to load
                    onError={(e) => {
                      e.target.src = `/api/placeholder/400/400`;
                    }}
                  />
                ) : (
                  // Placeholder while loading
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-400">Loading...</span>
                  </div>
                )}
              </div>
              <h3 className="text-base font-medium">{category.title}</h3>
              <p className="text-sm text-gray-700">{category.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
