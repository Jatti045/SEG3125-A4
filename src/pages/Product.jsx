import React, {useMemo, useState} from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext.jsx";
import {
  Star,
  ShoppingCart as CartIcon,
  Truck,
  Shield,
  RefreshCcw,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard.jsx";

export default function Product() {
  const { items, addToCart } = useShoppingCart();
  const { pathname } = useLocation();
  const productId = parseInt(pathname.split("/")[2]);
  const product = items.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  const related = useMemo(() => {
    return items
        .filter((p) => p.id !== productId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
  }, [items, productId]);

  const fmt = (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "CAD" });

  return (
    <div className="bg-base-200">
      <div className="lg:container mx-auto pb-20 lg:px-8 lg:pt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="lg:rounded-box lg:shadow w-[100vw] lg:w-fill max-h-130 xl:max-h-150"
            />
            {product.isBestseller && (
              <div className="absolute top-4 left-4 badge badge-primary">
                Bestseller
              </div>
            )}
          </div>
          <div className="flex-1 space-y-4 px-10 lg:px-0">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <Star size={24} fill="var(--color-warning)" className={"text-warning"} />
              <span className="font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.numReviews})</span>
            </div>
            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-bold">{fmt(product.price)}</span>
              {product.onSale && (
                <>
                  <span className="line-through text-gray-400">
                    {fmt(product.comparePrice)}
                  </span>
                  <span className="badge badge-error">
                    Save {fmt(product.comparePrice - product.price)}
                  </span>
                </>
              )}
            </div>
            <p className="text-gray-700">{product.description}</p>
            <div className="flex flex-col gap-3 h-fit">
              <div className={"join"}>
                <button
                    className="join-item btn btn-neutral btn-md"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  –
                </button>
                <input
                    type="text"
                    value={quantity}
                    className="join-item w-20 text-center bg-base-100 border"
                />
                <button
                    className="join-item btn btn-neutral btn-md"
                    onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn h-10 btn-primary gap-2"
                onClick={() => addToCart(product, quantity)}
              >
                <CartIcon /> Add to Cart
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-2">
                <Truck />
                <div>
                  <div className="font-medium">Free Shipping</div>
                  <div className="text-sm text-gray-600">
                    On orders over $50
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield />
                <div>
                  <div className="font-medium">Secure Payment</div>
                  <div className="text-sm text-gray-600">100% secure</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCcw />
                <div>
                  <div className="font-medium">Easy Returns</div>
                  <div className="text-sm text-gray-600">30-day policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-12 px-10 lg:px-0">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
