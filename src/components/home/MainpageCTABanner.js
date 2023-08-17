//3rd party imports
import { React } from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
// import { VscArrowRight } from "react-icons/vsc";
//local imports
import "../../assets/fonts/fonts.css";

export default function MainpageCTABanner() {
  return (
    <Box height="30vh" display="flex" alignItems={"center"}>
      <Text
        height="auto"
        fontSize={"60px"}
        pl="64px"
        fontFamily={"RollgatesLuxury"}
        letterSpacing={"-1px"}
      >
        SERVICIILE NOASTRE
      </Text>
      {/* <Box height="100%" display="flex" alignItems={"center"} pl="16px">
        <Icon as={VscArrowRight} width="3rem" height="auto" />
      </Box> 
      */}
    </Box>
  );
}
