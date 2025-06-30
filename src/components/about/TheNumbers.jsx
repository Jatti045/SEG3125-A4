const TheNumbers = () => {
    const stats = [
        {
            value: "10,000+",
            stat_line: "games sold"
        },
        {
            value: "5+",
            stat_line: "publishers"
        },
        {
            value: "20+",
            stat_line: "unique titles"
        },
        {
            value: "5,000+",
            stat_line: "happy gamers"
        }
    ]

    return (
        <section className={"bg-base-content text-white py-24"}>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className={"px-4"}>
                        <h1 className="text-2xl lg:text-5xl font-black mb-1 leading-tight uppercase">By the numbers</h1>
                        <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-75">The GAMEVAULT community keeps growing</p>
                        <div className={"grid grid-cols-2 lg:grid-cols-4 mt-12"}>
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <h1 className={"text-4xl lg:text-6xl font-black text-primary mb-2"}>{stat.value}</h1>
                                    <p className={"uppercase opacity-75 text-sm tracking-widest font-bold"}>{stat.stat_line}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TheNumbers;