import React from "react";
import Banner from "@/components/home/Banner.jsx";
import FeaturedGames from "@/components/home/FeaturedGames.jsx";
import ExploreCategories from "@/components/home/ExploreCategories.jsx";
import WhyBoardGames from "@/components/home/WhyBoardGames.jsx";

const Home = () => {
  return (
    <>
        <Banner />
        <FeaturedGames />
        <ExploreCategories />
        <WhyBoardGames />
    </>
  );
};

export default Home;
