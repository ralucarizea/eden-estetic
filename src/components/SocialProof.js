import React from "react";
import "../assets/constants/styles.css";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { useMediaQuery } from "@chakra-ui/react";
import { useSpringCarousel } from "react-spring-carousel";
import {
  // Box,
  Flex,
  Button,
  // Grid,
  // GridItem,
  // Text,
  Icon,
} from "@chakra-ui/react";

import { green, socialproofReviews } from "../assets/constants/constants";

import "../assets/fonts/fonts.css";
import SocialProofCard from "./SocialProofCard";

function SocialProof() {
  const [isMobile] = useMediaQuery("(max-width: 640px)");

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      initialActiveItem: 1,
      initialStartingPosition: "center",
      itemsPerSlide: isMobile ? 1.1 : 2.25,
      withLoop: true,
      // withThumbs: true,
      startEndGutter: 0
    ,
      enableFreeScrollDrag: true,
      items: socialproofReviews.map((review, index) => ({
        ...review,
        id: review.id,
        renderItem: (
          <SocialProofCard
            key={index}
            name={review.name}
            thumbnail={review.thumbnail}
            reviewText={review.reviewText}
            isMobile={isMobile}
          />
        ),
        // renderThumb: <CarouselThumb text={index}></CarouselThumb>,
      })),
    });

  return (
    <Flex
      height={"fit-content"}
      width="100%"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex
        pt={{
          base: "13vh",
          xs: "15vh",
          sm: "16vh",
          md: "17vh",
          lg: "18vh",
          xl: "20vh",
        }}
        mb={{
          base: "11vh",
          xs: "10vh",
          sm: "13vh",
          md: "13vh",
          lg: "12vh",
          xl: "11vh",
        }}
        height="fit-content"
        width="100%"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{
          base: "32px",
          xs: "35px",
          sm: "46px",
          md: "51px",
          lg: "59px",
          xl: "70px",
          "2xl": "58px",
        }}
        fontFamily={"RollgatesLuxury"}
      >
        Recenzii
      </Flex>
      <Flex position={"relative"} userSelect={"none"}>
        <Button
          onClick={slideToPrevItem}
          position="absolute"
          right={{ base: "14%", md: "13%", lg: "10%" }}
          top="-25%"
          zIndex={2}
          color={green}
          bg="none"
        >
          <Icon as={VscArrowLeft} width={{base: "20px", xs: "30px", md:"40px"}} height={{base: "18px", xs: "20px", md:"26px"}} />
        </Button>
        {carouselFragment}
        <Button
          color={green}
          bg="none"
          onClick={slideToNextItem}
          position="absolute"
          right={{ base: "1%", md: "4%", lg: "3%" }}
          top="-25%"
          zIndex={2}
        >
          <Icon as={VscArrowRight} width={{base: "20px", xs: "30px", md:"40px"}} height={{base: "18px", xs: "20px", md:"26px"}} />
        </Button>
      </Flex>
      
    </Flex>
  );
}
export default SocialProof;
