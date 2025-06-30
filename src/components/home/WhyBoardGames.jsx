import { Link } from "react-router-dom";
import { Trophy, Clock, Smile } from "lucide-react";

const WhyBoardGames = function () {
  const experiences = [
    {
      title: "BRING PEOPLE TOGETHER",
      description:
        "In a world of screens and digital distractions, board games create genuine human connections. Around our table, strangers become friends, families bond, and memories are made that last a lifetime.",
    },
    {
      title: "SPARK CREATIVITY",
      description:
        "Every game is a puzzle waiting to be solved, a story waiting to be told. Board games challenge your mind, ignite your imagination, and push you to think in ways you never thought possible.",
    },
    {
      title: "CREATE LASTING MEMORIES",
      description:
        "The laughter when someone pulls off an impossible victory. The tension of a close game. The joy of teaching someone new. These moments become the stories you'll tell for years to come.",
    },
  ];

  return (
    <section className={"bg-base-100 relative"}>
      <div className={"container mx-auto pt-16 pb-20 px-5"}>
        <div className={"text-center"}>
          <p
            className={
              "text-md font-bold text-primary uppercase mt-2 tracking-widest"
            }
          >
            The magic of tabletop
          </p>
          <h1 className={"text-4xl font-black uppercase lg:text-6xl mt-2"}>
            Why board games matter
          </h1>
          <p
            className={
              "text-xl font-semibold text-base-content/50 mt-6 max-w-4xl mx-auto"
            }
          >
            In a digital world, board games offer something irreplaceable:
            genuine human connection, creative thinking, and unforgettable
            shared experiences that bring people together around the table.
          </p>
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"}>
          {experiences.map((experience, i) => (
            <div
              className="card  transition-all duration-200 bg-base-100"
              key={i}
            >
              <div className="card-body items-center text-center">
                <h2 className="font-black text-xl">{experience.title}</h2>
                <p
                  className={"font-medium text-base-content/60 mt-2 text-base"}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="card bg-primary text-primary-content w-full mt-16">
          <div className="card-body items-center px-10 py-13">
            <h3 class="text-3xl lg:text-4xl font-black">
              THE GAMEVAULT PROMISE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <Trophy className="w-12 h-12 mb-4 opacity-90" />
                <h4 className="font-black text-xl mb-2">EXPERTLY CURATED</h4>
                <p className="opacity-90 text-center">
                  Every game in our collection is hand-picked by passionate
                  gamers who know what makes a great experience.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 mb-4 opacity-90" />
                <h4 className="font-black text-xl mb-2">
                  LIGHTNING FAST SHIPPING
                </h4>
                <p className="opacity-90 text-center">
                  Get your games quickly so you can start creating memories.
                  Most orders ship within 24 hours.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Smile className="w-12 h-12 mb-4 opacity-90" />
                <h4 className="font-black text-xl mb-2">
                  HAPPINESS GUARANTEED
                </h4>
                <p className="opacity-90 text-center">
                  Not loving your game? We'll make it right. Your satisfaction
                  is our top priority.
                </p>
              </div>
            </div>
            <p className="text-xl opacity-90 mt-6 max-w-3xl mx-auto text-center">
              We believe that the right game can transform any gathering into an
              unforgettable adventure. That's why we're obsessed with finding
              and sharing the games that create those magical moments.
            </p>
            <div className={"flex gap-4 mt-5 uppercase"}>
              <Link
                to={"/about"}
                className={
                  "btn btn-lg text-primary hover:bg-primary hover:text-white hover:btn-outline font-black"
                }
              >
                Our Story
              </Link>
              <Link
                to={"/shop"}
                className={
                  "btn btn-lg btn-outline font-black hover:bg-base-100 hover:text-primary"
                }
              >
                Start exploring
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBoardGames;
