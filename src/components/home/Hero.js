import { Box, Flex, Show, Text } from "@chakra-ui/react";
import { React } from "react";
import "../../assets/fonts/fonts.css";
import ButtonEllipse from "../ui/ButtonEllipse";
import { beige, green } from "../../assets/constants/constants";
import { HiArrowLongDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <Flex
      // pl="44px"
      // maxW="fit-content"
      alignItems={"center"}
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      height={"fit-content"}
      position="relative"
      // border="1px solid green"
    >
      <Flex
        flexDirection={"column"}
        justifyContent={{ base: "center", sm: "left" }}
        textAlign={{ base: "center", sm: "left" }}
        alignContent={{ base: "center", sm: "left" }}
        width={{ base: "90%", xs: "83%", sm: "50%" }}
        pl={{ base: "0px", xs: "18px", sm: "24px", md: "36px", lg: "64px" }}
        pr={{
          base: "0px",
          xs: "18px",
          sm: "20px",
          md: "28px",
          lg: "20px",
          xl: "56px",
        }}
        // border="1px solid red"
        mt={{ base: "40px", sm: "0px" }}
      >
        <Flex
          mt={{ sm: "-44px", md: "-60px", lg: "-80px", xl: "-130px" }}
          flexWrap={"wrap"}
          fontSize={{
            base: "28px",
            xs: "32px",
            sm: "28px",
            md: "35px",
            lg: "40px",
            xl: "58px",
          }}
          lineHeight={{
            base: "30px",
            xs: "34px",
            sm: "30px",
            md: "36px",
            lg: "44px",
            xl: "55px",
          }}
          fontFamily={"RollgatesLuxury"}
          fontStyle={"normal"}
          fontWeight={"200"}
          letterSpacing={"-1px"}
          textAlign={{ base: "center", sm: "left" }}
          justifyContent={{ base: "center", sm: "left" }}
          // border="1px solid yellow"
        >
          TRATAMENTE
          <Text>DERMATO-COSMETICE</Text>
          <Text
            as="span"
            fontFamily="RollgatesLuxury"
            fontSize={{
              base: "28px",
              xs: "32px",
              sm: "30px",
              md: "35px",
              lg: "40px",
              xl: "58px",
            }}
            py="2px"
            fontWeight={"400"}
          >
            PERSONALIZATE
          </Text>
          <Text
            pt="0px"
            fontSize={{
              base: "28px",
              xs: "32px",
              sm: "30px",
              md: "35px",
              lg: "40px",
              xl: "58px",
            }}
            py="2px"
            fontWeight={"400"}
          >
            & MAKE-UP PERMANENT
          </Text>
        </Flex>
        <Box
          fontSize={{
            base: "12.5px",
            xs: "13.5px",
            sm: "15px",
            md: "16px",
            lg: "18px",
            xl: "22px",
          }}
          lineHeight={{
            base: "15.5px",
            xs: "16.5px",
            sm: "19px",
            md: "22px",
            lg: "27px",
            xl: "33px",
          }}
          pt={{
            base: "20px",
            xs: "24px",
            sm: "28px",
            md: "36px",
            lg: "48px",
            xl: "64px",
          }}
          width={{ base: "100%", sm: "82%" }}
          fontFamily={"Montserrat"}
          fontWeight={{ base: "300" }}
          letterSpacing={{ base: "0px", xs: "-0.25px" }}
          mb={{ base: "16px", sm: "0px" }}
          px={{ base: "28px", xs: "40px", sm: "0px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula
          finibus diam, et faucibus lectus pulvinar sit. Nam habilis liniscus
          lem, pulvinar sit. Excepteur sint occaecat cupidatat, deserunt mollit
          id.
        </Box>
      </Flex>
      <Box
        width={{ base: "58%", xs: "51%", sm: "50%" }}
        my={{ base: "16px", sm: "0px" }}
        height={{
          base: "33vh",
          xs: "45vh",
          sm: "55vh",
          md: "65vh",
          lg: "75vh",
          xl: "100vh",
        }}
        backgroundImage={`url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194169/edenestetic/mainpage-heroimage_pkgh2m.png")`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
      />
      <Show below="sm">
        <Flex
          my="36px"
          // border={"1px solid red"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <ButtonEllipse
            primaryColor={green}
            secondaryColor={beige}
            textCTA={"Servicii"}
            maxHeight="170%"
            maxWidth="100%"
          />
          <HiArrowLongDown fontSize="30px" />
        </Flex>
      </Show>
    </Flex>
  );
};

export default Hero;
