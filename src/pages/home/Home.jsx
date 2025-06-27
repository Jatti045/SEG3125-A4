import React from "react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import Promo from "../../components/home/Promo";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Promo />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
