import { Box, Flex, Text } from "@chakra-ui/react";
import {
  CaptionBox,
  CaptionHeading,
  CaptionText,
} from "../assets/constants/styledcomponents";
import { beige, green } from "../assets/constants/constants";

function AboutPage() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>
      <Flex
        height={{ base: "80vh", sm: "70vh", md: "90vh", lg: "110vh" }}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box width="50.5%" backgroundColor={beige} position="relative">
          <Flex
            h="100%"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems="flex-end"
            // position="absolute"
            // top="23%"
            fontFamily={"RollgatesLuxury"}
            color="#937569"
            lineHeight={{
              base: "24px",
              xs: "34px",
              sm: "54px",
              md: "80px",
              lg: "100px",
              xl: "124px",
            }}
            fontSize={{
              base: "36px",
              xs: "44px",
              sm: "64px",
              md: "90px",
              lg: "120px",
              xl: "140px",
            }}
            mixBlendMode={"difference"}
          >
            <Text mr={{ base: "", xs: "", sm: "", md: "", lg: "-8%", xl: "0" }}>
              {" "}
              Invata sa{" "}
            </Text>
            <Text
              mr={{ base: "", xs: "", sm: "", md: "", lg: "-60%", xl: "0" }}
            >
              {" "}
              te iubesti
            </Text>
            <Text mr={{ base: "", xs: "", sm: "", md: "", lg: "-8%", xl: "0" }}>
              #farafiltru
            </Text>
          </Flex>{" "}
        </Box>
        <Box
          width="49.5%"
          backgroundImage="linear-gradient(90deg, rgba(243,238,231,1) 3%, rgba(243,238,231,0.7497811624649859) 32%, rgba(108,138,150,0.6153273809523809) 48%, rgba(108,138,150,0.6909576330532212) 66%, rgba(108,138,150,1) 93%)"
          // position="absolute"
          // zIndex="3"
        >
          <Box
            // position={"absolute"}
            // zIndex={"2"}
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
        height="fit-content"
        color={beige}
        backgroundColor={green}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems="center"
        px="48px"
        py={{base: "40px", xs: "80px"}}
      >
        <Text
          py={{base: "24px", xs: "36px", md:"40px"}}
          fontSize={{ base: "11px", md: "12px", xl: "13px" }}
          fontFamily={"Montserrat"}
          fontWeight={"200"}
          letterSpacing={"1px"}
        >
          MISIUNEA NOASTRĂ
        </Text>
        <Text
          width={{ base: "85%", xs: "75%", sm: "70%", md: "60%", lg: "45%" }}
          fontSize={{ base: "13px", sm: "15px", md: "16px", lg: "17px", xl: "18px" }}
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
      </Flex>
      <Flex
        bg={beige}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        h="100vh"
        minW="100%"
        py={{ base: "15%", sm: "5%" }}
      >
        <Flex
          bg="red"
          h={{ base: "105%", sm: "68%", md: "85%", xl: "95%" }}
          maxH={{ base: "390px", sm: "500px", md: "600px", xl: "620px" }}
          w={{ base: "80%", sm: "48%", md: "45%", xl: "35%" }}
          maxWidth={{ base: "280px", sm: "350px", lg: "450px", xl: "500px" }}
          mr={{ base: "0%", sm: "5%" }}
        ></Flex>
        <Flex
          bg="purple"
          h={{ base: "80%", sm: "60%", md: "75%", xl: "80%" }}
          w={{ base: "50%", xs:"40%",  sm: "40%", md: "35%", lg: "30%", xl: "23%" }}
          minW={{ base: "230px", md: "300px", lg: "300px", xl: "" }}
        ></Flex>
      </Flex>
      {/* <Box width="30%" height="100%" >
          <Link to="/"> 
            <Logo alt="" width="100%" height="100%" viewBox="0 0 580 25" />
          </Link>
        </Box> */}
      {/* <Flex
       
        backgroundColor={beige}
  
        flexDirection={{base: "column", sm: "row"}}
      >
        <Box
          height={"100%"}
          width={"100%"}
          border={`1px solid ${green}`}
          // backgroundImage={`url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194165/edenestetic/aboutpage-portrait_j6rvqt.png")`}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"top"}
        />
        <Flex
          height={{base: "100%", md:"80%"}}
          width={{ base: "100%", sm: "35%", md: "30%", lg: "25%" }}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          border="1px solid red"
        >
          <Box border="1px solid green">
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
              fontWeight={"700"}
            >
              Mariana Vlădescu
            </Text>
            <Text
              fontSize={{ base: "13px", sm: "14px", md: "15.5px", lg: "16px" }}
              fontStyle={"italic"}
              fontFamily={"Montserrat"}
              fontWeight={"400"}
            >
              Fondatoarea edenEstetic
            </Text>
          </Box>
          <Box
            width={{base: "100%", sm: "85%"}}
            py={{base: "10px", sm: "28px"}}
            fontSize={{ base: "13px", sm: "16px", md: "17px", lg: "18px" }}
            fontFamily={"Montserrat"}
            fontWeight={"500"}
            border="1px solid purple"

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
      </Flex> */}
      <Box pt="64px" backgroundColor={beige} color={green}>
        <Flex
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          height="33vh"
          borderTop={`1px solid ${green}`}
          borderBottom={`1px solid ${green}`}
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
