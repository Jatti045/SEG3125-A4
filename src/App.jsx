import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/ui/Navbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import Home from "@/pages/Home.jsx";
import React from "react";
import About from "@/pages/About.jsx";

function App() {
  return (
      <div>
          <BrowserRouter>
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
