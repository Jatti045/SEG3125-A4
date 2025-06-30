import React from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext.jsx";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function ShoppingCart() {
  const { cart, removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price /* * item.quantity */,
    0
  );
  const savings = cart.reduce(
    (sum, item) =>
      item.onSale && item.comparePrice
        ? sum + (item.comparePrice - item.price) /* * item.quantity */
        : sum,
    0
  );
  const shippingCost = subtotal >= 50.0 ? 0 : 9.99;
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;

  const formatCurrency = (value) =>
    value.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-2">SHOPPING CART</h1>
      <p className="text-sm text-gray-600 mb-6">
        {cart.length} item{cart.length !== 1 && "s"} in your cart
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
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
                    <span className="font-bold text-xl">
                      {formatCurrency(item.price)}
                    </span>
                    {item.onSale && item.comparePrice && (
                      <span className="text-gray-400 line-through ml-2">
                        {formatCurrency(item.comparePrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* <button
                  onClick={() => decreaseCartQuantity(item.id)}
                  className="btn btn-square btn-sm"
                >
                  –
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => increaseCartQuantity(item.id)}
                  className="btn btn-square btn-sm"
                >
                  +
                </button> */}
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
            &larr; CONTINUE SHOPPING
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">ORDER SUMMARY</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <div className="flex justify-between mb-2 text-green-600">
            <span>You Save</span>
            <span>-{formatCurrency(savings)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            {cart && cart.length > 0 ? (
              <span className="font-bold">
                {shippingCost === 0 ? "FREE" : shippingCost}
              </span>
            ) : (
              <span className="font-bold">FREE</span>
            )}
          </div>

          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>{formatCurrency(tax)}</span>
          </div>

          <div className="flex justify-between items-center border-t pt-3 font-bold text-lg">
            <span>TOTAL</span>
            <span>{cart.length > 0 ? formatCurrency(total) : "$0.00"}</span>
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Promo code"
              className="input input-bordered flex-1"
            />
            <button className="btn btn-primary">APPLY</button>
          </div>

          <button
            onClick={() => {
              if (cart && cart.length > 0) {
                alert("Proceeding to checkout");
              } else {
                alert("Add items to your cart to checkout");
              }
            }}
            className="btn btn-error btn-block mt-6"
          >
            PROCEED TO CHECKOUT →
          </button>
        </div>
      </div>
    </div>
  );
}
