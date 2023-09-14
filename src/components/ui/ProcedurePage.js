import {
  Box,
  Flex,
  Text,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../src/assets/constants/data.json";
import { green, beige } from "../../assets/constants/constants";
import { ProductPageImageContainer } from "../../assets/constants/styledcomponents";
// import ButtonEllipse from "./ButtonEllipse";
export default function ProcedurePage() {
  const [procedure, setProcedure] = useState({});
  const { procedureId } = useParams();
  console.debug("slo");
  useEffect(() => {
    const procedures = data.services.procedures;
    setProcedure(procedures.find((procedure) => procedure.ID === procedureId));
  }, []);
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
        <ProductPageImageContainer backgroundColor={procedure.images?.display}>
          ewtwevtbw
        </ProductPageImageContainer>
        <ProductPageImageContainer backgroundColor={procedure.images?.display}>
          ewtwevtbw
        </ProductPageImageContainer>
        <ProductPageImageContainer backgroundColor={procedure.images?.display}>
          ewtwevtbw
        </ProductPageImageContainer>
        <ProductPageImageContainer backgroundColor={procedure.images?.display}>
          ewtwevtbw
        </ProductPageImageContainer>
      </Flex>
      <Flex
        flexDirection="column"
        pl="3vw"
        pt="3vh"
        mb="3vh"
        width={"55%"}
        borderLeft={`1px solid ${green}`}
        height="60%"
        // backgroundColor={"red"}
        position={"sticky"}
        top={"0"}
        fontFamily={"Montserrat"}
      >
        {" "}
        <Text
          width="90%"
          height="auto"
          mt="2vh"
          ml="-4px"
          fontSize={"64px"}
          fontFamily={"RollgatesLuxury"}
          lineHeight={"58px"}
        >
          {" "}
          {procedure.name + " " + procedure.nickname}
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
          <Box>{procedure.price} RON </Box>
          <Box
            height="3px"
            width="3px"
            borderRadius={"50%"}
            backgroundColor={green}
            mx="8px"
          />
          <Box>{procedure.time} MIN</Box>
        </Flex>
        <Box
          width="85%"
          mt="3vh"
          mb="6vh"
          fontSize={"18px"}
          fontWeight="400"
          lineHeight={"30px"}
          letterSpacing={"-0.5px"}
        >
          {procedure.description}
        </Box>
        <Button
          backgroundColor={green}
          color={beige}
          // fontFamily={"RollgatesLuxury"}
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
        <Tabs mt="3vh" width="84%">
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
            // color={beige}
            // backgroundColor={green}
          >
            <TabPanel>{procedure.bulletFacts}</TabPanel>
            <TabPanel>{procedure.cosmeticConcernCategory}</TabPanel>
            <TabPanel>
              {procedure.activeIngredients
                ? procedure.activeIngredients
                : "Intreaba specialistul pentru mai multe detalii"}
            </TabPanel>
            <TabPanel>
              {procedure.aftercare
                ? procedure.aftercare
                : "Evită expunerea directă la radiații pentru aprox. 5-7 zile. Înainte de culcare, aplică o cremă intens hidratantă potrivită tipului tău de ten. Pe timpul zilei, se recomandă aplicarea unei loțiuni cu factor ridicat de protecție."}
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <Flex
          flexDirection={"column"}
          borderTop={`1px solid ${green}`}
          mt="6vh"
          width="90%"
          fontWeight={"600"}
          fontSize="20px"
        >
          <Text my="24px">Proprietăți & beneficii:</Text>
          {procedure.bulletFacts?.map((fact) => (
            <Box
              ml="8px"
              width="100%"
              py="4px"
              fontWeight={"300"}
              fontSize="16px"
            >
              {fact}
            </Box>
          ))}
        </Flex> */}
      </Flex>
    </Flex>
  );
}
