import React from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext.jsx";
import {
  Star,
  ShoppingCart,
  Truck,
  Shield,
  RefreshCcw,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard.jsx";

export default function Product() {
  const { items, setCart } = useShoppingCart();
  const location = useLocation();

  const productId = location.pathname.split("/")[2];
  const parsedProductId = parseInt(productId);

  const product = items.find((item) => item.id === parsedProductId);

  const relatedProducts = pickRandom(items, 3);

  function pickRandom(arr, count) {
    const a = arr.slice();

    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a.slice(0, count);
  }

  console.log("Product: ", product);

  function incrementQt() {
    let quantity = document.getElementById("quantity_box").value;
    quantity++
    document.getElementById("quantity_box").value = quantity;
  }

  function decreaseQt() {
    let quantity = document.getElementById("quantity_box").value;
    if (quantity === '1') return;
    quantity--
    document.getElementById("quantity_box").value = quantity;
  }

  return (
    <div className="p-8 space-y-8 bg-base-200">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src={product.imageUrl}
              alt="Product"
              className="w-full rounded-lg shadow"
            />
            {product.isBestSeller ? (
              <div className="absolute top-4 left-4 badge badge-primary">
                Bestseller
              </div>
            ) : null}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-4 text-lg">
            <div className="flex items-center text-warning">
              <Star size={20} fill={"var(--color-warning)"} />
              <span className="ml-1 font-medium">4.8</span>
            </div>
            <span className="text-gray-500">({product.numReviews})</span>
            <span className="text-green-600 font-medium">In Stock</span>
          </div>

          <div className="flex items-baseline space-x-4">
            <span className="text-3xl font-bold">{product.price}</span>
            {product.onSale && (
              <>
                <span className="text-lg line-through text-gray-400">
                  {product.comparePrice}
                </span>
                <span className="badge badge-error">
                  Save ${(product.comparePrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="flex flex-col space-x-4">
            <label className={"text-gray-500"}>Quantity:</label>
            <div className={"join"}>
              <button className={"btn btn-neutral"} onClick={decreaseQt}>-</button>
              <input id={"quantity_box"} type={"number"} min={"1"} step={"1"} className={"w-25 text-center"} defaultValue={1} required />
              <button className={"btn btn-neutral"} onClick={incrementQt}>+</button>
            </div>

          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                setCart((prevCart) => {
                  return [...prevCart, product];
                })
              }
              className="btn btn-primary flex-1 gap-2"
            >
              <ShoppingCart /> Add to Cart
            </button>
          </div>

          {/* Shipping & Policies */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-2">
              <Truck className="text-primary" />
              <div>
                <div className="font-medium">Free Shipping</div>
                <div className="text-sm text-gray-600">On orders over $50</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-primary" />
              <div>
                <div className="font-medium">Secure Payment</div>
                <div className="text-sm text-gray-600">100% secure</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCcw className="text-primary" />
              <div>
                <div className="font-medium">Easy Returns</div>
                <div className="text-sm text-gray-600">30-day policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
