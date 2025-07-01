import React, {useState} from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext.jsx";
import { Link } from "react-router-dom";
import {ArrowLeft, Truck, CreditCard, Lock, X} from "lucide-react";

export default function Checkout() {
    const { cart } =
        useShoppingCart();

    const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(false);

    const subtotal = cart.reduce(
        (sum, { price, quantity }) => sum + price * quantity,
        0
    );

    const shipping = subtotal >= 50 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const fmt = (v) =>
        v.toLocaleString("en-US", { style: "currency", currency: "CAD" });

    const [isLoading, setIsLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    function generateOrderId() {
        return Math.floor(100000 + Math.random() * 900000); // 6-digit order ID
    }

    function openCheckoutDialog() {
        const modal = document.getElementById("checkout_modal");
        if (modal) {
            modal.showModal();
            setIsLoading(true);
            setOrderId(null);

            setTimeout(() => {
                setIsLoading(false);
                setOrderId(generateOrderId());
            }, 5000);
        }
    }

    function closeCheckoutDialog() {
        const modal = document.getElementById("checkout_modal");
        if (modal) modal.close();
    }


    return (
        <div className={"bg-base-100 mb-20"}>
            <div className="p-8 container mx-auto">
                <Link to="/cart" className={"hover:text-primary flex items-center gap-2"}><ArrowLeft className={"w-4 h-4"} />Back to Cart</Link>
                <h1 className="text-4xl font-black uppercase mb-2">Checkout</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <div className={"space-y-8"}>
                        <div className="card bg-white shadow-sm border-1 border-base-content/12">
                            <div className="card-body">
                                <h2 className="card-title uppercase font-black tracking-tight text-2xl">Contact
                                    Information</h2>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-bold text-sm">Email Address *</legend>
                                    <input type="email" className="input w-full" placeholder="your@email.com"/>
                                    <label className="label font-medium text-sm text-wrap">
                                        <input type="checkbox" className="checkbox checkbox-primary rounded-md" />
                                        Subscribe to our newsletter for exclusive deals and updates
                                    </label>
                                </fieldset>
                            </div>
                        </div>

                        <div className="card bg-white shadow-sm border-1 border-base-content/12">
                            <div className="card-body">
                                <h2 className="card-title uppercase font-black tracking-tight text-2xl"><Truck className={"w-7 h-7"} /> SHIPPING ADDRESS</h2>
                                <fieldset className="fieldset">
                                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                                        <div>
                                            <legend className="fieldset-legend font-bold text-sm">First Name *</legend>
                                            <input type="text" className="input w-full" placeholder="John"/>
                                        </div>
                                        <div>
                                            <legend className="fieldset-legend font-bold text-sm">Last Name *</legend>
                                            <input type="text" className="input w-full" placeholder="Smith"/>
                                        </div>
                                    </div>
                                    <div>
                                        <legend className="fieldset-legend font-bold text-sm">Address *</legend>
                                        <input type="text" className="input w-full" placeholder="123 Main Street"/>
                                        <legend className="fieldset-legend font-bold text-sm">Apartment, suite, etc. (optional)</legend>
                                        <input type="text" className="input w-full" placeholder="Apt 4B"/>
                                    </div>
                                    <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                                        <div>
                                            <legend className="fieldset-legend font-bold text-sm">City *</legend>
                                            <input type="text" className="input w-full" placeholder="Ottawa"/>
                                        </div>
                                        <div>
                                            <legend className="fieldset-legend font-bold text-sm">City *</legend>
                                            <select className="select">
                                                <option disabled selected>Select Province</option>
                                                <option>AB</option>
                                                <option>BC</option>
                                                <option>MB</option>
                                                <option>NB</option>
                                                <option>NL</option>
                                                <option>NS</option>
                                                <option>ON</option>
                                                <option>PE</option>
                                                <option>QC</option>
                                                <option>SK</option>
                                            </select>
                                        </div>
                                        <div>
                                            <legend className="fieldset-legend font-bold text-sm">Postal Code *</legend>
                                            <input type="text" className="input w-full" placeholder="K1K 1K1"/>
                                        </div>
                                    </div>
                                    <div>
                                        <legend className="fieldset-legend font-bold text-sm">Phone Number *</legend>
                                        <input type="tel" className="input tabular-nums w-full" placeholder="(613) 123-4567"/>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="card bg-white shadow-sm border-1 border-base-content/12">
                            <div className="card-body">
                                <h2 className="card-title uppercase font-black tracking-tight text-2xl">Billing Address</h2>
                                <label className="label font-medium text-sm text-wrap mt-4">
                                    <input
                                        type="checkbox"
                                        role={"checkbox"}
                                        className="checkbox checkbox-primary rounded-md"
                                        onChange={(e) => setIsBillingSameAsShipping(e.target.checked)}
                                    />
                                    Same as shipping address
                                </label>
                                {
                                    !isBillingSameAsShipping && (
                                        <fieldset className="fieldset">
                                            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                                                <div>
                                                    <legend className="fieldset-legend font-bold text-sm">First Name *</legend>
                                                    <input type="text" className="input w-full" placeholder="John"/>
                                                </div>
                                                <div>
                                                    <legend className="fieldset-legend font-bold text-sm">Last Name *</legend>
                                                    <input type="text" className="input w-full" placeholder="Smith"/>
                                                </div>
                                            </div>
                                            <div>
                                                <legend className="fieldset-legend font-bold text-sm">Address *</legend>
                                                <input type="text" className="input w-full" placeholder="123 Main Street"/>
                                                <legend className="fieldset-legend font-bold text-sm">Apartment, suite, etc. (optional)</legend>
                                                <input type="text" className="input w-full" placeholder="Apt 4B"/>
                                            </div>
                                            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                                                <div>
                                                    <legend className="fieldset-legend font-bold text-sm">City *</legend>
                                                    <input type="text" className="input w-full" placeholder="Ottawa"/>
                                                </div>
                                                <div>
                                                    <legend className="fieldset-legend font-bold text-sm">City *</legend>
                                                    <select className="select">
                                                        <option disabled selected>Select Province</option>
                                                        <option>AB</option>
                                                        <option>BC</option>
                                                        <option>MB</option>
                                                        <option>NB</option>
                                                        <option>NL</option>
                                                        <option>NS</option>
                                                        <option>ON</option>
                                                        <option>PE</option>
                                                        <option>QC</option>
                                                        <option>SK</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <legend className="fieldset-legend font-bold text-sm">Postal Code *</legend>
                                                    <input type="text" className="input w-full" placeholder="K1K 1K1"/>
                                                </div>
                                            </div>
                                            <div>
                                                <legend className="fieldset-legend font-bold text-sm">Phone Number *</legend>
                                                <input type="tel" className="input tabular-nums w-full" placeholder="(613) 123-4567"/>
                                            </div>
                                        </fieldset>
                                    )
                                }


                            </div>
                        </div>

                        <div className="card bg-white shadow-sm border-1 border-base-content/12">
                            <div className="card-body">
                                <h2 className="card-title uppercase font-black tracking-tight text-2xl"><CreditCard className={"w-7 h-7"} /> Payment information</h2>
                                <fieldset className="fieldset">
                                    <div>
                                        <legend className="fieldset-legend font-bold text-sm">Card Number *</legend>
                                        <input type="credit" className="input w-full" placeholder="1234 5678 9012 3456"/>
                                    </div>
                                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                                        <div>
                                            <legend className="fieldset-legend font-bold text-sm">Expiry Date *</legend>
                                            <input type="text" className="input w-full" placeholder="MM/YY"/>
                                        </div>
                                        <div>
                                            <legend className="fieldset-legend font-bold text-sm">CVV *</legend>
                                            <input type="text" className="input w-full" placeholder="123"/>
                                        </div>
                                    </div>
                                    <div>
                                        <legend className="fieldset-legend font-bold text-sm">Name on Card *</legend>
                                        <input type="text" className="input tabular-nums w-full" placeholder="John Doe"/>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                    </div>

                    <div className={"lg:col-span-1"}>
                        <div className="w-full font-semibold flex flex-col gap-4 rounded-box shadow-sm border-1 border-border p-6 sticky top-26">
                            <h1 className="text-2xl font-black uppercase mb-4">Order Summary</h1>
                            <div className={"space-y-4"}>
                                { cart.map((item, i) => (
                                    <div key={i} className={"flex gap-3"}>
                                        <div className="indicator w-16 h-16 flex-shrink-0">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className="object-cover rounded-box bg-secondary"
                                            />
                                            <div
                                                className="absolute -top-1 -right-1 bg-neutral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-sm text-gray-900 leading-tight">{item.name}</h4>
                                            <p className="text-sm font-black text-gray-900">{fmt(item.price * item.quantity)}</p>
                                        </div>
                                    </div>
                                ))
                                }

                            </div>
                            <div data-orientation="horizontal" role="none"
                                 className="shrink-0 bg-border h-[1px] w-full"></div>
                            <div className={"space-y-3"}>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span className={"font-black"}>{fmt(subtotal)}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span
                                        className={"font-black " + (shipping === 0 ? "text-success" : "")}>{shipping === 0 ? "FREE" : fmt(shipping)}</span>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span>Tax</span>
                                    <span className={"font-black"}>{fmt(tax)}</span>
                                </div>
                                <div data-orientation="horizontal" role="none"
                                     className="shrink-0 bg-border h-[1px] w-full"></div>
                                <div className="flex justify-between pt-3 font-black text-xl">
                                    <span className={"uppercase"}>Total</span>
                                    <span>{fmt(total)}</span>
                                </div>
                            </div>

                            <button
                                className="btn uppercase btn-lg font-black text-lg btn-error btn-block mt-6"
                                onClick={openCheckoutDialog}
                            >
                                Complete Order
                            </button>
                            <dialog id="checkout_modal" className="modal">
                                <div className="modal-box pt-15 pb-20 flex flex-col items-center justify-center">
                                    <h1 className="link no-underline normal-case text-4xl font-black mb-8">
                                        <span className="text-primary">GAME</span>
                                        <span className="text-base-content">VAULT</span>
                                    </h1>
                                    {isLoading ? (
                                        <>
                                            <h3 className="font-bold text-2xl">Placing Your Order</h3>
                                            <span className="loading loading-spinner loading-xl mt-4"></span>
                                        </>
                                    ) : (
                                        <>
                                            <X className="hover:cursor-pointer w-5 h-5 btn-ghost absolute right-4 top-4" onClick={closeCheckoutDialog}/>
                                            <h3 className="font-bold text-2xl text-success">Order Confirmed!</h3>
                                            <p className="mt-4">Thank you for your purchase.</p>
                                            <p className="font-mono text-lg mt-2">Tracking ID: #{orderId}</p>
                                        </>
                                    )}
                                </div>
                                {!isLoading && (
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                )}
                            </dialog>

                            <p className="inline-flex items-center justify-center text-xs text-center text-gray-500"><Lock className={"w-3 h-3 mr-1"}/>Secure 256-bit SSL encryption</p>
                            <p className="text-xs text-center text-gray-500">Your payment information is safe and secure</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
