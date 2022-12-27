import React, { useEffect, useState } from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Country from "./navCompo/Country";
import "../pages/login.css";
import { useDisclosure, Box, HStack, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Login from "../pages/Login";
import { Logoutapi } from "../store/Login/auth.action";

const Navbar = () => {
  const navigate = useNavigate();

  const [ismobilescreen] = useMediaQuery(`(max-width: 820px)`);

  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log("isAuth", isAuth);

  const [country, setcountry] = useState(false);

  return (
    <Box w={"100%"}>
      <HStack
        maxW={"1400px"}
        w={{
          base: "100%",
          md: "100%",
          lg: "1000px",
          xl: "1200px",
          "2xl": "1400px",
        }}
        margin={"auto"}
        px={5}
        py={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          cursor={"pointer"}
          w={"100px"}
          src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
          alt=""
          onClick={() => navigate("/")}
        />
        {
          // if this is not a mobile device
          !ismobilescreen && (
            <HStack justifyContent={"center"} gap={"10px"}>
              <Text
                name={"WOMEN"}
                className={style.subcateg}
                onClick={() => navigate("/shop-women-clothing")}
              >
                WOMEN
              </Text>
              <Text
                name={"MEN"}
                className={style.subcateg}
                onClick={() => navigate("/shop-men-clothing")}
              >
                MEN
              </Text>
              <Text
                name={"BEAUTY"}
                className={style.subcateg}
                onClick={() => navigate("/beauty")}
              >
                BEAUTY
              </Text>
              <Text
                name={"KIDS"}
                className={style.subcateg}
                onClick={() => navigate("/kids")}
              >
                KIDS
              </Text>
              <Text
                name={"HOME"}
                className={style.subcateg}
                onClick={() => navigate("/")}
              >
                HOME
              </Text>
              <Text
                name={"OFFERS"}
                className={style.subcateg}
                onClick={() => navigate("/offers")}
              >
                OFFERS
              </Text>
              <Text
                name={"DESIGNERS"}
                className={style.subcateg}
                onClick={() => navigate("/designers")}
              >
                DESIGNERS
              </Text>
              <Text
                name={"COMMUNITY"}
                className={style.subcateg}
                onClick={() => navigate("/community")}
              >
                COMMUNITY
              </Text>
              <Text
                name={"WHY"}
                className={style.subcateg}
                onClick={() => navigate("/why")}
              >
                WHY MODESENS
              </Text>
            </HStack>
          )
        }

        <HStack>
          <Image
            className={style.country}
            onClick={() => setcountry(!country)}
            src="data:image/jpeg;base64,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"
            alt=""
          />

          <Image
            className={style.rightsubcateg}
            src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
            alt=""
          />
          <Box>
            {isAuth ? (
              <Text onClick={() => dispatch(Logoutapi())}>Logout</Text>
            ) : (
              <Login> Login</Login>
            )}
          </Box>

          <HStack
            style={{
              display: "flex",
              alignItems: "center",
              padding: "2px",
            }}
            className={utility.cursurhover}
          >
            <Image
              src="https://cdn.modesens.com/static/img/20200612search_img1.svg"
              alt=""
            />

            <Text
              style={{
                marginLeft: "5px",
                fontWeight: 500,
                letterSpacing: 0.2,
              }}
            >
              {" "}
              SEARCH
            </Text>
          </HStack>
          {country ? <Country /> : null}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
