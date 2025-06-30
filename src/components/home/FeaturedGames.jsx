import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";

const FeaturedGames = function () {
    const featuredGames = [
        {
            name: "Catan: Classic Edition",
            desc: "Trade, build, and settle the island in this award-winning strategy board game.",
            price: "44.99",
            link: "/product/5"
        },
        {
            name: "Pathfinder Beginner Box",
            desc: "Accessible RPG kit with adventures and character-building tools.",
            price: "24.99",
            link: "/product/8"
        },
        {
            name: "Bezzerwizzer Trivia Board Game",
            desc: "Trade categories and answer questions to earn points and win.",
            price: "49.99",
            link: "/product/18"
        },
    ]

    return (
        <section className={"bg-base-content relative z-1"}>
            <div className={"container mx-auto pt-16 pb-20 px-5"}>
                <div className={"flex text-base-100 justify-between items-center"}>
                    <div className={"font-black"}>
                        <p className={"text-md uppercase text-base-300/80 mt-2 tracking-widest"}>Try some of our team's favourites</p>
                        <h1 className={"text-4xl lg:text-6xl"}>FEATURED GAMES</h1>
                    </div>
                    <Link to={"/shop"} className={"btn btn-primary text-xl px-8 py-6 font-black"}>ALL GAMES<ArrowRight className={"ml-1 w-5 h-5"} strokeWidth={2}/></Link>
                </div>
                <div className={"mt-15 place-self-center grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 shadow-sm"}>
                    {featuredGames.map((game, i) => (
                        <div className="card group bg-base-100 shadow-sm transition-colors hover:bg-base-100/95 max-w-100" key={i}>
                            <figure>
                                <img
                                    className={"group-hover:scale-105 transition-transform duration-300"}
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{game.name}</h2>
                                <p>{game.desc}</p>
                                <div className="card-actions justify-between items-center">
                                    <p className={"font-bold text-xl"}>$ {game.price}</p>
                                    <Link to={game.link} className="btn btn-primary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-16 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-fit mx-auto h-16 fill-base-content transform -scale-100">
                    <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </section>
    );
}

export default FeaturedGames;