import React from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext.jsx";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function ShoppingCart() {
  const { cart, removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const subtotal = cart.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );
  const savings = cart.reduce(
    (sum, { price, comparePrice, onSale, quantity }) =>
      onSale && comparePrice ? sum + (comparePrice - price) * quantity : sum,
    0
  );
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const fmt = (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
      <p className="text-sm text-gray-600 mb-6">
        {cart.length} item{cart.length !== 1 && "s"}
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">
                    {item.category}
                  </p>
                  <div className="mt-1">
                    <span className="font-bold text-xl">{fmt(item.price)}</span>
                    {item.onSale && item.comparePrice && (
                      <span className="text-gray-400 line-through ml-2">
                        {fmt(item.comparePrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseCartQuantity(item.id)}
                  className="btn btn-square btn-sm"
                >
                  –
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => increaseCartQuantity(item.id)}
                  className="btn btn-square btn-sm"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-ghost btn-sm text-gray-500"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
          <Link to="/shop" className="btn btn-ghost mt-4">
            &larr; Continue Shopping
          </Link>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{fmt(subtotal)}</span>
          </div>
          <div className="flex justify-between mb-2 text-green-600">
            <span>You Save</span>
            <span>-{fmt(savings)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : fmt(shipping)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax (8%)</span>
            <span>{fmt(tax)}</span>
          </div>
          <div className="flex justify-between border-t pt-3 font-bold text-lg">
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>
          <button className="btn btn-error btn-block mt-6">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}
