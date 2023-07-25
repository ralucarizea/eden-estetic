//3rd party imports

import { Box, Text, Icon, Flex, Divider } from "@chakra-ui/react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

//local imports
import { ReactComponent as Logo } from "./../assets/images/logo-edenesteticwhite.svg";
import "../assets/fonts/fonts.css";
import { IconContainer } from "../assets/constants/styledcomponents";
//constants


 function Footer({primaryColor, secondaryColor, primaryReversed, secondaryReversed}) {
  return (
    <Flex
      // px="64px"
      backgroundColor={`${primaryColor}`}
      color={`${secondaryColor}`}
      height="150vh"
      width="99vw"
      flexDirection={"column"}
      justifyContent={"flex-end"}
      // border="2px solid purple"
    >
      <Flex
        height="55%"
        width="100%"
        justifyContent={"center"}
        alignItems={"flex-end"}
        position={"relative"}
      >
        <Text
          fontSize="100px"
          fontFamily={"RollgatesLuxury"}
          letterSpacing={"-4px"}
          position={"absolute"}
          top="48%"
          left="27%"
          lineHeight={"48px"}
          zIndex={5}
          color={`${primaryReversed}`}
          mixBlendMode={"difference"}
        >
          Te intereseaza{" "}
        </Text>
        <Text
          fontSize="100px"
          fontFamily={"RollgatesLuxury"}
          letterSpacing={"-4px"}
          position={"absolute"}
          top="58%"
          left="37%"
          lineHeight={"48px"}
          zIndex={5}
          color={`${primaryReversed}`}
          mixBlendMode={"difference"}
        >
          o programare?
        </Text>
        <Box
          height="80%"
          width="36vw"
          borderRadius="50% 50% 0% 0%"
          backgroundColor={`${secondaryColor}`}
          position={"relative"}
        ></Box>
      </Flex>

      <Divider width="90%" alignSelf={"center"} mb="36px" color={`${primaryColor}`} />

      <Flex
        height="35vh"
        width="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        alignItems={"flex-start"}
      >
        <Box position={"relative"}>
          {" "}
          <Box width="100%" height="100%">
            <Logo alt="" width="100%" height="100%" viewBox="0 0 250 44" />
          </Box>
          <Text
            fontSize={"21px"}
            fontFamily={"TheReason"}
            position={"absolute"}
            right="0px"
            bottom="-12px"
          >
            by Mariana Vladescu
          </Text>{" "}
        </Box>
        <Flex
          fontSize={"13px"}
          fontWeight={"300"}
          flexDirection="row"
          justifyContent="space-between"
          fontFamily={"Montserrat"}
          minWidth="32vw"
        >
          <Flex
            flexDirection="column"
            alignItems={"flex-end"}
            textAlign={"end"}
            maxWidth="30%"
          >
            <Text fontFamily="RollgatesLuxury" fontSize={"22px"} pb="4px">
              Meniu
            </Text>
            <Link to="/">
              <Box pb="4px">Acasă</Box>
            </Link>
            <Link to="/about">
              <Box pb="4px">Despre noi</Box>
            </Link>

            <Link to="/pricing-list">
              <Box pb="4px">Listă de prețuri</Box>
            </Link>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={"flex-end"}
            textAlign={"end"}
            // mx="60px"
            // backgroundColor={"aqua"}
            maxWidth="40%"
          >
            <Text fontFamily="RollgatesLuxury" fontSize={"22px"} pb="4px">
              Contact
            </Text>
            <Box>Bd. Ion C. Brătianu,</Box>
            <Box>nr. 24, Pitești, România</Box>
            <Box pt="12px">
              <Text as="span" fontWeight={"500"}>
                Luni - Vineri:
              </Text>{" "}
              10:00-18:00
            </Box>

            <Box>
              <Text as="span" fontWeight={"500"}>
                Sâmbătă:
              </Text>{" "}
              10:00-14:00
            </Box>
            <Box>
              <Text as="span" fontWeight={"500"}>
                Duminică:
              </Text>{" "}
              închis
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={"flex-end"}
            maxWidth="33%"
            textAlign={"end"}
          >
            <Text fontFamily="RollgatesLuxury" fontSize={"22px"} pb="4px">
              Servicii
            </Text>
            <Link to="/product-list">
              <Box textAlign={"end"}>Diagnostic & </Box>
              <Box mt="-6px" pb="6px">
                consultanță cosmetică
              </Box>
            </Link>
            <Link to="/product-list">
              <Box textAlign={"end"}>Tratamente </Box>
              <Box mt="-6px" pb="6px">
                dermato-cosmetice
              </Box>
            </Link>
            <Link to="/product-list">
              <Box pb="6px">Make-up permanent</Box>
            </Link>
            <Link to="/product-list">
              <Box>Cursuri & certificări</Box>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      {/* <Flex
        width="100%"
        height="4vh"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        // backgroundColor={`${secondaryColor}`}
        backgroundColor={`${primaryColor}`}
        fontSize={"12px"}
        // color={`${primaryColor}`}
        color={`${secondaryColor}`}
      >
        <Flex
          width="90%"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={"11px"}>Website creat de Raluca Rizea</Text>
          <Flex width="8%" display="flex" justifyContent={"space-between"}>
            <Link href="https://www.facebook.com/EdenEsteticCenter/?locale=ro_RO">
              <IconContainer>
                <Icon as={SiFacebook} color={`${secondaryColor}`} width="16px" height="16px"/>
              </IconContainer>
            </Link>
            <Link href="https://www.instagram.com/marianavladescu/">
              <IconContainer>
                <Icon as={SiInstagram} color={`${secondaryColor}`} width="16px" height="16px" />
              </IconContainer>
            </Link>
            <Link href="">
              <IconContainer>
                <Icon as={HiPhone} color={`${secondaryColor}`}width="16px" height="16px"/>
              </IconContainer>
            </Link>
          </Flex>
        </Flex>
      </Flex> */}
    </Flex>
  );
}
export default Footer;