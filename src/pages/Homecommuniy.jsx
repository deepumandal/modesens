import React, { useEffect, useState } from "react";
import style from "../styles.module/NavbarTrending.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { HStack, Image, VStack } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";

const Homecommuniy = () => {
  const [data, setData] = useState([]);
  const [render, setrender] = useState(true);

  setTimeout(() => {
    setrender(null);
  }, 50);

  useEffect(() => {
    fetch("http://localhost:8080/community")
      .then((r) => r.json())
      .then((e) => setData(e));
  }, [render]);

  return (
    <VStack
      maxW={"1400px"}
      w={{
        base: "90%",
        md: "100%",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1400px",
      }}
      margin={"auto"}
      gap={4}
      p={6}
    >
      <Carousel indicators={false}>
        {data.map((e, index) => {
          return (<Carousel.Item key={index}>
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
                      key={i}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: "10px",
                      
                        height: "360px",
                      }}
                    >
                      
                        <Image h={"400px"}

                          
                          src={item.img}
                          alt=""
                        />
                      
                    </div>
                  );
                })}
              </HStack>
            </Carousel.Item>
          );
        })}
      </Carousel>


    

      <button
        className={style.button}
        style={{
          border: "0.5px solid grey",
          padding: " 4px 9px",
        }}
      >
        {" "}
        VIEW ALL{" "}
      </button>
    </VStack>
  );
};

export default Homecommuniy;
