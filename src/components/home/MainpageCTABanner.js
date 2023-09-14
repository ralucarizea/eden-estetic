//3rd party imports
import { React } from "react";
import { Flex, Text } from "@chakra-ui/react";
// import { VscArrowRight } from "react-icons/vsc";
//local imports
import "../../assets/fonts/fonts.css";

export default function MainpageCTABanner() {
  return (
    <Flex height="30vh" alignItems={"center"}>
      <Text
        height="auto"
        fontSize={"60px"}
        pl="64px"
        fontFamily={"RollgatesLuxury"}
        letterSpacing={"-1px"}
      >
        SERVICIILE NOASTRE
      </Text>
    </Flex>
  );
}
