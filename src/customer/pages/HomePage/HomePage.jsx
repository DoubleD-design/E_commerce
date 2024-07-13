import React from "react";
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex-col justify-center">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
};

export default HomePage;
