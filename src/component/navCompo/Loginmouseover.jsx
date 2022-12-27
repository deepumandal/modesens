import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Logoutapi } from "../../store/Login/auth.action";

const Loginmouseover = ({ Loginmouse, onOpen, setLoginmouse }) => {
  // console.log("Loginmouse", Loginmouse);

  const { isAuth } = useSelector((state) => state.auth);
const dispatch = useDispatch()
  const { onClose } = useDisclosure();

  useEffect(() => {
    if (isAuth) {
      onClose();
    }
  }, [isAuth]);
  if (isAuth) {
    return (
      <Box>
        {" "}
        <Text onClick={dispatch(Logoutapi())} >{isAuth ? "Sign out" : "Log In"}</Text>
      </Box>
    );
  }
  return (
    <Box>
      <Login>{"Log In"}</Login>
    </Box>
  );
};

export default Loginmouseover;
