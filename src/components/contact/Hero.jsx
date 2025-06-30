const Hero = () => {
    return (
        <section className={"bg-base-content relative text-white py-24"}>
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className={"px-4"}>
                        <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight uppercase">Get in <span className={"text-primary"}>touch</span></h1>
                        <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                            Questions? Need game recommendations? Want to join our team? We'd love to hear from you!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;