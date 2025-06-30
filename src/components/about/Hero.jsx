const Hero = () => {
    return (
        <section className={"bg-primary relative text-white py-24"}>
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className={"px-4"}>
                        <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight">ABOUT GAMEVAULT</h1>
                        <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                            We're not just another game store. We're passionate gamers on a mission to bring epic adventures to every table.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;