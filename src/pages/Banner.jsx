import OwlCarousel from "react-owl-carousel";
import Slide from "../component/Slide";
import React from "react";
import { Box } from "@chakra-ui/react";

function Banner() {
  let poster = [
    "https://modesens.com/banner/12451/getimg/?img=%2Fbanner%2F20220613-modesens-MSaintLaurent-1140x400-M.jpg",
    "https://modesens.com/banner/12475/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg",
    "https://modesens.com/banner/12463/getimg/?img=%2Fbanner%2F20220614-modesens-salesneakers-1140x400-M.jpg",
    "https://modesens.com/banner/12457/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg",
    "https://modesens.com/banner/11844/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg",
  ];
  let arrow = [
    "https://modesens.com/static/img/20180905overlay_left_arrow_b.svg",
    "https://modesens.com/static/img/20180905overlay_right_arrow_b.svg",
  ];
  return (
    <Box
      // border={"1px solid red"}
      maxW={"1400px"}
      w={{
        base: "100%",
        md: "100%",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1400px",
      }}
      margin={"auto"}
    >
      <OwlCarousel
        autoplay
        autoplaySpeed={1000}
        className="  slider index-3 "
        dots={false}
        items={1}
        loop={true}
      >
        {poster.map((img, index) => {
          return (
            <Slide
              img={img}
              key={index}
              total={poster.length}
              page={index + 1}
              loop
            />
          );
        })}
      </OwlCarousel>
    </Box>
  );
}

export default Banner;
