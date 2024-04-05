//3rd party imports
import { React } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
//local imports
// import backgroundimg from "../assets/images/4.jpg";
import "../assets/fonts/fonts.css";

const Promo = () => {
  return (
    <Box
      height={{base: "70vh",sm: "110vh"}}
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
        textAlign={"center"}
      >
        {/* <Text fontSize={"28px"} pb="20vh" fontFamily={"Thereason"}>
          {" "}
          Oferta lunii{" "}
        </Text> */}
        <Text
          fontSize={{
            base: "30px",
            xs: "40px",
            sm: "47px",
            md: "49px",
            lg: "56px",
            xl: "72px",
            "2xl": "58px",
          }}
          lineHeight={{
            base: "33px",
            xs: "44px",
            sm: "48px",
            md: "48px",
            lg: "58px",
            xl: "72px",
            "2xl": "58px",
          }}
          pb="8vh"
          fontFamily={"RollgatesLuxury"}
          w={{base: "90%", sm: "75%", md: "70%", lg: "50%"}}
          
        >
          De ziua ei, ofera-i in dar timp doar pentru ea
        </Text>
        <Text
          fontSize={{
            base: "16px",
            xs: "18px",
            sm: "21px",
            md: "23px",
            lg: "24.5px",
            xl: "26px",
            
          }}
          width={{base: "77%", sm: "60%", md: "66%", lg: "45%"}}
          textAlign={"center"}
          fontFamily={"Montserrat"}
          fontStyle={"normal"}
          letterSpacing="-1px"
          fontWeight="300"
        >
          Îți punem la dispoziție posibilitatea achiziționării unui card cadou
          pentru orice sumă de peste 100 lei. Pentru că înțelegem cât de
          important este orice moment de grijă acordat pielii.
        </Text>
      </Flex>
    </Box>
  );
};

export default Promo;
