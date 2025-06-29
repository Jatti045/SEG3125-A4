import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowRight} from "lucide-react";

const Banner = function () {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 4;
    const slideInterval = 6000;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => ((prevSlide + 1) % totalSlides));
    }

    const prevSlide = () => {
        let newSlide = currentSlide - 1;
        if (newSlide < 0) newSlide = totalSlides - 1;
        setCurrentSlide(newSlide);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, slideInterval)

        return () => {
            clearInterval(intervalId);
        }
    }, [currentSlide])

    // Array to map through for cleaner rendering
    const slides = [
        {
            id: 0,
            imgSrc: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
            link: "/",
            name: "T1",
            subs: "Experience T1"
        },
        {
            id: 1,
            imgSrc: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
            link: "/",
            name: "T2",
            subs: "Experience T2"
        },
        {
            id: 2,
            imgSrc: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
            link: "/",
            name: "T3",
            subs: "Experience T3"
        },
        {
            id: 3,
            imgSrc: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
            link: "/",
            name: "T4",
            subs: "Experience T4"
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
                            className="w-full h-150"
                            alt={`Slide ${slide.id}`}
                        />
                        <div className={"absolute top-2/5 left-30 -translate-y-1/2 z-3 text-base-100"}>
                            <div className="hero">
                                <div className="hero-content text-start">
                                    <div className="max-w-lg">
                                        <h1 className={"text-8xl lg:text-10xl font-black drop-shadow-lg leading-tight"}>{slide.name}</h1>
                                        <p className={"font-bold text-5xl lg:text-7xl drop-shadow-lg leading-tight"}>{slide.subs}</p>
                                        <Link to={slide.link} className={"btn btn-primary text-2xl lg:text-4xl px-5 py-6 lg:py-8 font-black mt-4"}>LEARN MORE<ArrowRight className={"ml-3 w-5 h-5"} strokeWidth={4}/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 flex -translate-y-1/2 transform justify-between w-full px-15">
                <button onClick={prevSlide} className="btn btn-circle">❮</button>
                <button onClick={nextSlide} className="btn btn-circle">❯</button>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-full h-16 fill-base-content">
                    <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default Banner;