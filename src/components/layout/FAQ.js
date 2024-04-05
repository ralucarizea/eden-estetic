//3rd party imports
import { React } from "react";

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";
//local imports
import "../../assets/fonts/fonts.css";
// import { Question } from "../assets/constants/styledcomponents";
import { green, faqMainpage, beige } from "../../assets/constants/constants";
//constants

const FAQ = ({ color = beige }) => {
  return (
    <Box
      height="fit-content"
      px={{ base: "28px", xs: "36px", sm: "48px", md: "64px" }}
      display={"flex"}
      flexDirection="column"
      // justifyContent={"space-evenly"}
      alignItems={"center"}
      fontFamily={"Montserrat"}
      color={color}
    >
      <Box
        pb={{base: "36px", sm: "48px", md: "56px", lg:"64px", xl: "72px"}}
        width={{base: "90%", md:"100%"}}
        textAlign={"center"}
        fontSize={{
          base: "31px",
          xs: "35px",
          sm: "39px",
          md: "46px",
          lg: "52px",
          xl: "64px",
          "2xl": "58px",
        }}
        lineHeight={{
          base: "33px",
          xs: "37px",
          sm: "46px",
          md: "48px",
          lg: "59px",
          xl: "70px",
          "2xl": "58px",
        }}
        fontFamily={"RollgatesLuxury"}
      >
        Întrebari frecvent întâlnite
      </Box>
      <Box width={{base: "84%%", md: "68%"}} alignItems={"center"}>
        <Accordion
          allowMultiple
          fontFamily="Montserrat"
          color={beige}
          borderColor={beige}
        >
          {faqMainpage.map((qa, index) => (
            <AccordionItem
              borderColor={color === beige ? "rgba(243,238,231, 0.6)" : green}
              transition="all 0.2s ease-in-out"
              py="16px"
              key={index}
              color={color}
              _hover={{
                bg: color === green ? green : beige,
                opacity: 0.8,
                color: color === beige ? green : beige,
              }}
            >
              <AccordionButton _hover={{}}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight="500"
                  fontSize={{
                    base: "14px",
                    sm: "15px",
                    lg: "17px",
                    xl: "18px",
                  }}
                >
                  {qa.question}
                </Box>
                <AccordionIcon as={VscArrowRight} />
              </AccordionButton>
              <AccordionPanel pb={4} fontSize={{
                    base: "13px",
                    sm: "14px",
                    lg: "15px",
                    xl: "16px",
                  }}>{qa.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
