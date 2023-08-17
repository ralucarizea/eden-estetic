import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import "../assets/fonts/fonts.css";
import { green, beige } from "../assets/constants/constants";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import EllipseContainer from "./EllipseContainer";

const CourseInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  padding: 48px 0px 0px 0px;
  margin-right: 168px;
`;
const CourseTitle = styled.h1`
  font-size: 18px;
  letter-spacing: -1px;
  font-weight: 600;
  font-family: "Montserrat";
  //   font-style: italic;
  padding-bottom: 12px;
`;
const CourseDescription = styled.div`
  text-align: left;
  font-size: 16px;
  letter-spacing: -1px;
  font-weight: 300;
  font-family: "Montserrat";
`;
const CoursesSubmenu = () => {
  return (
    <Grid
      mt="120px"
      height="auto"
      width="100%"
      columnGap={"24px"}
      //   rowGap="24px"
      //   backgroundColor="inherit"
      gridTemplateColumns={`repeat(6, 1fr)`}
      gridAutoRows={`auto`}
      //   overflowY={"hidden"}
    >
      <GridItem
        colSpan="6"
        // rowSpan="1"
        borderBottom={`0.5px solid ${green}`}
        background={beige}
      >
        <Flex
          flexDirection={"column"}
          justifyContent="space-between"
          alignItems={"center"}
          px="280px"
          pb="100px"
          letterSpacing={"-0.5px"}
        >
          <Flex py="10px">
            Îmbarcă-te într-o călătorie a excelenței la edenEstetic: dobândește
            abilități fundamentale în cosmetologie cu ajutorul meu și obține
            diplome recunoscute la nivel internațional și național,
            alăturându-te astfel unei comunități care pune preț pe excelență și
            inovație
          </Flex>
          Cu peste 15 ani de experiență în industria frumuseții și peste 6 ani
          ca expert trainer, misiunea mea este să pun la dispoziție cursanților
          mei toate instrumentele și cunoștințele mele practice pentru a-i ajuta
          să devină profesioniști ai frumuseții.
          <Text as="i" py="10px" fontWeight={"600"}>
            Aspirația ta este îndrumarea noastră - așa că te așteaptă o
            călătorie excepțională!
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan="6">
        <Flex background={beige} height="55vh">
          <Flex
            width="68%"
            border={`0.5px solid ${green}`}
            borderTop="0px"
            justifyContent={"space-between"}
          >
            <Box position="relative" width="350px" height="100%">
              <EllipseContainer
                width={"380"}
                height="220"
                backgroundColor={green}
                rotationDegrees={"-80"}
              />
            </Box>
            <CourseInfoBox>
              <CourseTitle>CURS PERMANENT MAKE-UP ULTRA</CourseTitle>
              <CourseDescription>
                Include 4 categorii distincte de tehnici: tehnica de
                micropigmentare a sprâncenelor folosind echipamentul Ombre
                Powder, tehnica microblading (tehnica manuală fir cu fir),
                tehnica de micropigmentare a pleoapelor & tehnica de
                micropigmentare a buzelor{" "}
              </CourseDescription>
            </CourseInfoBox>
          </Flex>
          <Flex width="32%" background={green}>
            {" "}
          </Flex>
        </Flex>
      </GridItem>
      <GridItem colSpan="6">
        <Flex background={beige} height="55vh" flexDirection="row-reverse">
          <Flex
            width="68%"
            border={`0.5px solid ${green}`}
            borderTop="0px"
          ></Flex>
          <Flex width="32%" background={green}></Flex>
        </Flex>
      </GridItem>
      <GridItem colSpan="6">
        <Flex background={beige} height="55vh">
          <Flex
            width="68%"
            border={`0.5px solid ${green}`}
            borderTop="0px"
            borderBottom={`0.5px solid ${beige}`}
          ></Flex>
          <Flex
            width="32%"
            background={green}
            borderBottom={`0.5px solid ${beige}`}
          ></Flex>
        </Flex>
      </GridItem>
      <GridItem gridColumn={"1/-1"}>
        <Footer
          primaryColor={`${green}`}
          secondaryColor={`${beige}`}
          primaryReversed={"#937569"}
        />{" "}
      </GridItem>
    </Grid>
  );
};
export default CoursesSubmenu;
