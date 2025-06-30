import {Clock, MapPin, Phone, Mail, Package, HelpCircle} from "lucide-react";

const Form = () => {
    return (
        <section className={"bg-base-300"}>
            <div className={"container mx-auto pt-16 pb-20 px-5"}>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-12"}>
                    <fieldset
                        className="fieldset px-10 py-10 bg-base-100 shadow-sm border-base-content/15 text-sm rounded-box border p-4 w-full">
                        <h1 className={"uppercase tracking-tight text-3xl font-black "}>Send us a message</h1>
                        <p className={"text-lg font-normal"}>Fill out the form below and we'll get back to you soon!</p>

                        <div className={"join gap-2 w-full"}>
                            <fieldset className={"fieldset w-1/2"}>
                                <label className="label font-extrabold">Name *</label>
                                <input type="text" className="input" placeholder="Your name"/>
                            </fieldset>
                            <fieldset className={"fieldset w-1/2"}>
                                <label className="label font-extrabold">Email *</label>
                                <input type="email" className="input" placeholder="your@email.com"/>
                            </fieldset>
                        </div>
                        <label className="label font-extrabold">Subject *</label>
                        <input type="text" className="input w-full" placeholder="Bried description of your inquiry"/>

                        <label className="label font-extrabold">Message *</label>
                        <textarea className="textarea textarea-bordered w-full h-76"
                                  placeholder="Tell us more about how we can help..."/>
                        <button className="btn btn-primary btn-lg font-black uppercase">Send message</button>
                    </fieldset>
                    <div className={"flex flex-col gap-4"}>
                        <div className="rounded-[var(--radius-box)] border border-base-content/15 bg-base-100 shadow-sm" >
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="tracking-tight text-2xl font-black flex items-center gap-2">
                                    <MapPin className={"w-6 h-6 text-primary"} />
                                    STORE INFORMATION
                                </h3>
                            </div>
                            <div className="p-6 pt-0 space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className={"w-5 h-5 text-primary mt-1"} />
                                    <div>
                                        <p className="font-bold">GameVault HQ</p>
                                        <p className="">123 Board Game Boulevard<br/>Gaming District, ON K1K 1K1</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 flex-shrink-0">
                                    <Clock className={"w-5 h-5 text-primary mt-1"} />
                                    <div>
                                        <p className="font-bold ">Business Hours</p>
                                        <p className="">Monday - Friday: 9:00 AM - 6:00 PM EST<br/>Saturday:
                                        10:00 AM - 4:00 PM EST<br/>Sunday: Closed</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className={"w-5 h-5 text-primary mt-1"} />
                                    <div>
                                        <p className="font-bold ">Phone Support</p>
                                        <p className="">(613) 123-GAME</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className={"w-5 h-5 text-primary mt-1"} />
                                    <div>
                                        <p className="font-bold ">Email</p>
                                        <p className="">hello@gamevault.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[var(--radius-box)] border border-base-content/15 bg-base-100 shadow-sm" >
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3
                                className="tracking-tight text-2xl font-black ">WHAT WE CAN HELP
                                WITH</h3></div>
                            <div className="p-6 pt-0 space-y-4">
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded">
                                    <Package className={"w-6 h-6 text-primary mt-1"} />
                                    <div><h4 className="font-black  mb-1">ORDER SUPPORT</h4><p
                                        className="text-sm ">Questions about your order, shipping, or
                                        returns</p></div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded">
                                    <HelpCircle className={"w-6 h-6 text-primary mt-1"} />
                                    <div><h4 className="font-black  mb-1">PRODUCT HELP</h4><p
                                        className="text-sm ">Need help choosing the perfect game?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Form;