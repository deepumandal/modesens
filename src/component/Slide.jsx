import { Button, Text } from "@chakra-ui/react";
import React from "react";
const Slide = (props) => {
  const { img, total, page } = props;
  

  return (
    <div>
      <img src={img} alt="First slide" />
      <div>
        <Text position={"relative"} right={"30px"} bottom={"30px"}>
          {`${page}/${total}`}{" "}
        </Text>
      </div>
    </div>
  );
};

export default Slide;
