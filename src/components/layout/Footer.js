import { Box, Text, Icon, Flex, Divider, VStack } from "@chakra-ui/react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/logo-edenesteticwhite.svg";
import "../../assets/fonts/fonts.css";
import { IconContainer } from "../../assets/constants/styledcomponents";
import { ROUTES } from "../../assets/constants/constants";
import styled from "@emotion/styled";

const FooterLink = styled(Box)`
  line-height: 16px;
  text-align: end;
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-top: ${(props) => props.pt};

  @media only screen and (max-width: 470px) {
    line-height: 14px;
    text-align: center;
  }
`;
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
      height={{ base: "", xs: "", sm: "", md: "", lg: "", xl: "150vh" }}
      width="100%"
      flexDirection={"column"}
      justifyContent={"flex-end"}
      border="2px solid purple"
      zIndex="3000"
      position="sticky"
      top={"4000px"}
    >
      <Flex
        height="55%"
        width="100%"
        justifyContent={"center"}
        alignItems={"flex-end"}
        position={"relative"}
        border="1px solid red"
      >
        <Box
          height={{
            base: "280px",
            xs: "390px",
            sm: "430px",
            md: "460px",
            lg: "490px",
            xl: "500px",
          }}
          width={{
            base: "250px",
            xs: "370px",
            sm: "440px",
            md: "490px",
            lg: "550px",
            xl: "560px",
          }}
          borderRadius="50% 50% 0% 0%"
          backgroundColor={`${secondaryColor}`}
          position={"relative"}
        >
          <Text
            fontSize={{
              base: "38px",
              xs: "58px",
              sm: "64px",
              md: "75px",
              lg: "88px",
              xl: "100px",
            }}
            fontFamily={"RollgatesLuxury"}
            letterSpacing={{ base: "-1px", xs: "-4px" }}
            position={"absolute"}
            top={{
              base: "100px",
              xs: "110px",
              sm: "110px",
              md: "130px",
              lg: "140px",
              xl: "120px",
            }}
            left={{
              base: "-20px",
              xs: "-40px",
              sm: "-50px",
              md: "-60px",
              lg: "-70px",
              xl: "-70px",
            }}
            zIndex={5}
            color={`${primaryReversed}`}
            mixBlendMode={"difference"}
          >
            Te intereseaza{" "}
          </Text>
          <Text
            fontSize={{
              base: "38px",
              xs: "58px",
              sm: "64px",
              md: "75px",
              lg: "88px",
              xl: "100px",
            }}
            fontFamily={"RollgatesLuxury"}
            letterSpacing={{ base: "-1px", xs: "-4px" }}
            position={"absolute"}
            top={{
              base: "140px",
              xs: "165px",
              sm: "170px",
              md: "200px",
              lg: "220px",
              xl: "220px",
            }}
            right={{
              base: "-15px",
              xs: "-40px",
              sm: "-50px",
              md: "-60px",
              lg: "-70px",
              xl: "-70px",
            }}
            zIndex={5}
            color={`${primaryReversed}`}
            mixBlendMode={"difference"}
          >
            o programare?
          </Text>
          <Flex
            width="100%"
            justifyContent={"center"}
            position={"absolute"}
            bottom="10%"
            left="0"
            right="0"
            margin={"0 auto"}
          >
            <a href="https://www.facebook.com/EdenEsteticCenter/?locale=ro_RO">
              <IconContainer>
                <Icon
                  as={SiFacebook}
                  color={`${secondaryColor}`}
                  width="0.7em"
                  height="0.7em"
                  mx="8px"
                />
              </IconContainer>
            </a>
            <a href="https://www.instagram.com/marianavladescu/">
              <IconContainer>
                <Icon
                  as={HiPhone}
                  color={`${secondaryColor}`}
                  width="0.7em"
                  height="0.7em"
                  mx="8px"
                />
              </IconContainer>
            </a>
            <a href="https://www.instagram.com/marianavladescu/">
              <IconContainer>
                <Icon
                  as={SiInstagram}
                  color={`${secondaryColor}`}
                  width="0.7em"
                  height="0.7em"
                  mx="8px"
                />
              </IconContainer>
            </a>
          </Flex>
        </Box>
      </Flex>

      <Divider
        width="90%"
        alignSelf={"center"}
        mb={{ base: "16px", xs: "36px", sm: "48px", xl: "36px" }}
        color={`${primaryColor}`}
      />

      <Flex
        h="fit-content"
        width={{ base: "95%", xs: "95%" }}
        textAlign="end"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "space-around", lg: "space-between" }}
        alignSelf={"center"}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Box position={"relative"}>
          <Box
            ml={{ base: "110px", sm: "60px", md: "60px", lg: "10px" }}
            width={{ base: "70%", sm: "100%" }}
            height="90%"
          >
            <Logo
              // border="1px solid green"
              alt=""
              width="100%"
              height="100%"
              viewBox="0 0 250 44"
              fill={secondaryColor}
            />
          </Box>
          <Text
            fontSize={{ base: "19px", md: "21px" }}
            fontFamily={"TheReason"}
            position={"absolute"}
            right={{ base: "48px", sm: "10px", lg: "0px" }}
            bottom={{ base: "-10px", sm: "-5px", md: "-12px" }}
          >
            by Mariana Vladescu
          </Text>{" "}
        </Box>
        <Flex
          h="fit-content"
          fontSize={{
            base: "13px",
            xs: "14px",
            md: "15px",
            lg: "16px",
            xl: "17px",
          }}
          mt={{ base: "20px", xs: "48px", sm: "60px", md: "44px" }}
          ml={{ base: "0", lg: "16px" }}
          gap={{ base: 4 }}
          fontWeight={"300"}
          flexDirection={{ base: "column", xs: "row" }}
          alignItems={{ base: "center", xs: "flex-start" }}
          justifyContent={{ base: "space-around", lg: "space-between" }}
          fontFamily={"Montserrat"}
          w={{ base: "100%", sm: "97%", md: "88%", lg: "75%", xl: "52%" }}
          // border="1px solid red"
        >
          <Flex
            flexDirection="column"
            alignItems={{ base: "center", xs: "flex-end" }}
          >
            <Text
              fontFamily="RollgatesLuxury"
              fontSize={{ base: "22px", md: "25px", lg: "28px" }}
              pt="8px"
              pb="4px"
            >
              Contact
            </Text>
            <Box>Bd. Ion C. Brătianu 24</Box>
            <Box>Pitești, România</Box>
            <FooterLink pt="4px" pb={{ base: "6px", md: "8px", lg: "10px" }}>
              <Text as="span" fontWeight={500}>
                Luni - Vineri:
              </Text>{" "}
              10:00-18:00
            </FooterLink>

            <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
              <Text as="span" fontWeight={500}>
                Sâmbătă:
              </Text>{" "}
              10:00-14:00
            </FooterLink>
            <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
              <Text as="span" fontWeight={500}>
                Duminică:{" "}
              </Text>{" "}
              închis
            </FooterLink>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={{ base: "center", xs: "flex-end" }}
            // border="1px solid green"
          >
            <Text
              fontFamily="RollgatesLuxury"
              fontSize={{ base: "22px", md: "25px", lg: "28px" }}
              pt="8px"
              pb="4px"
            >
              Meniu
            </Text>
            <Link to={ROUTES.HOME}>
              <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
                Acasă
              </FooterLink>
            </Link>
            <Link to={ROUTES.ABOUT}>
              <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
                Despre noi
              </FooterLink>
            </Link>

            <Link to={ROUTES.PRICING_LIST}>
              <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
                Listă de prețuri
              </FooterLink>
            </Link>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={{ base: "center", xs: "flex-end" }}
          >
            <Text
              fontFamily="RollgatesLuxury"
              fontSize={{ base: "22px", md: "25px", lg: "28px" }}
              pt="8px"
              pb="4px"
            >
              Servicii
            </Text>
            <Link to={ROUTES.DIAGNOSIS}>
              <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
                Diagnoză & consultanță{" "}
              </FooterLink>
            </Link>
            <Link to={ROUTES.SERVICES}>
              <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
                Tratamente dermato-cosmetice
              </FooterLink>
            </Link>
            <Link to={ROUTES.SERVICES}>
              <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
                Make-up permanent
              </FooterLink>
            </Link>
            <Link to={ROUTES.COURSES}>
              <FooterLink pb={{ base: "6px", md: "8px", lg: "10px" }}>
                Cursuri & certificări
              </FooterLink>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <VStack
        mt={{
          base: "36px",
          xs: "48px",
          sm: "60px",
          md: "36px",
          lg: "48px",
          xl: "50px",
        }}
        width={{ base: "60%", sm: "100%", md: "100%" }}
        gap={0}
        flexDirection={{ base: "column", sm: "row" }}
        height="fit-content"
        alignItems={"center"}
        justifyContent={{ base: "flex-start", sm: "center" }}
        backgroundColor={`${primaryColor}`}
        color={`${secondaryColor}`}
        letterSpacing={"1.5px"}
        fontWeight={"300"}
        userSelect={"none"}
        fontSize={"8.5px"}
        fontFamily={"Montserrat"}
        alignSelf={"center"}
      >
        <Text> DESIGN & DEVELOPMENT BY RALUCA RIZEA.</Text>
        <Text fontWeight={"400"} ml="8px">
          ALL RIGHTS RESERVED.
        </Text>
      </VStack>
    </Flex>
  );
}
export default Footer;
