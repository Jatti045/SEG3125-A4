import React from "react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
