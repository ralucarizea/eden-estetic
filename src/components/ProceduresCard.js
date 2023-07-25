//3rd party imports
import { Box, Text, Flex, Divider } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
//local imports
import "../assets/fonts/fonts.css";
// import { Button } from "@chakra-ui/react";
import { green, beige } from "../assets/constants/constants";

export default function ProductMenuCard({ procedure }) {
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
        border="1px"
        height="100%"
        width="100%"
        backgroundImage={`url(${procedure.images.display})`}
        backgroundSize={"cover"}
        backgroundPosition={"left"}
      >
        <Box
          height="100%"
          width="100%"
          position="absolute"
          zIndex="10"
          sx={{
            background:
              "linear-gradient(0deg, rgba(21,22,22,0.8562237394957983) 13%, rgba(21,22,22,0.6237307422969187) 35%, rgba(21,22,22,0.3324142156862745) 56%, rgba(21,22,22,0.0915178571428571) 70%, rgba(21,22,22,0) 83%);",
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
      </Flex>
    </Flex>
  );
}
