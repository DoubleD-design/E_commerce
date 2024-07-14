import React, { useState, useEffect, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = (e) => setActiveIndex(e.item);

  useEffect(() => {
    setItemCount(data.length);
  }, [data]);

  const items = data
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  return (
    <div className="border-t border-b border-indigo-300 relative">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative flex items-center p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-50"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid",
              borderRadius: "5px",
              borderColor: "indigo",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ color: "indigo" }} />
          </Button>
        )}
        {activeIndex !==
          items.length - Math.min(responsive[1024].items, items.length) && (
          <Button
            onClick={slideNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid",
              borderRadius: "5px",
              borderColor: "indigo",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ color: "indigo" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;