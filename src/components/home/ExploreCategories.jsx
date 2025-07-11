import { Link } from "react-router-dom";

const ExploreCategories = function () {
  const categories = [
    // {
    //     name: "Card Games",
    //     number: 5,
    //     link: "/shop/board_games"
    // },
    {
      name: "Board Games",
      number: 10,
      link: "/shop/?category=board_games",
      imageUrl:
        "https://m.media-amazon.com/images/I/71KnAT1F6wL.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      name: "RPG Games",
      number: 4,
      link: "/shop/?category=rpg",
      imageUrl:
        "https://m.media-amazon.com/images/I/71firOkenVL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      name: "Puzzle Games",
      number: 5,
      link: "/shop/?category=puzzle_games",
      imageUrl:
        "https://m.media-amazon.com/images/I/81TJWRltVtL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      name: "Trivia Games",
      number: 3,
      link: "/shop/?category=trivia_games",
      imageUrl:
        "https://m.media-amazon.com/images/I/719Y5b4wHoL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
  ];

  return (
    <section className={"bg-base-300 relative"}>
      <div className={"container mx-auto pt-16 pb-20 px-5"}>
        <div className={"flex text-base-content justify-center items-center"}>
          <div className={"text-center"}>
            <p className={"font-bold text-md uppercase mt-4 tracking-widest"}>
              Explore by type
            </p>
            <h1 className={"font-black mt-2 text-4xl uppercase lg:text-6xl"}>
              Game Categories
            </h1>
          </div>
        </div>
        <div
          className={
            "mt-15 place-self-center grid grid-cols-2 gap-6 lg:min-h-40 lg:grid-cols-4"
          }
        >
          {categories.map((cat, i) => (
            <Link to={cat.link} key={i}>
              <div className="card relative items-end image-full shadow-sm transition-all duration-300 hover:scale-101 hover:shadow-2xl">
                <figure>
                  <img src={cat.imageUrl} className={"!brightness-80"} />
                </figure>
                <div className="absolute inset-0 bg-gradient-to-t rounded-box from-black/60 to-transparent"></div>
                <div className="card-body gap-0">
                  <h2 className={"font-black text-lg drop-shadow-xl"}>
                    {cat.name}
                  </h2>
                  <p className={"font-bold text-md drop-shadow-xl"}>
                    {cat.number} Games
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
