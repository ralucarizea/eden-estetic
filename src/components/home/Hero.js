import { Box, Flex, Text } from "@chakra-ui/react";
import { React } from "react";
import "../../assets/fonts/fonts.css";
import { beige } from "../../assets/constants/constants";

const Hero = () => {
  return (
    <Flex
      // pl="44px"
      alignItems={"center"}
      maxWidth={"100%"}
      marginRight="0px"
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      height="fit-content"
      position="relative"
      // borderTop={`0.5px solid ${beige}`}
    >
      <Flex
        flexDirection="column"
        width="50%"
        pl={{ base: "20px", xs: "24px", md: "36px", lg: "64px" }}
        pr={{ base: "12px", xs: "28px", md: "36px", lg: "36px", xl: "56px" }}
        // border="1px solid red"
      >
        <Flex
          flexWrap={"wrap"}
          fontSize={{
            base: "19px",
            xs: "22px",
            sm: "24px",
            md: "32px",
            lg: "40px",
            xl: "55px",
            "2xl": "58px",
          }}
          lineHeight={{
            base: "20px",
            xs: "22px",
            sm: "28px",
            md: "36px",
            lg: "44px",
            xl: "52px",
            "2xl": "60px",
          }}
          fontFamily={"RollgatesLuxury"}
          fontStyle={"normal"}
          fontWeight={"200"}
          letterSpacing={"-1px"}
        >
          TRATAMENTE
          <Text>DERMATO-COSMETICE</Text>
          <Text
            as="span"
            fontFamily="RollgatesLuxury"
            fontSize={{
              base: "20px",
              xs: "22px",
              sm: "24px",
              md: "32px",
              lg: "40px",
              xl: "55px",
              "2xl": "58px",
            }}
            py="2px"
            fontWeight={"400"}
          >
            PERSONALIZATE
          </Text>
          <Text pt="0px">& MAKE-UP PERMANENT</Text>
        </Flex>
        <Box
          fontSize={{
            base: "12.5px",
            sm: "13px",
            md: "16px",
            lg: "17.75px",
            xl: "20px",
          }}
          lineHeight={{
            base: "15px",
            sm: "16px",
            md: "19px",
            lg: "23px",
            xl: "26px",
          }}
          pt={{ base: "20px", xs: "24px", sm: "28px", md: "36px", lg: "48px", xl: "64px" }}
          width={{ base: "92%", sm: "82%" }}
          fontFamily={"Montserrat"}
          fontWeight={{ base: "300" }}
          letterSpacing={{ base: "0px", xs: "-0.5px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula
          finibus diam, et faucibus lectus pulvinar sit. Nam habilis liniscus
          lem, et exacerbare lectus pulvinar sit. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id.
        </Box>
      </Flex>
      <Box
        aspectRatio={"16 / 9"}
        width="50%"
        height={{
          base: "40vh",
          sm: "55vh",
          md: "65vh",
          lg: "75vh",
          xl: "100vh",
        }}
        backgroundImage={`url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194169/edenestetic/mainpage-heroimage_pkgh2m.png")`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        sx={{}}
      />
    </Flex>
  );
};

export default Hero;
