import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Loginmouseover.module.css";

import {
  Box,
  Divider,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Login from "../../pages/Login";

const Loginmouseover = ({ Loginmouse, onOpen, setLoginmouse }) => {
  // console.log("Loginmouse", Loginmouse);

  const { isAuth } = useSelector((state) => state.auth);
  const { onClose } = useDisclosure();

 
  useEffect(() => {
    if (isAuth) {
      onClose();
    }
  }, [isAuth]);

  return (
    <Box
      sx={{
        width: "230px",
        height: "360px",
        position: "fixed",
        top: "39px",
        backgroundColor: "white",
        right: "121px",
        zIndex: 100,
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className={style.main}
      onMouseLeave={() => setLoginmouse(false)}
      // border={"1px solid red"}
    >
      {!isAuth && (
        <Box
          //  border={"1px "}
          sx={{
            height: "55px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Image
              style={{
                height: "auto",
                width: "30px",
              }}
              src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
              alt=""
            />
          </Box>

          <Box>
            <Box>
              <Text
                cursor={"pointer"}
                style={{
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#1c1c1c",
                  margin: " 2px",
                }}
              >
                Earn points
              </Text>
            </Box>
            <Box
              style={{
                fontSize: "12px",
                lineHeight: "18px",
                color: "red",
                margin: " 2px",
                textAlign: "left",
              }}
            >
              signup to unlock all benefits
            </Box>
          </Box>
        </Box>
      )}
      <VStack
        alignItems={"left"}
        // className={style.My}
      >
        <Text cursor={"pointer"}>My Likes</Text>
        <Text cursor={"pointer"}>My Alerts</Text>
        <Text cursor={"pointer"}>My Recently Viewed</Text>
      </VStack>

      <Divider my={2} />

      <VStack
        alignItems={"left"}
        // className={style.My}
      >
        <Text cursor={"pointer"}>My Closet</Text>
        <Text cursor={"pointer"}>My Orders</Text>
        <Text cursor={"pointer"}>My Save Searches</Text>
        <Text cursor={"pointer"}>My Loyality</Text>
        <Text cursor={"pointer"}>My Messages</Text>
        <Text cursor={"pointer"}>Invite Friends</Text>
        <Text cursor={"pointer"}>Settings</Text>
      </VStack>

      <Divider />

      <Text cursor={"pointer"} >
        <Login>{isAuth ? "Sign out" : "Log In"}</Login>
      </Text>
    </Box>
  );
};

export default Loginmouseover;
