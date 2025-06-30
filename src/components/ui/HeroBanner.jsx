const HeroBanner = ({children, padding, textColor, bgColor}) => {
    return (
        <section className={"bg-base-content relative " + padding + " " + textColor}>
            <div className={"absolute inset-0 " + bgColor}></div>
            <div className="hero">
                <div className="hero-content text-center">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;