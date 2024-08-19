import React from "react";
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
import { mens_catalogy, mens_kurta } from "../../../Data/mens_catalogy";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5">
        <HomeSectionCarousel data={mens_catalogy} sectionName={"Men's T-shirt"} />
        <HomeSectionCarousel data={mens_catalogy} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_catalogy} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_catalogy} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;