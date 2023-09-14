import { Flex, Box, Image } from "@chakra-ui/react";
import { green } from "../../assets/constants/constants";
import arkanaLogo from "../../assets/images/logo-arkana.png";
import pressensaLogo from "../../assets/images/logo-pressensa.png";
import mccmLogo from "../../assets/images/logo-mccm.png";
import drspillerLogo from "../../assets/images/logo-drspiller.png";
import sqtLogo from "../../assets/images/logo-sqt.png";
export default function PartnerBrands() {
  return (
    <Flex
      height="85vh"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      // backgroundColor={"red"}
    >
      <Box
        fontSize={"12px"}
        fontFamily={"Montserrat"}
        fontWeight={"400"}
        letterSpacing={"1px"}
        height="auto"
      >
        {" "}
        BRAND-URI DE SKINCARE PARTENERE
      </Box>
      <Flex
        height="30%"
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box p="8px">
          <Image
            src={arkanaLogo}
            alt=""
            height="70px"
            mixBlendMode={"difference"}
          />
        </Box>
        <Box p="8px">
          <Image
            src={mccmLogo}
            alt=""
            height="100px"
            mixBlendMode={"difference"}
          />
        </Box>

        <Box p="8px">
          <Image
            src={drspillerLogo}
            alt=""
            height="50px"
            mixBlendMode={"difference"}
          />
        </Box>
        <Box p="8px">
          <Image
            src={sqtLogo}
            alt=""
            height="84 px"
            mixBlendMode={"difference"}
          />
        </Box>
        <Box p="8px">
          <Image
            src={pressensaLogo}
            alt=""
            height="56px"
            mixBlendMode={"difference"}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
