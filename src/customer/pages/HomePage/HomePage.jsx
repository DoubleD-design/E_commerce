import React from "react";
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div className="absolute">
      <MainCarousel />
      <div className="absolute">
        <HomeSectionCarousel />
      </div>
    </div>
  );
};

export default HomePage;
