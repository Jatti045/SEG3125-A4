import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/ui/Navbar.jsx";
import Footer from "@/components/ui/Footer.jsx";
import Home from "@/pages/Home.jsx";
import React, { useEffect } from "react";
import About from "@/pages/About.jsx";
import Shop from "@/pages/Shop.jsx";
import Product from "@/pages/Product.jsx";
import Contact from "@/pages/Contact.jsx";
import Cart from "@/pages/Cart.jsx";
import NotFound from "@/pages/NotFound.jsx";

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
    <div className={"min-h-screen flex flex-col"}>
        <Navbar />
        <ScrollToTop />
      {/* Set mt-18 as that is equal to the displacement of the navbar*/}
        <main className="mt-16 lg:mt-18 flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
