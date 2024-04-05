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
        width={{
          base: "130px",
          xs: "170px",
          sm: "160px",
          md: "200px",
          lg: "180px",
          xl: "254px",
        }}
        
        position={"relative"}
        minWidth={{base: "140px", xs: "150px", sm: "180px", md: "150px"}}
      />
      <Ellipse
         width={{
          base: "130px",
          xs: "140px",
          sm: "170px",
          md: "190px",
          lg: "170px",
          xl: "250px",
        }}
        src={`${ellipse}`}
        alt=""
      />
    </>
  );
}
