import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/ui/Navbar.jsx";
import React from "react";
import Footer from "./components/ui/Footer.jsx";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;
