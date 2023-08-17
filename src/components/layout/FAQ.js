//3rd party imports
import { React } from "react";

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  background,
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
      height="120vh"
      py="100px"
      px="64px"
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-evenly"}
      alignItems={"center"}
      fontFamily={"Montserrat"}
      color={color}
    >
      {/* {faqMainpage.map(qa => )} */}
      <Box pb="36px" fontSize={"64px"} fontFamily={"RollgatesLuxury"}>
        Întrebari frecvent întâlnite
      </Box>
      <Box width="68%" alignItems={"center"}>
        <Accordion
          allowMultiple
          fontFamily="Montserrat"
          color={beige}
          borderColor={beige}
        >
          {faqMainpage.map((qa, index) => (
            <AccordionItem
              borderColor={color === beige ? "rgba(243,238,231, 0.6)" : green }
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
                <Box as="span" flex="1" textAlign="left" fontSize={"18px"}>
                  {qa.question}
                </Box>
                <AccordionIcon as={VscArrowRight} />
              </AccordionButton>
              <AccordionPanel pb={4}>{qa.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

      </Box>
    </Box>
  );
};

export default FAQ;
