import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { green, beige } from "../../assets/constants/constants";

export default function CarouselThumb({ text }) {
  return (
    <Flex
      mx="4px"
      width="20px"
      height="20px"
      backgroundColor={green}
      borderRadius={"50%"}
      color={beige}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {text}
    </Flex>
  );
}
