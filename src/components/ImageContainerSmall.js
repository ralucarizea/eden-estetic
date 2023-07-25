import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import thin  from "../assets/images/thinLineEllipse.svg";
import ellipse from "../assets/images/tintedEllipse.svg";
import { Ellipse } from "../assets/constants/styledcomponents";

export default function ImageContainerSmall() {
  return (
    <>
      <Image
        src={`${thin}`}
        alt=""
        width="15%"
        position={"relative"}
        minWidth="190px"
      />
      <Ellipse
        src={`${ellipse}`}
        alt=""
        
      />
    </>
  );
}
