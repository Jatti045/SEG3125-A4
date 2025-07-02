import React from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext.jsx";
import { Link } from "react-router-dom";
import {ArrowLeft, ArrowRight, X} from "lucide-react";

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
   <div className={"bg-base-100"}>
      <div className="p-8 container mx-auto">
        <h1 className="text-4xl uppercase font-black mb-2">Shopping Cart</h1>
        <p className="text-sm text-gray-600 mb-6">
          {cart.length} item{cart.length !== 1 && "s"}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
          <div className="flex flex-col space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm relative border-1 border-border rounded-box p-4 flex items-center justify-between"
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

                <button
                    onClick={() => removeFromCart(item.id)}
                    className="hover:cursor-pointer text-gray-500 absolute top-5 right-5"
                >
                  <X size={18} />
                </button>
                <div className="join absolute right-5 bottom-5">
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
                </div>
              </div>
            ))}
            {cart.length === 0 && (
                <div className="flex-1 flex flex-col justify-center pb-20 text-center w-full">
                  Your Shopping Cart is Empty.
                </div>
            )}
          </div>

          <div className={"lg:col-span-1"}>
            <div className="w-full font-semibold flex flex-col gap-3 bg-white rounded-box shadow-sm border-1 border-border p-6 sticky top-26">
              <h2 className="text-2xl font-black uppercase mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className={"font-black"}>{fmt(subtotal)}</span>
              </div>
              { savings > 0 && (
                  <div className="flex justify-between mb-2 text-success">
                    <span>You Save</span>
                    <span className={"font-black"}>-{fmt(savings)}</span>
                  </div>
              )}

              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span className={"font-black"}>{shipping === 0 ? "FREE" : fmt(cart.length > 0 ? shipping : 0)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Tax (8%)</span>
                <span className={"font-black"}>{fmt(tax)}</span>
              </div>
              <div className="flex justify-between border-t pt-3 font-black text-xl">
                <span className={"uppercase"}>Total</span>
                <span>{fmt(total)}</span>
              </div>
              { cart.length > 0 ? (
                      <Link className="btn uppercase btn-lg font-black text-lg btn-error btn-block mt-6" to={"/checkout"}>
                        Proceed to Checkout <ArrowRight className="w-5 h-5" />
                      </Link>
                  ):
                  (
                      <button className="btn btn-disabled btn-lg text-base-content/40 hover:!cursor-not-allowed btn-block mt-6">
                        Proceed to Checkout <ArrowRight className="w-5 h-5" />
                      </button>
                  )
              }
              <p className={"text-xs text-gray-500 text-center mt-4"}>Secure checkout powered by SSL encryption</p>

            </div>
          </div>
        </div>
        <Link to="/shop" className="btn btn-outline w-fit font-black uppercase btn-ghost mt-10">
          <ArrowLeft className={"w-4 h-4"} /> Continue Shopping
        </Link>
      </div>
   </div>
  );
}
