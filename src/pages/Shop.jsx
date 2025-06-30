import React, { useState } from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext.jsx";
import { Grid, List, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/product/ProductCard.jsx";

export default function Shop() {
  const { items } = useShoppingCart();
  const location = useLocation();

  // Determine category from query
  const categoryName =
    location.search.length > 0 ? location.search.split("=")[1] : "Shop";
  const category =
    location.search.length > 0
      ? categoryName.includes("_")
        ? categoryName
            .replace(/_/g, " ")
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")
        : categoryName[0].toUpperCase() + categoryName.slice(1)
      : categoryName;

  // Filter state
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [filterInStock, setFilterInStock] = useState(false);
  const [filterOnSale, setFilterOnSale] = useState(false);
  const [filterBestseller, setFilterBestseller] = useState(false);
  const [sortOrder, setSortOrder] = useState("Featured");

  // Toggle rating filter
  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  // Get items matching category
  const categoryItems =
    location.search.length > 0
      ? items.filter(
          (item) =>
            item.category.toLowerCase().trim() === category.toLowerCase().trim()
        )
      : items;

  // Apply filters
  const filteredItems = categoryItems.filter((item) => {
    // Price filter
    if (item.price > maxPrice) return false;

    // Rating filter
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.some((r) => item.rating >= r)
    )
      return false;

    // Availability & Bestseller filters
    if (filterInStock || filterOnSale || filterBestseller) {
      const okInStock = filterInStock && item.inStock > 0;
      const okOnSale = filterOnSale && item.price < item.comparePrice;
      const okBestseller = filterBestseller && item.isBestseller;

      if (!okInStock && !okOnSale && !okBestseller) return false;
    }

    return true;
  });

  // Apply sorting
  const sortedItems = [...filteredItems];
  if (sortOrder === "Price: Low → High") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "Price: High → Low") {
    sortedItems.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "Rating") {
    sortedItems.sort((a, b) => b.rating - a.rating);
  }

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
            min={0}
            max={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="range range-primary w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$0</span>
            <span>${maxPrice}</span>
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
                  checked={selectedRatings.includes(stars)}
                  onChange={() => toggleRating(stars)}
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

        {/* Availability & Bestseller */}
        <div>
          <h3 className="font-medium mb-2">Availability</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filterInStock}
                onChange={() => setFilterInStock((prev) => !prev)}
                className="checkbox checkbox-sm checkbox-primary"
              />
              <span className="text-sm">In Stock</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filterOnSale}
                onChange={() => setFilterOnSale((prev) => !prev)}
                className="checkbox checkbox-sm checkbox-primary"
              />
              <span className="text-sm">On Sale</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filterBestseller}
                onChange={() => setFilterBestseller((prev) => !prev)}
                className="checkbox checkbox-sm checkbox-primary"
              />
              <span className="text-sm">Bestsellers</span>
            </label>
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
              {sortedItems.length} products found
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered select-sm"
            >
              <option>Featured</option>
              <option>Price: Low → High</option>
              <option>Price: High → Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
