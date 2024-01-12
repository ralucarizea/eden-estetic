import { Flex, Box, Image } from "@chakra-ui/react";
import { beige } from "../../assets/constants/constants";
import arkanaLogo from "../../assets/images/logo-arkana.png";
import pressensaLogo from "../../assets/images/logo-pressensa.png";
import mccmLogo from "../../assets/images/logo-mccm.png";
import drspillerLogo from "../../assets/images/logo-drspiller.png";
import sqtLogo from "../../assets/images/logo-sqt.png";
import Marquee from "react-fast-marquee";
export default function PartnerBrands() {
  return (
    <Flex
      height="85vh"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={beige}
    >
      <Box
        fontSize={"12px"}
        fontFamily={"Montserrat"}
        fontWeight={"400"}
        letterSpacing={"1px"}
        height="auto"
        pb={{ base: "12px", md: "24px", lg: "36px" }}
      >
        BRAND-URI DE SKINCARE PARTENERE
      </Box>
      <Marquee
        // pauseOnHover={true}
        style={{
          width: "100%",
          justifyContent: "space-between",
          // color: { green },
          mixBlendMode: "difference",
        }}
        autoFill={true}
        gradient={true}
        gradientColor={"rgba(0, 0, 0, 1)"}
      >
        <Flex
          height="30%"
          width={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Box px={{ base: "32px", sm: "52px",  md: "64px", lg: "80px" }}>
            <Image
              src={arkanaLogo}
              alt=""
              height={{ base: "28px", xs: "55px", md: "60px", lg: "70px" }}
            />
          </Box>
          <Box px={{ base: "32px", sm: "52px",  md: "64px", lg: "80px" }}>
            <Image
              src={mccmLogo}
              alt=""
              height={{ base: "75px", xs: "80px", md: "90px", lg: "100px" }}
              // mixBlendMode={"difference"}
            />
          </Box>

          <Box px={{ base: "32px", sm: "52px",  md: "64px", lg: "80px" }}>
            <Image
              src={drspillerLogo}
              alt=""
              height={{ base: "28px", xs: "36px", md: "40px", lg: "50px" }}
              // mixBlendMode={"difference"}
            />
          </Box>
          <Box px="80px">
            <Image
              src={sqtLogo}
              alt=""
              height={{ base: "70px", xs: "75px", md: "82px", lg: "88px" }}
              // mixBlendMode={"difference"}
            />
          </Box>
          <Box px={{ base: "32px", sm: "52px",  md: "64px", lg: "80px" }}>
            <Image
              // mixBlendMode={"difference  !important"}
              src={pressensaLogo}
              alt=""
              height={{ base: "37px", xs: "42px", md: "47px", lg: "56px" }}
            />
          </Box>
        </Flex>
      </Marquee>
    </Flex>
  );
}
