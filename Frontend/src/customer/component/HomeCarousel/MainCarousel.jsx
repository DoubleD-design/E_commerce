import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const MainCarousel = () => {
  const navigate = useNavigate();
  const item = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer rounded-md"
      onClick={() => navigate(item.path)}
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
  );
};

export default MainCarousel;
