import { Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { Carousel } from "react-bootstrap";
const Slide = (props) => {
  const { img, total, page } = props;

  return (
    <Carousel.Item>
      <img className="d-block w-100" src={img} alt="First slide" />
      <Text position={"relative"} right={"30px"} bottom={"30px"}>
        {`${page}/${total}`}{" "}
      </Text>
    </Carousel.Item>
  );
};

export default memo(Slide);
