import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "../styles.module/NavbarTrending.module.css";
import axios from "axios";
import { VStack } from "@chakra-ui/react";
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
      <OwlCarousel className="owl-theme" items="4" dots={false} loop>
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

     
      </OwlCarousel>

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
