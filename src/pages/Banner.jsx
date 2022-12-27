import Slide from "../component/Slide";
import React, { memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";

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
        base: "90%",
        md: "100%",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1400px",
      }}
      margin={"auto"}
    >
      <Carousel indicators={false}>
        {poster.map((img, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={img} alt="First slide" />
              <Text position={"relative"} right={"30px"} bottom={"30px"}>
                {`${index + 1}/${poster.length}`}{" "}
              </Text>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default memo(Banner);
