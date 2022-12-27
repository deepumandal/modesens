import React, { useEffect, useState } from "react";
// import OwlCarousel from "react-owl-carousel";

import style from "../styles.module/NavbarTrending.module.css";
import axios from "axios";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
const HomeRecentviwe = () => {
  const [data, setData] = useState([]);
  const [render, setrender] = useState(true);

  setTimeout(() => {
    setrender(null);
  }, 50);

  useEffect(() => {
    fetch("http://localhost:8080/Recentview")
      .then((r) => r.json())
      .then((e) => setData(e));
  }, [render]);

  return (
    <VStack
      maxW={"1400px"}
      w={{
        base: "100%",
        md: "100%",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1400px",
      }}
      margin={"auto"}
      gap={4}
      p={6}
    >
        <Box w={{
          base : "90%"
        }} m={"auto"}>
        <Carousel indicators={false} >
        {data.map((e, index) => {
          return (
            <Carousel.Item key={index}>
              <HStack  p={5} 
               maxW={"1400px"}
               w={{
                 base: "100%",
                 md: "100%",
                 lg: "900px",
                 xl: "1200px",
                 "2xl": "1400px",
               }}
              justifyContent={"space-evenly"}
              >
                {data[index].map((item, i) => {
                  return (
                    <div
                      key={item.id}
                      style={{
                        // border: "1px solid red",

                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: "10px",
                        padding: "10px",
                        height: "360px",
                      }}
                    >
                        <img
                          className={style.imgspoffers}
                          src={item.img}
                          alt=""
                        />

                      <div className={style.name}> {item.name} </div>
                      <div className={style.about}> {item.about} </div>
                      <div className={style.PriceRange}>
                        {" "}
                        {item.PriceRange}{" "}
                      </div>
                      <div className={style.store}> {item.store} </div>
                    </div>
                  );
                })}
              </HStack>
            </Carousel.Item>
          );
        })}
      </Carousel>
        </Box>

      {/* <OwlCarousel className="owl-theme" items="4" dots={false} loop>
        {data.map((e) => (
          <div
            key={e.id}
            className="item"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px",
              padding : "10px",
              height : "360px"
            }}
          >
            <img className={style.imgspoffers} src={e.img} alt="" />
            <div className={style.name}> {e.name} </div>
            <div className={style.about}> {e.about} </div>
            <div className={style.PriceRange}> {e.PriceRange} </div>
            <div className={style.store}> {e.store} </div>
          </div>
        ))}

     
      </OwlCarousel> */}

      <button
        className={style.button}
        style={{
          border: "0.5px solid grey",
          padding: " 4px 9px",
        }}
      >
        {" "}
        MORE{" "}
      </button>
    </VStack>
  );
};

export default HomeRecentviwe;
