import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowRight} from "lucide-react";
import dndImg from "@/assets/home/dnd.jpg"
import catanImg from "@/assets/home/catan.jpg"
import starfdrImg from "@/assets/home/starfinder.jpg"

const Banner = function () {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 3;
    const slideInterval = 6000;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => ((prevSlide + 1) % totalSlides));
    }

    const prevSlide = () => {
        let newSlide = currentSlide - 1;
        if (newSlide < 0) newSlide = totalSlides - 1;
        setCurrentSlide(newSlide);
    }

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         nextSlide();
    //     }, slideInterval)
    //
    //     return () => {
    //         clearInterval(intervalId);
    //     }
    // }, [currentSlide])

    // Array to map through for cleaner rendering
    const slides = [
        {
            id: 0,
            imgSrc: dndImg,
            link: "https://dungeonsanddragonsfan.com/dnd-dragon-anthology-adventures/",
            name: "D&D Dragon Delves",
            subs: "New Official Anthology for Dungeons and Dragons"
        },
        {
            id: 1,
            imgSrc: catanImg,
            link: "https://www.catan.com/catan-fans/news/catans-6th-edition-will-be-released-2025",
            name: "CATAN's 6th Edition",
            subs: "Coming Soon"
        },
        {
            id: 2,
            imgSrc: starfdrImg,
            link: "/product/22",
            name: "STARFINDER",
            subs: "Second Edition Playtest"
        }
    ];

    const transformValue = `translateX(-${(currentSlide) * 100}%)`;

    return (
        <div className="relative w-full overflow-hidden"> {/* Add relative and overflow-hidden */}
            <div
                className="flex transition-transform duration-500 ease-in" // Flex container for slides
                style={{transform: transformValue}}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full flex-shrink-0 relative" // Make each slide take full width and prevent shrinking
                    >
                        <img
                            src={slide.imgSrc}
                            className="w-full h-150 object-center object-cover"
                            alt={`Slide ${slide.id}`}
                        />
                        <div className={"absolute top-2/5 left-30 -translate-y-1/2 z-3 text-base-100"}>
                            <div className="hero">
                                <div className="hero-content text-start">
                                    <div className="max-w-lg">
                                        <h1 className={"text-6xl md:text-3xl lg:text-5xl font-black drop-shadow-lg leading-tight"}>{slide.name}</h1>
                                        <p className={"font-bold text-xl md:text-2xl lg:text-4xl drop-shadow-lg leading-tight"}>{slide.subs}</p>
                                        <Link
                                            to={slide.link}
                                            target={"_blank"}
                                            rel="noopener noreferrer"
                                            className={"btn btn-primary text-2xl lg:text-4xl px-5 py-6 lg:py-8 font-black mt-4 z-1"}
                                        >
                                            LEARN MORE<ArrowRight className={"ml-3 w-5 h-5"} strokeWidth={4}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 flex !pointer-events-none -translate-y-1/2 transform justify-between w-full px-15">
                <button onClick={prevSlide} className="btn btn-circle !pointer-events-auto">❮</button>
                <button onClick={nextSlide} className="btn btn-circle !pointer-events-auto">❯</button>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-fit mx-auto h-16 fill-base-content">
                    <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default Banner;