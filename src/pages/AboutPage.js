import { Box, Flex, Text } from "@chakra-ui/react";
import {
  CaptionBox,
  CaptionHeading,
  CaptionText,
} from "../assets/constants/styledcomponents";

function AboutPage() {
  return (
    <>
      <Flex
        height="120vh"
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box width="52%" backgroundColor={"#f3eee7"} position="relative">
          <Box
            position="absolute"
            top="25%"
            left="38%"
            fontFamily={"RollgatesLuxury"}
            color="#937569"
            lineHeight={"124px"}
            fontSize={"140px"}
            mixBlendMode={"difference"}
          >
            <Text> Invata sa </Text>
            <Text pl="164px"> te iubesti</Text>
            <Text pl="244px">#farafiltru</Text>
          </Box>
        </Box>
        <Box
          width="48%"
          backgroundImage="linear-gradient(90deg, rgba(243,238,231,1) 3%, rgba(243,238,231,0.7497811624649859) 32%, rgba(108,138,150,0.6153273809523809) 48%, rgba(108,138,150,0.6909576330532212) 66%, rgba(108,138,150,1) 93%)"
          //   backgroundColor="rgb(108,138,150)"
        >
          <Box
            //   src={`${img}`}
            //   alt="" fit
            width="100%"
            height="100%"
            backgroundImage={`url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194165/edenestetic/aboutpage-heroimage_goinjh.jpg")`}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
          />
        </Box>
      </Flex>
      <Flex
        height="55vh"
        color="#f3eee7"
        backgroundColor={"#6c8a96"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems="center"
        px="48px"
        py="80px"
      >
        <Text
          py="40px"
          fontSize={"13px"}
          fontFamily={"Montserrat"}
          fontWeight={"200"}
          letterSpacing={"1px"}
        >
          {" "}
          MISIUNEA NOASTRĂ{" "}
        </Text>
        <Text
          width="45%"
          pb="40px"
          fontSize={"18px"}
          fontFamily={"Montserrat"}
          fontWeight={"400"}
          textAlign={"center"}
        >
          Lorem ipsum is a pseudo-Latin text used in web design, typography,
          layout, and printing in place of English to emphasise design elements
          over content. It's also called placeholder (or filler) text. It's a
          convenient tool for mock-ups. It helps to outline the visual elements
          of a document or presentation, eg typography, font, or layout
        </Text>
        {/* <Box width="30%" height="100%" >
          <Link to="/">
            <Logo alt="" width="100%" height="100%" viewBox="0 0 580 25" />
          </Link>
        </Box> */}
        <Box height="8vh" />
      </Flex>
      <Flex
        height="120vh"
        backgroundColor="#f3eee7"
        justifyContent={"space-evenly"}
        alignItems="center"
        py="120px"
        px="64px"
        color="#6c8a96"
      >
        <Box
          height={"100%"}
          width={"38%"}
          border="1px solid #6c8a96"
          backgroundImage={`url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194165/edenestetic/aboutpage-portrait_j6rvqt.png")`}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"top"}
        />
        <Flex
          height={"80%"}
          width={"25%"}
          flexDirection="column"
          justifyContent={"space-evenly"}
        >
          <Box>
            <Text
              //   pb="8px"
              fontSize={"24px"}
              fontFamily={"Montserrat"}
              fontWeight={"700"}
            >
              Mariana Vlădescu
            </Text>
            <Text
              fontSize={"15px"}
              fontStyle={"italic"}
              fontFamily={"Montserrat"}
              fontWeight={"400"}
            >
              Fondatoarea edenEstetic
            </Text>
          </Box>

          <Box
            width="85%"
            py="28px"
            fontSize={"14px"}
            fontFamily={"Montserrat"}
            fontWeight={"500"}
          >
            <Text pb="16px">
              It is widely believed that the history of Lorem Ipsum originates
              with Cicero in the 1st Century BC and his text De Finibus bonorum
              et malorum. This philosophical work was split into five books.
            </Text>
            <Text pb="16px">
              The Lorem Ipsum we know today is derived from the words of which
              had been altered, added and removed to make it nonsensical and
              improper Latin.
            </Text>
            <Text>
              It is not known exactly when the text gained its current
              traditional form. However references to the phrase "lorem ipsum"
              can be found in the 1914 Loeb Classical Library Edition of the De
              Finibus.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Box pt="64px" backgroundColor={"#f3eee7"} color="#6c8a96">
        <Flex
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          height="33vh"
          borderTop="1px solid #6c8a96"
          borderBottom="1px solid #6c8a96"
          fontFamily={"Montserrat"}
        >
          <CaptionBox>
            <CaptionHeading>Specializări</CaptionHeading>
            <CaptionText>
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but occasionally
              circumstances occur in which toil and pain can procure him some
              great pleasure
            </CaptionText>
          </CaptionBox>
          <CaptionBox>
            <CaptionHeading>Soluții personalizate</CaptionHeading>
            <CaptionText>
              Lorem Ipsum was reintroduced in the 1980s by the Aldus
              Corporation, a company that developed Desktop Publishing Software.
              Their most well known product PageMaker came with pre-installed
              graphics and word-processing templates containing a version of the
              faux latin language.
            </CaptionText>
          </CaptionBox>
          <CaptionBox>
            <CaptionHeading>Diplome & Premii</CaptionHeading>
            <CaptionText>
              It was in this edition of the De Finibus that H. Rackman
              translated the text.
            </CaptionText>
          </CaptionBox>
        </Flex>
      </Box>
    </>
  );
}
export default AboutPage;
