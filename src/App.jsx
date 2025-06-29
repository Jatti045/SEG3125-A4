import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/ui/Navbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import Home from "@/pages/home/Home";
import React from "react";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Navbar />
              {/* Set mt-18 as that is equal to the displacement of the navbar*/}
              <div className={"mt-16 lg:mt-18"} />
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;
