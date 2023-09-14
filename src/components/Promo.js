//3rd party imports
import { React } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
//local imports
// import backgroundimg from "../assets/images/4.jpg";
import "../assets/fonts/fonts.css";

const Promo = () => {
  return (
    <Box
      height="120vh"
      //   width="100%"
      backgroundImage={`url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194170/edenestetic/mainpage-promo_m4jbtg.png")`}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"top"}
      backgroundSize={"cover"}
    >
      <Flex
        height="100%"
        width="100%"
        backgroundColor="rgb(21 20 18 / 64%)" // "linear-gradient(180deg, rgba(108,138,150,1) 0%,  rgba(255,255,255,0) 65%);"
        color="#F3EEE7"
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Text fontSize={"28px"} pb="20vh" fontFamily={"Thereason"}>
          {" "}
          Oferta lunii{" "}
        </Text> */}
        <Text fontSize={"72px"} pb="8vh" fontFamily={"RollgatesLuxury"}>
          {" "}
          De ziua ei, ofera-i timp doar pentru ea
        </Text>
        <Text
          fontSize={"24px"}
          width="60%"
          textAlign={"center"}
          fontFamily={"Montserrat"}
          fontStyle={"normal"}
          letterSpacing="-1px"
          fontWeight="300"
        >
          {" "}
          Îți punem la dispoziție posibilitatea achiziționării unui card cadou
          pentru orice sumă de peste 100 lei. Pentru că înțelegem cât de
          important este orice moment de grijă acordat pielii.
        </Text>
      </Flex>
    </Box>
  );
};

export default Promo;
