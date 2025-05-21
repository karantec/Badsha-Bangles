// src/components/ProductCard.js
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex flex-col gap-4">
          <Image
            src={product.mainImage}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-md object-contain"
          />
          <div className="flex gap-4">
            {product.gallery.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                width={100}
                height={100}
                className="rounded-md border cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-xl text-rose-700 font-bold mt-2">
            ₹{product.price}
          </p>

          {/* Color */}
          <div className="mt-4">
            <p className="font-medium">Color - {selectedColor}</p>
            <div className="flex gap-2 mt-1">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-4">
            <p className="font-medium mb-1">Size</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-4 flex items-center gap-3">
            <label htmlFor="qty" className="font-medium">
              Quantity
            </label>
            <input
              id="qty"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 px-2 py-1 border rounded"
            />
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <button className="bg-[#5C1E1E] text-white px-6 py-2 rounded-md hover:bg-[#451616] transition">
              Add to Bag
            </button>
            <button className="bg-rose-700 text-white px-6 py-2 rounded-md hover:bg-rose-800 transition">
              Buy Now
            </button>
          </div>

          {/* Free Delivery */}
          <p className="text-sm text-green-600 mt-3">
            ✔ FREE standard shipping
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex gap-6 border-b pb-2">
          <button className="font-semibold text-rose-700">Description</button>
          <button className="text-gray-600 hover:text-black">
            Jewellery Care
          </button>
          <button className="text-gray-600 hover:text-black">
            Customization
          </button>
          <button className="text-gray-600 hover:text-black">
            Shipping & Return
          </button>
        </div>
        <div className="mt-4 text-gray-700 text-sm">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
