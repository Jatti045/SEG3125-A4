import React, {useEffect, useRef, useState} from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext.jsx";
import { Star } from "lucide-react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard.jsx";
import HeroBanner from "@/components/ui/HeroBanner.jsx";

export default function Shop() {
  const { items } = useShoppingCart();
  const location = useLocation();

  // — Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // — Filter / sort state
  const [highestPrice, setHighestPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [filterOnSale, setFilterOnSale] = useState(false);
  const [filterBestseller, setFilterBestseller] = useState(false);
  const [sortOrder, setSortOrder] = useState("Featured");

  // — Derive category from query string
  const rawCategory =
    location.search.length > 0 ? location.search.split("=")[1] : "Shop";
  const category = rawCategory
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  // — Items in this category
  const categoryItems =
    location.search.length > 0
      ? items.filter(
          (item) =>
            item.category.toLowerCase().trim() === category.toLowerCase().trim()
        )
      : items;

  // — Compute highestPrice on category change
  useEffect(() => {
    const max = categoryItems.reduce((acc, i) => Math.max(acc, i.price), 0);
    const ceilMax = Math.ceil(max);
    setHighestPrice(ceilMax);

    // Only reset maxPrice if current maxPrice exceeds the new highestPrice
    setMaxPrice((prev) => (prev > ceilMax ? ceilMax : prev));
    setCurrentPage(1);
  }, [categoryItems]);


  // — Whenever filters or sort change, go back to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [maxPrice, selectedRatings, filterOnSale, filterBestseller, sortOrder]);

  // — Filter logic
  const filteredItems = categoryItems.filter((item) => {
    if (item.price > maxPrice) return false;
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.some((r) => item.rating >= r)
    )
      return false;
    if (filterOnSale || filterBestseller) {
      const okOnSale = filterOnSale && item.onSale;
      const okBestseller = filterBestseller && item.isBestseller;
      if (!okOnSale && !okBestseller) return false;
    }
    return true;
  });

  // — Sort logic
  const sortedItems = [...filteredItems];
  if (sortOrder === "Price: Low → High") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "Price: High → Low") {
    sortedItems.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "Rating") {
    sortedItems.sort((a, b) => b.rating - a.rating);
  }

  // — Pagination calculations
  const totalProducts = sortedItems.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage) || 1;

  // ensure currentPage is never out of range
  useEffect(() => {
    if (currentPage > totalPages || currentPage < 1) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const startIdx = (currentPage - 1) * productsPerPage;
  const currentProducts = sortedItems.slice(
    startIdx,
    startIdx + productsPerPage
  );

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const didMount = useRef(null);
  // — auto‐scroll to top on page change
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    const element = document.getElementById("category_title");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  // — rating toggle helper
  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <>
      <HeroBanner
        padding="py-5"
        textColor="text-primary-content"
        bgColor="bg-base-content"
      >
        <div className="px-4">
          <h1 className="text-4xl lg:text-7xl font-black leading-tight uppercase">
            {category.toLowerCase() === "shop" ? "Shop all" : category}
          </h1>
          {category.toLowerCase() !== "shop" && (
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Shop for your favourite {category.toLowerCase()}
            </p>
          )}
        </div>
      </HeroBanner>

      <div className="bg-base-100">
        <div className="grid container mx-auto grid-cols-1 lg:grid-cols-[2fr_5fr] gap-8 p-8">
          {/* Sidebar */}
          <aside className="sticky top-26 lg:mt-20 w-full self-start bg-white border-border rounded-box shadow-sm border p-6 space-y-6">
            <h2 className="font-semibold text-lg">Filters</h2>

            {/* Price */}
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min={0}
                max={highestPrice}
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
                      className="checkbox checkbox-sm checkbox-primary rounded-none"
                    />
                    <div className="flex text-yellow-400">
                      {Array.from({ length: stars }).map((_, i) => (
                        <Star fill="var(--color-warning)" key={i} size={14} />
                      ))}
                    </div>
                    <span className="text-sm">{stars}+</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="flex flex-col gap-2 justify-start items-start">
              <h3 className="font-medium mb-2">Availability</h3>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filterOnSale}
                  onChange={() => setFilterOnSale((v) => !v)}
                  className="checkbox checkbox-sm checkbox-primary rounded-none"
                />
                <span className="text-sm">On Sale</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filterBestseller}
                  onChange={() => setFilterBestseller((v) => !v)}
                  className="checkbox checkbox-sm checkbox-primary rounded-none"
                />
                <span className="text-sm">Bestsellers</span>
              </label>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <h1 id={"category_title"} className="text-3xl font-bold scroll-mt-20">{category}</h1>
                <p className="text-sm text-gray-600">
                  {totalProducts} products found
                </p>
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="select select-bordered select-sm mt-4 md:mt-0"
              >
                <option>Featured</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
                <option>Rating</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2">
              {pages.length > 1 && pages.map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`px-4 py-2 border rounded hover:cursor-pointer ${
                    p === currentPage
                      ? "bg-primary text-primary-content"
                      : "border-gray-300"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
