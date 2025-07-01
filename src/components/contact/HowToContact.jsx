import {MessageSquare, Mail, Phone} from "lucide-react";

const TheTeam = () => {
    const contactMethods = [
        {
            line1: "email us",
            line2: "Get in touch via email",
            line3: "hello@gamervault.com",
            line4: "We respond within 24 hours",
            icon: Mail
        },
        {
            line1: "email us",
            line2: "Speak with our team",
            line3: "(613) 123-GAME",
            line4: "Mon-Fri, 9AM-6PM EST",
            icon: Phone
        },
        {
            line1: "live chat",
            line2: "Chat with support",
            line3: "Available on our website",
            line4: "Mon-Fri, 9AM-6PM EST",
            icon: MessageSquare
        }
    ]

    return (
        <section className={"bg-base-100 relative"}>
            <div className={"container mx-auto pt-16 pb-20 px-5"}>
                <div className={"text-center"}>
                    <p className={"text-md font-bold text-primary uppercase mt-2 tracking-widest"}>Reach out</p>
                    <h1 className={"text-4xl font-black uppercase lg:text-6xl mt-2"}>How to contact us</h1>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"}>
                    {contactMethods.map((contact, index) => (
                        <div className="card bg-base-100 border-1 border-border shadow-md transition-all duration-200 hover:shadow-xl items-center pt-7 pb-2" key={index}>
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 bg-primary/15 rounded-full">
                                <contact.icon className={"text-primary w-8 h-8"}/>
                            </div>
                            <div className="card-body text-center">
                                <h2 className="uppercase text-xl font-black">{contact.line1}</h2>
                                <p className={"opacity-70"}>{contact.line2}</p>
                                <p className="font-bold text-lg">{contact.line3}</p>
                                <p className="text-sm font-medium opacity-50">{contact.line4}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default TheTeam;