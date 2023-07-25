//3rd party imports
import { Box, Flex, Text } from "@chakra-ui/react";
import {React} from "react";
//local imports
// import img from "./../assets/images/edenEsteticHeroImage1.jpg";
import "../assets/fonts/fonts.css";

const Hero = () => {
  return (
    <Flex
      // pl="44px"
      alignItems={"center"}
      maxWidth={"100%"}
      marginRight="0px"
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      height="86vh"
      position="relative"
    >
      <Flex flexDirection="column" width="56%" pl="64px" pr="44px">
        <Flex
          flexWrap={"wrap"}
          justifyContent={""}
          fontSize={"64px"}
          lineHeight={"68px"}
          // fontFamily="RollgatesLuxury"
          fontFamily={"RollgatesLuxury"}
          fontStyle={"normal"}
          fontWeight={"200"}
          letterSpacing={"-2px"}
        >
          TRATAMENTE
          <Text>DERMATO-COSMETICE</Text>
          {/* <strong> */}
          <Text
            as="span"
            fontFamily="RollgatesLuxury"
            // fontStyle="italic"
            fontSize={"64px"}
            py="4px"
            // letterSpacing={"-5px"}
            fontWeight={"400"}
          >
            PERSONALIZATE
          </Text>
          {/* </strong> */}
          <Text pt="0px">& MAKE-UP PERMANENT</Text>
        </Flex>
        <Box
          fontSize={"18px"}
          pt="140px"
          width="82%"
          fontFamily={"Montserrat"}
          fontStyle={"normal"}
          fontWeight={"300"}
          letterSpacing={"-0.5px"}
          // lineHeight="64px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula
          finibus diam, et faucibus lectus pulvinar sit. Nam habilis liniscus
          lem, et exacerbare lectus pulvinar sit. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id.
        </Box>
      </Flex>
      <Text
        fontFamily="TheReason"
        fontSize={"40px"}
        position="absolute"
        bottom="40%"
        right="45%"
        zIndex={"2"}
      >
        by Mariana Vladescu
      </Text>
      <Box
        width="44%"
        height="100%"
        backgroundImage={`url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194169/edenestetic/mainpage-heroimage_pkgh2m.png")`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
      />
    </Flex>
  );
};

export default Hero;
