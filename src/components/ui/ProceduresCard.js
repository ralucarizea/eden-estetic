import { Box, Divider, Flex, Text, HStack, Button } from "@chakra-ui/react";
import "../../assets/fonts/fonts.css";
// import { beige, green, translatedTags } from "../../assets/constants/constants";
import { motion } from "framer-motion";
import { useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import StyledIcon from "../../assets/icons/StyledIcon.js";

function convertToIconFormat(word) {
  if (word)
    return (
      word.replace(/(?:^|-)([a-z])/g, (_, letter) => letter.toUpperCase()) +
      "Icon"
    );
  else return null;
}

const MotionBox = motion(Box);
// const gradient = " linear-gradient(0deg, rgba(47,47,47,0.9087775735294118) 13%, rgba(212,206,191,0) 53%);";
const gradient = " rgba(255,255 , 255, 0)";
export default function ProceduresCard({ procedure }) {
  const [hover, setHover] = useState(false);

  function hexToRgbToTextColor(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      let R = parseInt(result[1], 16);
      let G = parseInt(result[2], 16);
      let B = parseInt(result[3], 16);

      // Calculate the opposite color by subtracting each component from 255
      let oppositeR = 255 - R;
      let oppositeG = 255 - G;
      let oppositeB = 255 - B;

      return `rgb(${oppositeR}, ${oppositeG}, ${oppositeB})`;
    } else {
      return null;
    }
  }

  return (
    <Flex
      height="16rem"
      flexDirection={"column"}
      position="relative"
      alignItems={"flex-end"}
      justifyContent={"flex-end"}
      color={`${hexToRgbToTextColor(procedure.images.display)}`}
      backgroundColor={procedure.images.display}
    >
      <Flex
        flexDirection="row"
        color={procedure.images.text}
        border="1px"
        height="100%"
        width="100%"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box
          backgroundColor={procedure.images.display}
          alt="Procedure Display"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left",
          }}
        />
        {hover ? (
          <MotionBox
            height="100%"
            width="100%"
            zIndex="10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            sx={{}}
          >
            <Flex
              width="100%"
              height="100%"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              p="24px"
              fontFamily={"Montserrat"}
              fontSize={"11px"}
              fontWeight={"600"}
              letterSpacing={"-0.5px"}
            >
              <Flex
                width="68%"
                justifyContent={"space-between"}
                alignItems={"center"}
                background={"transparent"}
                py="4px"
                borderTop={`1px solid ${hexToRgbToTextColor(
                  procedure.images.display
                )}`}
              >
                <Box>ZONĂ TRATAMENT</Box>
                <HStack spacing="6px">
                  {procedure.treatmentAreaCategory?.map((area) => (
                    <StyledIcon
                      definition={convertToIconFormat(area)}
                      fillColor={`${hexToRgbToTextColor(
                        procedure.images.display
                      )}`}
                    />
                  ))}
                </HStack>
              </Flex>
              {procedure.desiredResultCategory?.length ? (
                <Flex
                  width="68%"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  background={"transparent"}
                  borderTop={`1px solid ${hexToRgbToTextColor(
                    procedure.images.display
                  )}`}
                  py="4px"
                >
                  <Box>EFECTUL VIZIBIL</Box>
                  <HStack spacing="6px">
                    {procedure.desiredResultCategory?.map((effect) => (
                      <StyledIcon definition={convertToIconFormat(effect)} />
                    ))}
                  </HStack>
                </Flex>
              ) : null}
              <Flex
                width="68%"
                height="auto"
                justifyContent={"center"}
                pr="4px"
                mt="24px"
              >
                <Button
                  color="inherit"
                  width="auto"
                  background={procedure.images.display}
                  fontSize={"10px"}
                  borderRadius={"0px"}
                  border={`1px solid ${hexToRgbToTextColor(
                    procedure.images.display
                  )}`}
                >
                  Citeste mai multe
                </Button>
              </Flex>
            </Flex>
          </MotionBox>
        ) : (
          <>
            <MotionBox
              height="100%"
              width="100%"
              position="absolute"
              zIndex="10"
              sx={{
                background: gradient,
              }}
            />
            <Flex
              justifyContent={"space-between"}
              alignItems={"flex-end"}
              px="12px"
              pb="16px"
              fontSize="29px"
              fontWeight="400"
              fontFamily="RollgatesLuxury"
              lineHeight="28px"
              width="100%"
              height="auto"
              position={"absolute"}
              zIndex="11"
              alignSelf={"end"}
            >
              <Box width="80%" textAlign={"left"}>
                <Text> {procedure.name} </Text>
                <Text as="i" width="100%">
                  {procedure.nickname}
                </Text>
              </Box>
              <Flex
                fontSize="18px"
                fontFamily="RollgatesLuxury"
                letterSpacing="0px"
                lineHeight="24px"
                width="auto"
                height="auto"
                zIndex="11"
                alignItems={"flex-end"}
                flexDirection={"column"}
              >
                <Text as="b">{procedure.time} min </Text>
                <Divider
                  mt="1px"
                  mb="5px"
                  width="70%"
                  borderColor={procedure.images.text}
                />
                <Text as="b">{procedure.price} lei </Text>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
