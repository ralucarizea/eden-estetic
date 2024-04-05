//3rd party imports
import { React } from "react";
import { Flex, Text } from "@chakra-ui/react";
// import { VscArrowRight } from "react-icons/vsc";
//local imports
import "../../assets/fonts/fonts.css";

export default function MainpageCTABanner() {
  return (
    <Flex height="fit-content" alignItems={"center"} justifyContent={{base: "center", sm: "left"}}>
      <Text
        // height="fit-content"
        py={{
          base: "40px",
          sm: "48px",
          md: "52px",
          lg: "60px",
          xl: "80px",
        }}
        fontSize={{
          base: "28px",
          sm: "32px",
          md: "36px",
          lg: "48px",
          xl: "64px",
        }}
        pl={{
          base: "0px",
          sm: "36px",
          md: "40px",
          lg: "52px",
          xl: "72px",
        }}
        fontFamily={"RollgatesLuxury"}
        letterSpacing={"-0.5px"}
      >
        SERVICIILE NOASTRE
      </Text>
    </Flex>
  );
}
