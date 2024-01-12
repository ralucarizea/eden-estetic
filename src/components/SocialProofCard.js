import React from "react";
import { ProfilePic } from "../assets/constants/styledcomponents";
import "../assets/fonts/fonts.css";
import styled from "@emotion/styled";
import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { green } from "../assets/constants/constants";

export default function SocialProofCard({
  isMobile,
  name,
  thumbnail,
  reviewText,
}) {
  const Persona = styled(VStack)`
    border-radius: ${(props) => props.borderRadius};
    min-height: fit-content;
    height: ${(props) => props.height};
    // width: ${(props) => props.width};
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    opacity: 0.76;
    width: ${isMobile ? "80%" : ""};
    padding: 2.5vw 2.65vw;
    @media only screen and (max-width:900px) {
      padding: 18px 16px;
    }
    @media only screen and (max-width:640px) {
      margin-left: 36px;
    }
  `;

  const Name = styled(Box)`
    font-family: "RollgatesLuxury";
    width: fit-content;
    text-align: left;
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    // line-height: 1.1em;
  `;

  const Caption = styled(Flex)`
    height: 100%;
    line-height: 1.25em;
    margin-top: 12px;
    font-family: "Montserrat";
    font-weight: 400;
    align-items: flex-start;
    z-index: 3;
    width: 88%;
    font-size: ${(props) => props.fontSize};
  `;
  return (
    <Persona
      border="1px solid"
      borderColor={green}
      color={green}
      // height={{ base: "40vh", sm: "40vh", md: "39vh", lg: "36vh", xl: "38vh" }}
      width={{
        base: "60vw",
        sm: "43vw",
        md: "43vw",
        lg: "40vw",
        xl: "38vw",
      }}
    >
      <HStack
        w="100%"
        justifyContent={"space-between"}
        alignSelf="flex-start"
        mb="1.75vw"
        mt="1.5vw"
      >
        <Name
          fontSize={{ base: "25px", sm: "25px", md: "28px", xl: "30px" }}
          lineHeight={{ base: "23px", sm: "20px", md: "24px", xl: "26px" }}
        >
          {name}
        </Name>
        <ProfilePic src={thumbnail} />
      </HStack>

      <Caption
        fontSize={{
          base: "13px",
          sm: "14px",
          md: "16px",
          lg: "15px",
          xl: "16.5px",
        }}
      >
        {reviewText}
      </Caption>
    </Persona>
  );
}
