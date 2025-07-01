import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/ui/Navbar.jsx";
import Footer from "@/components/ui/Footer.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Shop from "@/pages/Shop.jsx";
import Product from "@/pages/Product.jsx";
import Contact from "@/pages/Contact.jsx";
import Cart from "@/pages/Cart.jsx";
import Checkout from "@/pages/Checkout.jsx";
import NotFound from "@/pages/NotFound.jsx";
import React, { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  const noFooterPaths = ["/cart", "/checkout"];

  const showFooter = !noFooterPaths.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="mt-16 lg:mt-18 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
