import {Link} from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className={"bg-base-100 py-18"}>
            <div className="hero">
                <div className="hero-content text-center flex-col">
                    <div className={"px-4"}>
                        <h1 className="text-2xl lg:text-5xl font-black mb-1 leading-tight uppercase">READY TO JOIN THE ADVENTURE?</h1>
                        <p className="text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed opacity-75">Discover your next favorite game and become part of the GameVault community.</p>
                    </div>
                    <div className={"flex gap-3"}>
                        <Link to={"/shop"} className={"btn btn-xl btn-primary font-black hover:bg-base-100 hover:text-primary uppercase"}>Shop games</Link>
                        <Link to={"/contact"} className={"btn btn-xl btn-outline hover:bg-base-content hover:text-base-100 font-black uppercase"}>get in touch</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;