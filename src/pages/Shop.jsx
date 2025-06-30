import React, { useState } from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext.jsx";
import { Grid, List, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/product/ProductCard.jsx";

export default function Shop() {
  const { items } = useShoppingCart();
  const location = useLocation();

  const categoryName = location.search.split("=")[1];
  const category = categoryName.includes("_")
    ? categoryName
        .replace("_", " ")
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    : categoryName[0].toUpperCase() + categoryName.slice(1);

  const filteredItems = items.filter(
    (item) =>
      item.category.toLowerCase().trim() === category.toLowerCase().trim()
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-base-200">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="font-semibold text-lg">Filters</h2>

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="100"
            className="range range-primary w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>

        {/* Rating */}
        <div>
          <h3 className="font-medium mb-2">Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <label key={stars} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-primary"
                />
                <div className="flex text-yellow-400">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={14} />
                  ))}
                </div>
                <span className="text-sm">{stars} & up</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="font-medium mb-2">Availability</h3>
          <div className="space-y-2">
            {["In Stock", "On Sale"].map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-primary"
                />
                <span className="text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{category}</h1>
            <p className="text-sm text-gray-600">
              {filteredItems.length} product found
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <select className="select select-bordered select-sm">
              <option>Featured</option>
              <option>Price: Low → High</option>
              <option>Price: High → Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`${"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} gap-6`}
        >
          {filteredItems && filteredItems.length > 0
            ? filteredItems.map((item) => <ProductCard item={item} />)
            : null}
        </div>
      </div>
    </div>
  );
}
