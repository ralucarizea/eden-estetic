//3rd party imports
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import "../assets/fonts/fonts.css";
import { beige } from "../assets/constants/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MotionBox = motion(Box);
const gradient =
  " linear-gradient(0deg, rgba(47,47,47,0.9087775735294118) 13%, rgba(212,206,191,0) 53%);";
export default function ProductMenuCard({ procedure }) {
  const [hover, setHover] = useState(false);
  return (
    <Flex
      height="30rem"
      flexDirection={"column"}
      position="relative"
      alignItems={"flex-end"}
      justifyContent={"flex-end"}
    >
      <Flex
        flexDirection="row"
        color={`${beige}`}
        // color={`#4c616a`}
        border="1px"
        height="100%"
        width="100%"
        // backgroundImage={`url(${procedure.images.display})`}
        // backgroundSize={"cover"}
        // backgroundPosition={"left"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <LazyLoadImage
          src={procedure.images.display}
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
            animate={{
              backdropFilter: "blur(15px)",
              backgroundColor: "rgba(255,255 , 255, 0.15)",
              duration: 3000,
            }}
            sx={
              {
                // backdropFilter: "blur(15px)",
                // background: "rgba(0, 0, 0, .15)",
              }
            }
          >
            <p>{procedure.nickname}</p>
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
              fontSize="24px"
              fontFamily="RollgatesLuxury"
              letterSpacing="-0.5px"
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
                <Text>{procedure.time} min </Text>
                <Divider mt="1px" mb="5px" width="70%" />
                <Text>{procedure.price} lei </Text>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
