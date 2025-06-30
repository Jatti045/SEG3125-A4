import alexImg from "@/assets/about/alex.png"
import sarahImg from "@/assets/about/sarah.png"
import mikeImg from "@/assets/about/mike.png"

const TheTeam = () => {
    const teamMembers = [
        {
            name: "Alex Chen",
            role: "Founder & Chief Game Officer",
            desc: "20+ years in the gaming industry. Started GameVault to share the joy of tabletop gaming with the world.",
            img: alexImg
        },
        {
            name: "Sarah Martinez",
            role: "Head of Curation",
            desc: "Former game designer with an eye for hidden gems. She discovers the games that become tomorrow's classics.",
            img: sarahImg
        },
        {
            name: "Mike Thompson",
            role: "Community Manager",
            desc: "Tournament organizer and rules expert. He makes sure every game night is legendary.",
            img: mikeImg
        }
    ]

    return (
        <section className={"bg-base-100 relative"}>
            <div className={"container mx-auto pt-16 pb-20 px-5"}>
                <div className={"text-center"}>
                    <p className={"text-md font-bold text-primary uppercase mt-2 tracking-widest"}>Meet the team</p>
                    <h1 className={"text-4xl font-black uppercase lg:text-6xl mt-2"}>The Game Masters</h1>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"}>
                    {teamMembers.map((member, index) => (
                        <div className="card bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    src={member.img}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{member.name}</h2>
                                <p>{member.desc}</p>
                                <div className="badge badge-secondary">{member.role}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default TheTeam;