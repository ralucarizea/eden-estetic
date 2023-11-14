import { Image } from "@chakra-ui/react";
import { React } from "react";
// import styled from "@emotion/styled";
import thin from "../../assets/images/thinLineEllipse--beige.svg";
import ellipse from "../../assets/images/tintedEllipse--beige.svg";

export default function ImageContainerSmallBeige() {
  return (
    <>
      <Image
        src={`${thin}`}
        alt=""
        width="100%"
        position={"relative"}
        maxWidth={{ base: "21vw", sm:"20.5vw", md: "14.70vw", lg: "14.7vw" }}
        minWidth={"80px"}
      />
      <Image
        src={`${ellipse}`}
        alt=""
        position={"absolute"}
        width="100%"
        maxWidth={{ base: "18.5vw", sm:"18.5vw", md: "12.5vw", lg: "12vw" }}
        minWidth={"70px"}
      />
    </>
  );
}
