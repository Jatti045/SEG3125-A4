import image from "@/assets/about/about_fun.png"

const OurStory = () => {
    return (
        <section className={"bg-base-100"}>
            <div className={"container mx-auto pt-16 pb-20 px-5"}>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"}>
                    <div className={"text-start max-w-2xl"}>
                        <p className={"font-bold text-md uppercase mt-4 text-primary tracking-widest"}>Our story</p>
                        <h1 className={"font-black mt-2 text-4xl uppercase lg:text-6xl"}>BORN FROM A LOVE OF GAMES</h1>
                        <div className={"space-y-4 text-gray-600 leading-relaxed mt-7"}>
                            <p>GameVault started in a small apartment where friends gathered every Friday night for epic board game battles. What began as a simple game night evolved into something bigger, a realization that the right game can transform strangers into friends and turn any evening into an adventure.</p>
                            <p>Founded in 2020 by a group of passionate gamers, we set out to share our passion for gaming with the rest of the world. We don't just sell games, we handpick each title based on one simple question: "Would this create an unforgettable gaming experience?"</p>
                            <p>Today, GameVault has grown into a community of thousands of gamers who share our passion for exceptional tabletop experiences. Every game in our collection has been played, tested, and approved by our team of gaming experts.</p>
                        </div>
                    </div>
                    <div className={"relative"}>
                        <img src={image} className={"h-full w-full rounded-[var(--radius-box)] "}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory;