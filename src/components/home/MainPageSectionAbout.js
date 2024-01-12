//3rd party imports
import { Box, Flex, Text, Button } from "@chakra-ui/react";
// local imports
import ImageContainerLarge from "../ui/ImageContainerLarge";
import ButtonEllipse from "../ui/ButtonEllipse";
import "../../assets/fonts/fonts.css";
import {
  StatNumbers,
  StatDescriber,
  StatBox,
} from "../../assets/constants/styledcomponents";
import { green, beige } from "../../assets/constants/constants";
//constants

const About = () => {
  return (
    <Flex
      alignItems={"center"}
      maxWidth={"100%"}
      marginRight="0px"
      justifyContent={"space-between"}
      flexDirection={{ base: "column", xs: "row" }}
      flexWrap={"wrap"}
      height="fit-content"
    >
      <Flex
        borderRight={{ base: "0px", xs: `1px solid ${green}` }}
        borderBottom={{ base: `1px solid ${green}`, xs: "0px" }}
        py={{
          base: "30px",
          sm: "30px",
          md: "36px",
          lg: "60px",
          xl: "128px",
        }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        alignItems="center"
        width={{base: "100%", xs:"50%"}}
        pl={{
          base: "0px",
          sm: "28px",
          md: "36px",
          lg: "44px",
          xl: "128px",
        }}
      >
        <Box
          height="fit-content"
          width={{base: "30%", xs: "60%"}}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          pb={{ base: "8px", xs: "28px", lg: "0px" }}
        >
          <ImageContainerLarge />
        </Box>
        <Flex
          width={{
            base: "75%",
            lg: "50%",
          }}
          justifyContent={"space-evenly"}
          pr={{ base: "0px", lg: "48px" }}
          alignContent="center"
          flexDirection={{
            base: "column",
            xs: "row",
            lg: "column",
          }}
          fontSize={{
            base: "13px",
            sm: "13px",
            md: "15px",
            lg: "18px",
            xl: "20px",
          }}
          lineHeight={{
            base: "12px",
            sm: "16px",
            md: "18px",
            lg: "24px",
            xl: "25px",
          }}
          // border="1px solid red"
        >
          <StatBox>
            <StatNumbers>15+ </StatNumbers>
            <StatDescriber>ani experiență în domeniu</StatDescriber>
          </StatBox>
          <StatBox>
            <StatNumbers>1100+ </StatNumbers>
            <StatDescriber>cliente</StatDescriber>
          </StatBox>
          <StatBox>
            {" "}
            <StatNumbers>40+ </StatNumbers>
            <StatDescriber>cursante</StatDescriber>
          </StatBox>
        </Flex>
      </Flex>
      <Flex
        width="50%"
        height="100%"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        px={{
          base: "0px",
          xs: "25px",
          sm: "20px",
          md: "30px",
          lg: "50px",
          xl: "100px",
        }}
        py={{
          base: "40px",
          sm: "30px",
          md: "40px",
          lg: "36px",
          xl: "44px",
        }}
      >
        <Text
          textAlign={"center"}
          fontSize={{
            base: "26px",
            xs: "24px",
            sm: "26px",
            md: "30px",
            lg: "36px",
            xl: "40px",
          }}
          pt={{ xl: "30px" }}
          pb={{
            base: "20px",
            sm: "25px",
            md: "28px",
            lg: "28px",
            xl: "30px",
          }}
          fontFamily={"RollgatesLuxury"}
        >
          DESPRE NOI{" "}
        </Text>
        <Box
          w={{ base: "", sm: "88%", md: "80%" }}
          fontFamily={"Montserrat"}
          fontWeight="400"
          letterSpacing={"-0.5px"}
          fontSize={{
            base: "13px",
            sm: "13.7px",
            md: "15px",
            lg: "15px",
            xl: "17.5px",
          }}
          lineHeight={{
            base: "15px",
            sm: "15px",
            md: "19px",
            lg: "20px",
            xl: "26px",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Text
            pb={{
              base: "16px",
              sm: "16px",
              md: "16px",
              lg: "18px",
              xl: "32px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text
            pb={{
              base: "28px",
              sm: "32px",
              md: "40px",
              lg: "40px",
              xl: "60px",
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Box>
        <ButtonEllipse
          primaryColor={green}
          secondaryColor={beige}
          textCTA={"Află mai multe"}
          maxHeight="100%"
          maxWidth="100%"
        />
      </Flex>
    </Flex>
  );
};

export default About;
