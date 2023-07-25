//3rd party imports
import { Box, Text } from "@chakra-ui/react";
import { React } from "react";
import styled from "@emotion/styled";
//local imports
import "../assets/fonts/fonts.css";
import {
  Persona,
  Name,
  ProfilePic,
  Caption,
} from "../assets/constants/styledcomponents";
// import portrait1 from "../assets/images/portrait1.jpg";
// import portrait2 from "../assets/images/portrait2.jpg";
// import portrait3 from "../assets/images/portrait3.jpg";
const portrait1 =
  "https://res.cloudinary.com/dgykbnubn/image/upload/v1690194169/edenestetic/mainpage-socialproof3_k9geji.jpg";
const portrait2 =
  "https://res.cloudinary.com/dgykbnubn/image/upload/v1690194169/edenestetic/mainpage-socialproof1_tq34cr.jpg";
const portrait3 =
  "https://res.cloudinary.com/dgykbnubn/image/upload/v1690194170/edenestetic/mainpage-socialproof2_dugreh.jpg";

function SocialProof() {
  return (
    <Box
      height={"120vh"}
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent=" space-between"
    >
      <Box
        height="50%"
        width="100%"
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"104px"} fontFamily={"RollgatesLuxury"}>
          Recenzii
        </Text>
      </Box>
      <Box
        height="auto"
        display="grid"
        gap="16px"
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"auto"}
        fontFamily={"Montserrat"}
        fontStyle={"normal"}
        fontWeight={"400"}
        letterSpacing={"-0.5px"}
      >
        <Persona>
          <Name>Maria Florentina</Name>
          <ProfilePic src={portrait1} />
          <Caption>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Caption>
        </Persona>
        <Persona>
          <Name>Andreea Teodorescu</Name>
          <ProfilePic src={portrait2} />
          <Caption>
            Tincidunt arcu non sodales neque sodales. Sed risus pretium quam
            vulputate dignissim suspendisse in est ante. Purus sit amet luctus
            venenatis lectus magna fringilla.
          </Caption>
        </Persona>
        <Persona>
          <Name>Ramona Popescu</Name>
          <ProfilePic src={portrait3} />
          <Caption>
            Ut tellus elementum sagittis vitae et. Duis ut diam quam nulla
            porttitor massa id.
          </Caption>
        </Persona>
      </Box>
      <Box height="12vh"></Box>
    </Box>
  );
}
export default SocialProof;
