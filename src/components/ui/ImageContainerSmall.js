import { Image } from "@chakra-ui/react";
import thin from "../../assets/images/thinLineEllipse.svg";
import ellipse from "../../assets/images/tintedEllipse.svg";
import { Ellipse } from "../../assets/constants/styledcomponents";

export default function ImageContainerSmall() {
  return (
    <>
      <Image
        src={`${thin}`}
        alt=""
        width={{ base: "50%", md: "25%" }}
        position={"relative"}
        minWidth={{ base: "21vw", md: "13.5vw" }}
      />
      <Ellipse src={`${ellipse}`} alt="" />
    </>
  );
}
