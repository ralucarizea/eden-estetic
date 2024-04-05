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
        position={"relative"}
        width={{
          base: "130px",
          xs: "170px",
          sm: "180px",
          md: "205px",
          lg: "190px",
          xl: "270px",
        }}
        minWidth={{base: "140px", xs: "150px", sm: "175px", md: "150px"}}
      />
      <Image
        src={`${ellipse}`}
        alt=""
        position={"absolute"}
        width={{
          base: "120px",
          xs: "130px",
          sm: "160px",
          md: "185px",
          lg: "170px",
          xl: "240px",
        }}
      />
    </>
  );
}
