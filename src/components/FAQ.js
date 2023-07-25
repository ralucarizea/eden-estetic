//3rd party imports
import {React} from "react";

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
import "../assets/fonts/fonts.css";
import { Question } from "../assets/constants/styledcomponents";
//constants

const FAQ = () => {
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
    >
      {" "}
      <Box pb="36px" fontSize={"64px"} fontFamily={"RollgatesLuxury"}>
        Întrebari frecvent întâlnite
      </Box>
      <Box width="68%" alignItems={"center"}>
        {" "}
        <Accordion allowToggle>
          <AccordionItem py="16px">
            <h2>
              <AccordionButton px="0px">
                <Box as="span" flex="1" textAlign="left" fontSize={"20px"}>
                  Sunt recomandate tratamentele cosmetice avansate persoanelor
                  sub 30 ani?
                </Box>
                <AccordionIcon as={VscArrowRight} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem py="16px">
            <h2>
              <AccordionButton px="0px">
                <Box as="span" flex="100" textAlign="left" fontSize={"20px"}>
                  Cum aflu ce tip de tratament se potrivește tipului meu de ten?
                </Box>
                <AccordionIcon as={VscArrowRight}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py="16px">
            <h2>
              <AccordionButton px="0px">
                <Box as="span" flex="1" textAlign="left" fontSize={"20px"}>
                  Există riscuri în ceea ce privește tratamentele cosmetice
                  avansate? Dacă da, care sunt acestea?
                </Box>
                <AccordionIcon as={VscArrowRight}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py="16px">
            <h2>
              <AccordionButton px="0px">
                <Box as="span" flex="1" textAlign="left" fontSize={"20px"}>
                  Este normal să îmi simt tenul sensibilizat în urma aplicării
                  unui tratament?
                </Box>
                <AccordionIcon as={VscArrowRight}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py="16px">
            <h2>
              <AccordionButton px="0px">
                <Box as="span" flex="1" textAlign="left" fontSize={"20px"}>
                  Cum ar trebui să îngrijesc o zonă după efectuarea unui tatuaj?
                </Box>
                <AccordionIcon as={VscArrowRight}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
