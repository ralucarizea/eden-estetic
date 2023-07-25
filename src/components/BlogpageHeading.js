//3rd party imports
import { Box, Text, Flex } from "@chakra-ui/react";

//local imports
import "../assets/fonts/fonts.css";
import { CategoryBox } from "../assets/constants/styledcomponents";

export default function BlogHeading() {
  return (
    <Flex
      color="#6c8a96"
      fontFamily={"Montserrat"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      py="80px"
      width="100%"
      px ="10vw"
      
    >
      <Box
        p={`0px 0px 16px 0px`}
        fontFamily={"RollgatesLuxury"}
        fontSize={"64px"}
        letterSpacing={"-1px"}
        fontWeight={"200"}
      >
        Articole blog
      </Box>
      <Flex  fontSize={"14px"}>
        <CategoryBox>
          <Text>Reparare</Text>
        </CategoryBox>
        <CategoryBox>
          <Text>Îngrijire</Text>
        </CategoryBox>
        <CategoryBox>
          <Text>Hidratare</Text>
        </CategoryBox>
      </Flex>
    </Flex>
  );
}
