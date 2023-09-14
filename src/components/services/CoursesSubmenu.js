import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import "../../assets/fonts/fonts.css";
import { green, beige } from "../../assets/constants/constants";
import Footer from "../layout/Footer";
import styled from "@emotion/styled";
import EllipseContainer from "../ui/EllipseContainer";

const CourseInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  height: 68vh;
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  margin-bottom: 44px;
`;
const CourseTitle = styled.p`
  font-size: 28px;
  // letter-spacing: -1px;
  font-weight: 300;
  font-family: "RollgatesLuxury";
  //   font-style: italic;
  padding: 36px 12px;
`;
const CourseDescription = styled.div`
  padding: 0px 36px 12px;
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
      columnGap={"12px"}
      backgroundColor={beige}
      gridTemplateColumns={`repeat(12, 1fr)`}
      gridAutoRows={`auto`}
    >
      <GridItem
        colSpan="12"
        // rowSpan="1"
        // borderBottom={`0.5px solid ${green}`}
        background={beige}
        pb={16}
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
      <GridItem colSpan={4} pl={20}>
        <CourseInfoBox bg={green} color={beige}>
          <CourseTitle>
            Curs <Text as="i"> Full Lips</Text>
          </CourseTitle>
          <CourseDescription>
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </CourseDescription>
        </CourseInfoBox>
      </GridItem>
      <GridItem colSpan={4} px={10}>
        <CourseInfoBox border={`0.5px solid ${green}`} bg={beige} color={green}>
          <CourseTitle>
            Curs <Text as="i"> Permanent Makeup ULTRA</Text>{" "}
          </CourseTitle>
          <CourseDescription>
            {" "}
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </CourseDescription>
        </CourseInfoBox>
      </GridItem>
      <GridItem colSpan={4} pr={20}>
        <CourseInfoBox bg={green} color={beige}>
          <CourseTitle>
            Curs <Text as="i"> Brow Magic</Text>{" "}
          </CourseTitle>
          <CourseDescription>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </CourseDescription>
        </CourseInfoBox>
      </GridItem>
      {/* <GridItem colSpan="6">
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
      </GridItem> */}
    </Grid>
  );
};
export default CoursesSubmenu;
