//3rd party imports
import { Box, Flex, Text, Button } from "@chakra-ui/react";
// local imports
import ImageContainerLarge from "./ImageContainerLarge";
import "../assets/fonts/fonts.css";
import { StatNumbers, StatDescriber} from '../assets/constants/styledcomponents'
//constants

const About = () => {
  return (
    <Flex
      alignItems={"center"}
      maxWidth={"100%"}
      marginRight="0px"
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      height="100vh"
    >
      <Flex flexDirection="row" alignItems="center" width="67%" pl="64px">
        <Box
          height="60vh"
          width="60%"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ImageContainerLarge />
        </Box>
        <Box ml="-36px">
          <StatNumbers>15+ </StatNumbers>
          <StatDescriber>ani de experiență în domeniu</StatDescriber>
          <StatNumbers>1100+ </StatNumbers>
          <StatDescriber>cliente</StatDescriber>
          <StatNumbers>40+ </StatNumbers>
          <StatDescriber>cursante</StatDescriber>
        </Box>
      </Flex>
      <Box
        width="33%"
        height="100%"
        borderLeft={"2px solid #6C8A96"}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        // py="124px"
        px="80px"
        // fontSize={"18px"}
      >
        <Text
          textAlign={"center"}
          fontSize={"48px"}
          pb="48px"
          fontFamily={"RollgatesLuxury"}
        >
          DESPRE NOI{" "}
        </Text>
        <Box fontFamily={"Montserrat"} fontWeight="400" letterSpacing={"-1px"}>
          <Text pb="24px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text pb="64px">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Box>
        <Button
          fontFamily={"RollgatesLuxury"}
          fontStyle={"italic"}
          fontSize={"20px"}
        >
          {" "}
          Afla toata povestea
        </Button>
      </Box>
    </Flex>
  );
};

export default About;
