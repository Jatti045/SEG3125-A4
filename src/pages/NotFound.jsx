import {Link} from "react-router-dom";
const NotFound = () => {
    return (
       <div className={"relative min-h-screen bg-base-content text-white"}>
            <div className="absolute w-full top-1/2 -translate-y-1/2 flex flex-col space-y-4 text-center">
                <h1 className={"font-black text-8xl"}>Page <span className={"text-primary"}>Not Found</span></h1>
                <Link className={"btn btn-xl w-fit mx-auto btn-primary"} to={'/shop'}>Continue Shopping</Link>
            </div>
       </div>
    )
}

export default NotFound;