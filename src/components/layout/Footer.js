import { Box, Text, Icon, Flex, Divider } from "@chakra-ui/react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/logo-edenesteticwhite.svg";
import "../../assets/fonts/fonts.css";
import { IconContainer } from "../../assets/constants/styledcomponents";
import { ROUTES } from "../../assets/constants/constants";

function Footer({
  primaryColor,
  secondaryColor,
  primaryReversed,
  secondaryReversed,
}) {
  return (
    <Flex
      backgroundColor={`${primaryColor}`}
      color={`${secondaryColor}`}
      height="150vh"
      width="100%"
      flexDirection={"column"}
      justifyContent={"flex-end"}
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
        >
          <Flex
            width="100%"
            display="flex"
            justifyContent={"center"}
            position={"absolute"}
            bottom="10%"
            left="0"
            right="0"
            margin={"0 auto"}
          >
            <Link href="https://www.facebook.com/EdenEsteticCenter/?locale=ro_RO">
              <IconContainer>
                <Icon
                  as={SiFacebook}
                  color={`${secondaryColor}`}
                  width="0.7em"
                  height="0.7em"
                  mx="8px"
                />
              </IconContainer>
            </Link>
            <Link href="src/components">
              <IconContainer>
                <Icon
                  as={HiPhone}
                  color={`${secondaryColor}`}
                  width="0.7em"
                  height="0.7em"
                  mx="8px"
                />
              </IconContainer>
            </Link>
            <Link href="https://www.instagram.com/marianavladescu/">
              <IconContainer>
                <Icon
                  as={SiInstagram}
                  color={`${secondaryColor}`}
                  width="0.7em"
                  height="0.7em"
                  mx="8px"
                />
              </IconContainer>
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Divider
        width="90%"
        alignSelf={"center"}
        mb="36px"
        color={`${primaryColor}`}
      />

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
            <Logo
              alt=""
              width="100%"
              height="100%"
              viewBox="0 0 250 44"
              fill={secondaryColor}
            />
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
            <Link to={ROUTES.HOME}>
              <Box pb="4px">Acasă</Box>
            </Link>
            <Link to={ROUTES.ABOUT}>
              <Box pb="4px">Despre noi</Box>
            </Link>

            <Link to={ROUTES.PRICING_LIST}>
              <Box pb="4px">Listă de prețuri</Box>
            </Link>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={"flex-end"}
            textAlign={"end"}
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
            maxWidth="36%"
            textAlign={"end"}
          >
            <Text fontFamily="RollgatesLuxury" fontSize={"22px"} pb="4px">
              Servicii
            </Text>
            <Link to={ROUTES.DIAGNOSIS}>
              <Box textAlign={"end"} pb="6px">
                Diagnoză & consultanță{" "}
              </Box>
            </Link>
            <Link to={ROUTES.SERVICES}>
              <Box textAlign={"end"} pb="6px">
                Tratamente dermato-cosmetice
              </Box>
            </Link>
            <Link to={ROUTES.SERVICES}>
              <Box pb="6px">Make-up permanent</Box>
            </Link>
            <Link to={ROUTES.COURSES}>
              <Box>Cursuri & certificări</Box>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        height="4vh"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={`${primaryColor}`}
        fontSize={"12px"}
        color={`${secondaryColor}`}
      >
        <Flex
          width="100%"
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"9px"}
          fontFamily={"Montserrat"}
          letterSpacing={"1.5px"}
          fontWeight={"300"}
          userSelect={"none"}
        >
          <Text> DESIGN & DEVELOPMENT BY RALUCA RIZEA.</Text>
          <Text fontWeight={"400"} ml="8px">
            ALL RIGHTS RESERVED.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Footer;
