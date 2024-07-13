import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="border">
      <div className="relative flex w-full p-5 ">
        <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "Orem",
            transform: "translateX(50%) rotate(90deg) ",
            backgroundColor: "white",
            color: "black",
            zIndex: 1000,
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ color: "indigo" }} />
        </Button>
        <AliceCarousel
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
        />
        <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "Orem",
            transform: "translateX(50%) rotate(90deg) ",
            backgroundColor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-180deg)", color: "indigo" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
