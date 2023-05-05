import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Trending from "../components/Trending/Trending";

const HomePage = ({ data }) => {
  return (
    <>
      <HeroBanner data={data} />
      <Trending data={data} />
    </>
  );
};

export default HomePage;
