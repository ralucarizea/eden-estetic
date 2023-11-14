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
      flexWrap={"wrap"}
      height="fit-content"
    >
      <Flex
        borderRight={`1px solid ${green}`}
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
        width="60%"
        pl={{
          base: "20px",
          sm: "28px",
          md: "36px",
          lg: "44px",
          xl: "128px",
        }}
      >
        <Box
          height="fit-content"
          width="60%"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          pb={{ base: "28px", lg: "0px" }}
        >
          <ImageContainerLarge />
        </Box>
        <Flex
          width={{
            base: "70%",
            lg: "50%",
          }}
          justifyContent={"space-evenly"}
          pr={{ base: "0px", lg: "48px" }}
          alignContent="center"
          flexDirection={{
            base: "row",
            lg: "column",
          }}
          fontSize={{
            base: "12px",
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
        >
          <StatBox>
            <StatNumbers>15+ </StatNumbers>
            <StatDescriber>ani de experiență în domeniu</StatDescriber>
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
        width="40%"
        height="100%"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        px={{
          base: "10px",
          sm: "20px",
          md: "30px",
          lg: "50px",
          xl: "96px",
        }}
        py={{
          base: "20px",
          sm: "30px",
          md: "40px",
          lg: "50px",
          xl: "128px",
        }}
      >
        <Text
          textAlign={"center"}
          fontSize={{
            base: "16px",
            sm: "24px",
            md: "27x",
            lg: "36px",
            xl: "44px",
          }}
          pb={{
            base: "15px",
            sm: "20px",
            md: "28px",
            lg: "30px",
            xl: "48px",
          }}
          fontFamily={"RollgatesLuxury"}
        >
          DESPRE NOI{" "}
        </Text>
        <Box
          fontFamily={"Montserrat"}
          fontWeight="400"
          letterSpacing={"-1px"}
          fontSize={{
            base: "10.5px",
            sm: "12px",
            md: "14px",
            lg: "15px",
            xl: "18px",
          }}
          lineHeight={{
            base: "13px",
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
              base: "10px",
              sm: "12px",
              md: "16px",
              lg: "18px",
              xl: "24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text
            pb={{
              base: "20px",
              sm: "32px",
              md: "40px",
              lg: "60px",
              xl: "96px",
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
