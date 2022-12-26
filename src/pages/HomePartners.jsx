import React from "react";
import cx from "classnames";
import Partners from "../styles.module/HomePartners.module.css";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import ReactOwlCarousel from "react-owl-carousel";

const HomePartners = () => {
  let imposter1 = [
    "https://cdn.modesens.com/banner/20211014-24S-logo.png",
    "https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png",
    "https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png",
    "https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png",
    "https://cdn.modesens.com/banner/20211014-FARFETCH-logo.png",
    "https://cdn.modesens.com/banner/20211014-FENDI-logo.png",
    "https://cdn.modesens.com/banner/20211014-FWRD-logo.png",
    "https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png",
    "https://cdn.modesens.com/banner/20211014-GUCCI-logo.png",
    "https://cdn.modesens.com/banner/20211014-FARFETCH-logo.png",
    "https://cdn.modesens.com/banner/20211014-LOEWE-logo.png",
    "https://cdn.modesens.com/banner/20211014-LUISAVIAROMA-logo.png",
  ];
  let imposter2 = [
    "https://cdn.modesens.com/banner/20211014-MATCHESFASHION-logo.png",
    "https://cdn.modesens.com/banner/20211014-MR-PORTER-logo.png",
    "https://cdn.modesens.com/banner/20211014-NET-A-PORTER-logo.png",
    "https://cdn.modesens.com/banner/20211014-NORDSTROM-logo.png",
    "https://cdn.modesens.com/banner/20211014-PRADA-logo.png",
    "https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png",
    "https://cdn.modesens.com/banner/20211014-SAKS-FIFTH-AVENUE-logo.png",
    "https://cdn.modesens.com/banner/20211014-SHOPBOP-logo.png",
    "https://cdn.modesens.com/banner/20211014-GUCCI-logo.png",
    "https://cdn.modesens.com/banner/20211014-SSENSE-logo.png",
    "https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png",
    "https://cdn.modesens.com/banner/20211014-VERSACE-logo.png",
  ];
  return (
    <VStack>
      <Heading
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          letterSpacing: "1px",
          color: "#1c1c1c",
        }}
      >
        HomePartners
      </Heading>
      <br />
      <Heading
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          // color: "#6c757d",
        }}
      >
        Compare across our 500+ partner stores to find the products you want at
        the best price.
      </Heading>

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
        <ReactOwlCarousel
          autoplay
          autoplaySpeed={1000}
          className="  slider index-3 "
          dots={false}
          items={1}
          loop={true}
        >
          <SimpleGrid columns={{
            base : 3,
            sm : 6
          }} justifyContent={"space-between"} gap={"20px"}>
            {imposter1.map((imposter, index) => {
              return (
                <GridItem key={index} margin={"auto"}>
                  <Image
                    src={imposter}
                    sizes="10px"
                    cursor={"pointer"}
                    alt="Second slide"
                  />
                </GridItem>
              );
            })}
          </SimpleGrid>
          <SimpleGrid columns={{
            base : 3,
            sm : 6
          }} justifyContent={"space-between"} gap={"20px"}>
            {imposter2.map((imposter, index) => {
              return (
                <GridItem key={index} margin={"auto"}>
                  <Image
                    src={imposter}
                    sizes="10px"
                    cursor={"pointer"}
                    alt="Second slide"
                  />
                </GridItem>
              );
            })}
          </SimpleGrid>
        </ReactOwlCarousel>
      </Box>
    </VStack>
  );
};

export default HomePartners;
