import React from "react";
import MainCarousel from "../customer/component/HomeCarousel/MainCarousel";
import { mainCarouselData } from "../customer/component/HomeCarousel/MainCarouselData";
import HomeSectionCarousel from "../customer/component/HomeSectionCarousel/HomeSectionCarousel";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";

const HomePage = () => {
  return (
    <div className="">
      <MainCarousel images={mainCarouselData} />

      <div className="space-y-10 py-20">
        <HomeSectionCarousel data={mens_kurta} section={"Men's Kurta"} />
        <HomeSectionCarousel data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeSectionCarousel data={lengha_page1} section={"Lengha Choli"} />
        <HomeSectionCarousel data={sareePage1} section={"Saree"} />
        <HomeSectionCarousel data={dressPage1} section={"Dress"} />
        <HomeSectionCarousel data={gounsPage1} section={"Women's Gouns"} />
        <HomeSectionCarousel data={kurtaPage1} section={"Women's Kurtas"} />
        {/* <HomeSectionCarousel data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>
    </div>
  );
};

export default HomePage;
