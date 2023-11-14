import { Box, Flex, Text } from "@chakra-ui/react";
import { React } from "react";
import "../../assets/fonts/fonts.css";

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
    >
      <Flex
        flexDirection="column"
        width="52%"
        pl={{ base: "24px", md: "36px", lg: "64px" }}
        pr={{ base: "28px", md: "36px", lg: "44px", xl: "56px" }}
      >
        <Flex
          flexWrap={"wrap"}
          fontSize={{
            base: "20px",
            // xs: "22px",
            sm: "24px",
            md: "32px",
            lg: "42px",
            xl: "50px",
            "2xl": "58px",
          }}
          lineHeight={{
            base: "25px",
            // xs: "25px",
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
              // xs: "20px",
              sm: "24px",
              md: "32px",
              lg: "42px",
              xl: "50px",
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
            base: "11px",
            sm: "12px",
            md: "15px",
            lg: "18px",
            xl: "20px",
          }}
          lineHeight={{
            base: "13px",
            sm: "16px",
            md: "18px",
            lg: "23px",
            xl: "26px",
          }}
          pt={{ base: "2vw", sm:"28px", md: "36px", lg: "48px", xl: "64px" }}
          width="82%"
          fontFamily={"Montserrat"}
          fontStyle={"normal"}
          fontWeight={"300"}
          letterSpacing={"-0.5px"}
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
        width="48%"
        height={{
          base: "40vh",
          sm: "55vh",
          md: "65vh",
          lg: "75vh",
          xl: "85vh",
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
