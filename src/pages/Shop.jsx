import React, {useEffect, useState} from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext.jsx";
import { Star } from "lucide-react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard.jsx";
import HeroBanner from "@/components/ui/HeroBanner.jsx";

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
  const [highestPrice, setHigestPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedRatings, setSelectedRatings] = useState([]);
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

  //Get data on items
  useEffect(() => {
     const newHighestPrice = categoryItems.reduce((max, item) => Math.max(max, item.price), 0);
     setHigestPrice(Math.ceil(newHighestPrice));
     setMaxPrice(newHighestPrice);
  }, [categoryName]);


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
    if (filterOnSale || filterBestseller) {
      const okOnSale = filterOnSale && item.onSale;
      const okBestseller = filterBestseller && item.isBestseller;

      if (!okOnSale && !okBestseller) return false;
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
      <>
        <HeroBanner padding={"py-5"} textColor={"text-primary-content"} bgColor={"bg-base-content"}>
          <div className={"px-4"}>
            <h1 className="text-4xl lg:text-7xl font-black leading-tight uppercase">
              {category.toLowerCase() === "shop"? "Shop all" : category}
            </h1>
            {category.toLowerCase() !== "shop" && (
                <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Shop for your favourite {category.toLowerCase()}
                </p>
            )}
          </div>
        </HeroBanner>
        <div className={"bg-base-100"}>
          <div className="grid container mx-auto grid-cols-1 lg:grid-cols-[2fr_5fr] gap-8 p-8">
            {/* Sidebar Filters */}
            <div>
              <aside className="sticky top-26 lg:mt-20 w-full self-start bg-white rounded-box shadow-sm border-1 border-border p-6 space-y-6">
                <h2 className="font-semibold text-lg">Filters</h2>

                {/* Price Range */}
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
                                <Star fill={"var(--color-warning)"} className={"text-warning"} key={i} size={14} />
                            ))}
                          </div>
                          <span className="text-sm">{stars}+</span>
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
                          checked={filterOnSale}
                          onChange={() => setFilterOnSale((prev) => !prev)}
                          className="checkbox checkbox-sm checkbox-primary rounded-none"
                      />
                      <span className="text-sm">On Sale</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                          type="checkbox"
                          checked={filterBestseller}
                          onChange={() => setFilterBestseller((prev) => !prev)}
                          className="checkbox checkbox-sm checkbox-primary rounded-none"
                      />
                      <span className="text-sm">Bestsellers</span>
                    </label>
                  </div>
                </div>
              </aside>

            </div>

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
              <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedItems.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
