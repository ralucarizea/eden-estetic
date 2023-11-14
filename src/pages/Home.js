// --------------------3rd party imports
import styled from "@emotion/styled";
import { Box, Grid } from "@chakra-ui/react";

// --------------------local imports
//-----components
import Hero from "../components/home/Hero";
import MainPageSectionAbout from "../components/home/MainPageSectionAbout";
import MainpageServicesMenu from "../components/home/MainpageServicesMenu";
import SocialProof from "../components/SocialProof";
import Promo from "../components/Promo.js";
import MainpageCTABanner from "../components/home/MainpageCTABanner";
import MainPagePartnerBrands from "../components/home/MainPagePartnerBrands";
import FAQ from "../components/layout/FAQ";
import WhatsappForm from "../components/WhatsappForm";
import { beige, green } from "../assets/constants/constants";
//-----other files
import "../assets/fonts/fonts.css";
import { useEffect } from "react";
//-------------constants
const GridItem = styled.div`
  grid-column: 1 / 7;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
`;

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Box width="100%" overflow="hidden">
      <Grid
        width={"100vw"}
        // height="auto"
        gridTemplateColumns={"40% repeat(5, 1fr)"}
        gridAutoRows="auto"
      >
        <GridItem
          backgroundColor={`${green}`}
          // borderBottom={`1px solid `}
          color={`${beige}`}
        >
          <Hero />
        </GridItem>
        <GridItem
          backgroundColor={`${beige}`}
          color={`${green}`}
          borderBottom={`1px solid ${green}`}
        >
          <MainPageSectionAbout />
        </GridItem>
        <GridItem
          backgroundColor={`${beige}`}
          // border={"1px solid ${green}"}
          color={`${green}`}
        >
          <MainpageCTABanner />
        </GridItem>
        <GridItem
          backgroundColor={`${beige}`}
          border={`1px solid ${green}`}
          // borderBottom={"0px"}
          color={`${green}`}
        >
          <MainpageServicesMenu />
        </GridItem>

        <GridItem
          backgroundColor={`${beige}`}
          borderBottom={`2px solid ${green}`}
          borderTop="0px"
          color={`${green}`}
        >
          <Promo />
        </GridItem>
        <GridItem
          backgroundColor={`${beige}`}
          // border={"1px solid ${green}"}
          color={`${green}`}
        >
          <SocialProof />
        </GridItem>
        <GridItem
          backgroundColor={`${beige}`}
          // border={"1px solid ${green}"}
          color={`${green}`}
        >
          <MainPagePartnerBrands />
        </GridItem>
        <GridItem
          backgroundColor={`${green}`}
          // borderBottom={`0.5px solid ${beige}`}
          color={`${beige}`}
          gridAutoRows="100vh"
        >
          <WhatsappForm />
        </GridItem>
        <GridItem
          backgroundColor={`${green}`}
          // border={"0.5px solid blue"}
          color={`${beige}`}
        >
          <FAQ />
        </GridItem>
      </Grid>
    </Box>
  );
}
