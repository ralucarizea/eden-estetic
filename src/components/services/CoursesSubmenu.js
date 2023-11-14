import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import "../../assets/fonts/fonts.css";
import { green, beige } from "../../assets/constants/constants";
import styled from "@emotion/styled";

const CourseInfoBox = styled.div`
  min-height: 55vh;
  height: fit-content;
  min-width: 300px;
  max-width: 25vw;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    // transform: rotate(-2deg);
    background-color: ${(props) => props.bg};
    color: ${beige};
  }
`;

const CourseTitle = styled.p`
  font-size: calc(32px + 0.765vw);
  line-height: 36px;
  font-weight: 300;
  font-family: "RollgatesLuxury";
  padding: 36px;
  padding-top: 72px;
`;
const CourseDescription = styled.div`
  padding: 2vh 36px 12px;
  text-align: center;
  letter-spacing: -0.5px;
  font-weight: 300;
  font-family: "Montserrat";
  font-size: calc(14px + 0.080625vw);
`;
const CourseTags = styled.div`
  align-self: center;
  width: 90%;
  // background-color: green;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 22%;
  border-top: 1px solid #cad5d9;
  padding-top: 4%;
  margin-bottom: 6%;
`;
const Tag = styled.div`
  min-width: fit-content;
  padding: 2px 6px;
  background-color: #cad5d9;
  color: #4f666f;
  font-size: calc(10px + 0.190625vw);
  letter-spacing: -0.5px;
  font-weight: 400;
  font-family: "Montserrat";
  margin: 2px 4px;
`;
const HandwrittenTitle = styled(Box)`
  position: absolute;
  top: 11%;
  right: 30%;
  left: 0px;
  font-family: "TheReason";
  font-size: calc(48px + 1.590625vw);
  opacity: 0.45;
`;

const StyledFlex = styled(Flex)`
  &:hover {
    .courseInfoBox {
      opacity: 0.3;
    }
  }

  && .courseInfoBox:hover {
    opacity: 1;
    box-shadow:
      0 12px 36px rgba(0, 0, 0, 0.2),
      0 15px 12px rgba(0, 0, 0, 0.1);
  }
`;
const CoursesSubmenu = () => {
  return (
    <Flex
      my="120px"
      height="auto"
      width="100%"
      backgroundColor={beige}
      color={green}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Flex
        width="100%"
        flexDirection={"column"}
        justifyContent="space-between"
        alignItems={"center"}
        px="16vw"
        pb="calc(70px + 3vw)"
        letterSpacing={"-0.5px"}
        fontSize={"calc(15px + 0.090625vw)"}
      >
        <Text pb="1.5vw">
          Îmbarcă-te într-o călătorie a excelenței la edenEstetic: dobândește
          abilități fundamentale în cosmetologie cu ajutorul meu și obține
          diplome recunoscute la nivel internațional și național, alăturându-te
          astfel unei comunități care pune preț pe excelență și inovație.
        </Text>
        <Text px="5vw">
          {" "}
          Cu peste 15 ani de experiență în industria frumuseții și peste 6 ani
          ca expert trainer, misiunea mea este să pun la dispoziție cursanților
          mei toate instrumentele și cunoștințele mele practice pentru a-i ajuta
          să devină profesioniști ai frumuseții.
        </Text>
        <Text as="i" py="3vh" px="5vw" fontWeight={"600"}>
          Aspirația ta este motivația noastră - așa că îți promitem o călătorie
          excepțională!
        </Text>
      </Flex>
      <StyledFlex
        width="80%"
        height="fit-content"
        alignContent={"center"}
        justifyContent={"space-evenly"}
        color={green}
        wrap="wrap"
        // backgroundColor={"red"}
      >
        <CourseInfoBox
          border={`0.5px solid ${green}`}
          bg={"#A2B5BD"}
          className="courseInfoBox"
          position="relative"
        >
          <CourseTitle>
            <HandwrittenTitle>Curs</HandwrittenTitle>
            <Box position="absolute" top="19%" right="0px" left="11%">
              {" "}
              Full Lips{" "}
            </Box>{" "}
          </CourseTitle>
          <Flex minHeight={"25vh"} alignItems={"center"}>
            <CourseDescription>
              {" "}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </CourseDescription>
          </Flex>

          <CourseTags>
            {" "}
            <Tag>Kit inclus</Tag>
            <Tag>Diplomă recunoscută internațional</Tag>
            <Tag>24 noiembrie 2023</Tag>
            <Tag>Locuri limitate</Tag>
          </CourseTags>
        </CourseInfoBox>
        <CourseInfoBox
          border={`0.5px solid ${green}`}
          bg={"#A2B5BD"}
          position="relative"
          className="courseInfoBox"
        >
          <CourseTitle>
            <HandwrittenTitle>Curs</HandwrittenTitle>
            <Box position="absolute" top="19%" right="0px" left="22%">
              {" "}
              PMU ULTRA{" "}
            </Box>{" "}
          </CourseTitle>
          <Flex minHeight={"25vh"} alignItems={"center"}>
            <CourseDescription>
              {" "}
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </CourseDescription>
          </Flex>

          <CourseTags>
            <Tag>Kit inclus</Tag>
            <Tag>Diplomă recunoscută internațional</Tag>
            <Tag>24 noiembrie 2023</Tag>
            <Tag>Locuri limitate</Tag>
            {/* </Flex> */}
          </CourseTags>
        </CourseInfoBox>
        <CourseInfoBox
          border={`0.5px solid ${green}`}
          bg={"#A2B5BD"}
          position="relative"
          className="courseInfoBox"
        >
          <CourseTitle>
            <HandwrittenTitle>Curs</HandwrittenTitle>
            <Box position="absolute" top="18%" right="0px" left="15%">
              {" "}
              Brow Magic{" "}
            </Box>{" "}
          </CourseTitle>
          <Flex minHeight={"25vh"} alignItems={"center"}>
            <CourseDescription>
              {" "}
              Curs destinat începătorilor fără experiență. Include tehnica de
              micropigmentare a sprâncenelor folosind aparatul Ombre Powder,
              precum și tehnica microblading (fir cu fir).
            </CourseDescription>
          </Flex>
          <CourseTags>
            {" "}
            <Tag>Kit inclus</Tag>
            <Tag>Diplomă recunoscută internațional</Tag>
            <Tag>24 noiembrie 2023</Tag>
            <Tag>Locuri limitate</Tag>
          </CourseTags>
        </CourseInfoBox>
      </StyledFlex>
    </Flex>
  );
};
export default CoursesSubmenu;
