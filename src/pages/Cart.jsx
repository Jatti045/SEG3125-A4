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
    v.toLocaleString("en-US", { style: "currency", currency: "CAD" });

  return (
   <div className={"bg-base-300"}>
      <div className="p-8 container mx-auto min-h-screen">
        <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-sm text-gray-600 mb-6">
          {cart.length} item{cart.length !== 1 && "s"}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
          <div className="flex flex-col space-y-4">
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
                    <Link className={"font-semibold text-lg hover:opacity-70"} to={`/product/${item.id}`}>
                      {item.name}
                    </Link>
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

                <div className="join">
                  <button
                      onClick={() => decreaseCartQuantity(item.id)}
                      className="btn btn-neutral btn-square btn-sm"
                  >
                    –
                  </button>
                  <span className="w-10 text-center flex items-center justify-center border-base-content border-1">{item.quantity}</span>
                  <button
                      onClick={() => increaseCartQuantity(item.id)}
                      className="btn btn-neutral btn-square btn-sm"
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
            <Link to="/shop" className="btn w-fit btn-ghost mt-4">
              &larr; Continue Shopping
            </Link>
            {cart.length === 0 && (
                <div className="flex-1 flex flex-col justify-center pb-20 text-center w-full">
                  Your Shopping Cart is Empty.
                </div>
            )}
          </div>

          <div className="w-full bg-white rounded-lg shadow p-6">
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
            { cart.length > 0 ? (
                <button className="btn btn-error btn-block mt-6">
                  Proceed to Checkout →
                </button>
              ):
                (
                <button className="btn btn-disabled text-base-content/40 hover:!cursor-not-allowed btn-block mt-6">
                  Proceed to Checkout →
                </button>
                )
            }

          </div>
        </div>
      </div>
   </div>
  );
}
