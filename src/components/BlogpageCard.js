//3rd party imports
import { Box, Text, Flex } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

//local imports
import "../assets/fonts/fonts.css";
// import img from "./../assets/images/16.jpg";
import { CategoryBox } from "../assets/constants/styledcomponents";

export default function BlogCard({ post }) {
  return (
    <Flex
      flexDirection={"column"}
      justify
      border="1px solid #6c8a96"
      p="28px"
      color="#6c8a96"
      fontFamily={"Montserrat"}
      minWidth="26vw"
      height="max-content"
    >
      <Box position={"relative"}>
        <Box
          // backgroundImage={`${img}`}
          width="100%"
          height="15rem"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        <Box position="absolute" top="4px" right="8px" zIndex={"2"}>
          <CategoryBox>
            <Text fontSize={"11px"}>{post.category}</Text>
          </CategoryBox>
        </Box>
      </Box>

      <Box fontSize={"14px"} fontWeight={"400"} letterSpacing={"-0.5px"} pt="3">
        {post.date.toUpperCase()}
      </Box>

      <Box
        fontSize={"25px"}
        fontWeight={"500"}
        letterSpacing={"-0.5px"}
        pt="2"
        pb="5"
        lineHeight={"28px"}
      >
        {post.title}
      </Box>

      <Box fontSize="14px" width="100%" flex="1">
        {post.content}
      </Box>
      <Flex width="100%" height="auto" justifyContent={"flex-end"} pt="24px">
        {" "}
        Arrow
      </Flex>
    </Flex>
  );
}
