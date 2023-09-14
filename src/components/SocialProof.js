import React from "react";
import "../assets/constants/styles.css";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { StyledSliderButton } from "../assets/constants/styledcomponents";
import { useSpringCarousel } from "react-spring-carousel";
import {
  // Box,
  Button,
  Flex,
  // Grid,
  // GridItem,
  // Text,
  Icon,
} from "@chakra-ui/react";

import { green, socialproofReviews } from "../assets/constants/constants";
import {
  Persona,
  Name,
  ProfilePic,
  Caption,
} from "../assets/constants/styledcomponents";
import "../assets/fonts/fonts.css";
import SocialProofCard from "./SocialProofCard";
import CarouselThumb from "./ui/CarouselThumb";

function SocialProof() {
  const {
    carouselFragment,
    // thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    initialActiveItem: 1,
    initialStartingPosition: "center",
    itemsPerSlide: 3,
    withLoop: true,
    // withThumbs: true,
    startEndGutter: 16,
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
        />
      ),
      // renderThumb: <CarouselThumb text={index}></CarouselThumb>,
    })),
  });
  return (
    <Flex
      height={"100vh"}
      width="100%"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex
        pt="20vh"
        pb="10vh"
        height="50%"
        width="100%"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"104px"}
        fontFamily={"RollgatesLuxury"}
      >
        Recenzii
      </Flex>
      <Flex position={"relative"} userSelect={"none"}>
        <StyledSliderButton
          onClick={slideToPrevItem}
          position="absolute"
          right="8%"
          top="-12%"
          zIndex={2}
        >
          <Icon as={VscArrowLeft} width="40px" height="26px" />
        </StyledSliderButton>
        {carouselFragment}
        <StyledSliderButton
          onClick={slideToNextItem}
          position="absolute"
          right="3%"
          top="-12%"
          zIndex={2}
        >
          <Icon as={VscArrowRight} width="40px" height="26px" />
        </StyledSliderButton>
      </Flex>
      {/* <Flex
        pt="36px"
        width="100%"
        justifyItems={"center"}
        alignItems={"center"}
      >
        {thumbsFragment}
        {console.log(typeof thumbsFragment)}
      </Flex> */}
    </Flex>
  );
}
export default SocialProof;
