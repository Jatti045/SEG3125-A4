import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Navbar from "@/components/ui/Navbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import Home from "@/pages/Home.jsx";
import React, {useEffect} from "react";
import About from "@/pages/About.jsx";

function App() {
    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            // Scroll to top whenever the path changes
            window.scrollTo(0, 0);
        }, [pathname]);

        return null; // This component doesn’t render anything
    }


    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                {/* Set mt-18 as that is equal to the displacement of the navbar*/}
                <div className={"mt-16 lg:mt-18"} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
