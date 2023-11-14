import {
  Box,
  Flex,
  Text,
  Button,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../src/assets/constants/data.json";
import { green, beige, translatedTags } from "../../assets/constants/constants";
import { ProductPageImageContainer } from "../../assets/constants/styledcomponents";
import { PiPlusThin } from "react-icons/pi";
import styled from "@emotion/styled";

export const StyledAccordionItem = styled(AccordionItem)`
  transition: all 0.1s ease-in-out;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${green};
  border-top: 0.5px solid ${green};
  &:hover {
    background-color: #e9e4de;
  }
  &:last-child {
    border-bottom: 0.5px solid ${green};
  }
`;
export const StyledAccordionButton = styled(AccordionButton)`
  padding-left: 8px;
  padding-right: 8px;
  &:hover {
    background-color: transparent;
  }
`;

export default function ProcedurePage() {
  const [procedure, setProcedure] = useState({});
  const { procedureId } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [procedure]);

  useEffect(() => {
    const procedures = data.services.procedures;
    setProcedure(procedures.find((procedure) => procedure?.ID === procedureId));
  }, [procedureId]);

  return (
    <Flex
      backgroundColor={beige}
      height="fit-content"
      width="100%"
      pt="15vh"
      color={green}
      position={"relative"}
    >
      <Flex
        flexDirection="column"
        width="45%"
        height="fit-content"
        px="3vw"
        pt="5vh"
        justifyContent={"space-evenly"}
      >
        <ProductPageImageContainer
          backgroundColor={procedure?.images?.display}
        ></ProductPageImageContainer>
        <ProductPageImageContainer
          backgroundColor={procedure?.images?.display}
        ></ProductPageImageContainer>
        <ProductPageImageContainer
          backgroundColor={procedure?.images?.display}
        ></ProductPageImageContainer>
        <ProductPageImageContainer
          backgroundColor={procedure?.images?.display}
        ></ProductPageImageContainer>
      </Flex>
      <Flex
        flexDirection="column"
        pl="3vw"
        pt="3vh"
        mb="3vh"
        width={"55%"}
        borderLeft={`1px solid ${green}`}
        height="60%"
        position={"sticky"}
        top={"0"}
        fontFamily={"Montserrat"}
      >
        {" "}
        <Text
          width="98%"
          height="auto"
          mt="2vh"
          ml="-4px"
          fontSize={"48px"}
          fontFamily={"RollgatesLuxury"}
          lineHeight={"44px"}
        >
          {" "}
          {procedure?.name + " " + procedure?.nickname}
        </Text>
        <Flex
          my="3vh"
          fontSize={"16px"}
          fontWeight="300"
          letterSpacing={"0.5px"}
          alignItems={"center"}
          // border={`1px solid ${green}`}
          width="fit-content"
        >
          <Box>{procedure?.price} RON </Box>
          <Box
            height="3px"
            width="3px"
            borderRadius={"50%"}
            backgroundColor={green}
            mx="8px"
          />
          <Box>{procedure?.time} MIN</Box>
        </Flex>
        <Box
          width="85%"
          mt="3vh"
          mb="6vh"
          fontSize={"16.5px"}
          fontWeight="400"
          lineHeight={"30px"}
          letterSpacing={"-0.5px"}
        >
          {procedure?.description}
        </Box>
        <Button
          backgroundColor={green}
          color={beige}
          border={`1px solid ${green}`}
          my="3vh"
          width="fit-content"
          height="3rem"
          fontSize={"16px"}
          fontWeight={"300"}
          borderRadius={0}
          _hover={{
            backgroundColor: beige,
            color: green,
            border: `1px solid ${green}`,
          }}
        >
          {" "}
          Programează-te acum{" "}
        </Button>
        <Box mt="3vh" width="94%">
          <Accordion allowMultiple color={beige} fontSize={"13px"}>
            <StyledAccordionItem>
              <StyledAccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"15px"}>
                  Acțiune locală
                </Box>
                <AccordionIcon as={PiPlusThin} width="21px" height="21px" />
              </StyledAccordionButton>
              <AccordionPanel pb={4}>
                {procedure?.bulletFacts?.map((fact) => (
                  <Flex alignItems={"center"}>
                    <Box
                      height="4px"
                      width="4px"
                      borderRadius={"50%"}
                      backgroundColor={green}
                      mr="8px"
                    />
                    <Box my="4px">{fact}</Box>
                  </Flex>
                ))}
              </AccordionPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
              <StyledAccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"15px"}>
                  Ce probleme cosmetice ameliorează
                </Box>
                <AccordionIcon as={PiPlusThin} width="21px" height="21px" />
              </StyledAccordionButton>
              <AccordionPanel pb={4}>
                {procedure?.cosmeticConcernCategory?.map((fact) => (
                  <Flex alignItems={"center"}>
                    <Box
                      height="4px"
                      width="4px"
                      borderRadius={"50%"}
                      backgroundColor={green}
                      mr="8px"
                    />
                    <Box my="4px">{translatedTags[fact].translation}</Box>
                  </Flex>
                ))}
              </AccordionPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
              <StyledAccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"15px"}>
                  Substanțe active
                </Box>
                <AccordionIcon as={PiPlusThin} width="21px" height="21px" />
              </StyledAccordionButton>
              <AccordionPanel pb={4}>
                {procedure?.activeIngredients?.map((fact) => (
                  <Flex alignItems={"center"}>
                    <Box
                      height="4px"
                      width="4px"
                      borderRadius={"50%"}
                      backgroundColor={green}
                      mr="8px"
                    />
                    <Box my="4px">{fact}</Box>
                  </Flex>
                ))}
              </AccordionPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
              <StyledAccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"15px"}>
                  Îngrijire post-tratament
                </Box>
                <AccordionIcon as={PiPlusThin} width="21px" height="21px" />
              </StyledAccordionButton>
              <AccordionPanel pb={4}>{procedure?.aftercare}</AccordionPanel>
            </StyledAccordionItem>
          </Accordion>
        </Box>
        {/* <Tabs>
          <TabList borderBottom="0.5px solid beige">
            <Tab
              fontSize={"13px"}
              _selected={{
                borderBottom: `0.5px solid ${green}`,
                backgroundColor: green,
                color: beige,
              }}
              px="8px"
              mr="4px"
            >
              Acțiune locală
            </Tab>
            <Tab
              fontSize={"13px"}
              _selected={{
                borderBottom: `0.5px solid ${green}`,
                backgroundColor: green,
                color: beige,
              }}
              px="8px"
              mr="4px"
            >
              Cui i se adresează
            </Tab>
            {/* <Tab
              fontSize={"13px"}
              _selected={{
                borderBottom: `0.5px solid ${green}`,
                backgroundColor: green,
                color: beige,
              }}
              px="8px"
              mr="4px"
            >
              Substanțe active
            </Tab>
            <Tab
              fontSize={"13px"}
              _selected={{
                borderBottom: `0.5px solid ${green}`,
                backgroundColor: green,
                color: beige,
              }}
              px="8px"
              mr="4px"
            >
              Îngrijire post-tratament
            </Tab>
          </TabList>
          <TabPanels
            fontSize={"15px"}
            border={`0.5px solid ${green}`}
            minHeight="25vh"
            // backgroundColor={"green"}
          >
            <TabPanel fontSize={"13px"} pl="8px" pt="16px"></TabPanel>
            <TabPanel>{procedure?.cosmeticConcernCategory}</TabPanel>
            {/* <TabPanel>
              {procedure?.activeIngredients
                ? procedure?.activeIngredients
                : "Intreaba specialistul pentru mai multe detalii"}
            </TabPanel>
            <TabPanel>
              {procedure?.aftercare
                ? procedure?.aftercare
                : "Evită expunerea directă la radiații pentru aprox. 5-7 zile. Înainte de culcare, aplică o cremă intens hidratantă potrivită tipului tău de ten. Pe timpul zilei, se recomandă aplicarea unei loțiuni cu factor ridicat de protecție."}
            </TabPanel> 
            </TabPanels> 
        </Tabs> */}
      </Flex>
    </Flex>
  );
}
