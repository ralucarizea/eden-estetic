//3rd party imports
import { Flex, Icon, Text } from "@chakra-ui/react";
//local imports
import "../../assets/fonts/fonts.css";
import { green, beige } from "../../assets/constants/constants";
import ImageContainerSmall from "../ui/ImageContainerSmall";
import ImageContainerSmallBeige from "../ui/ImageContainerSmallBeige";
import { VscArrowRight } from "react-icons/vsc";
import {
  ServiceGridItem,
  ServiceTitle,
  ImageWrapper,
} from "../../assets/constants/styledcomponents";

function MainpageServiceSection({ element }) {
  return (
    <ServiceGridItem backgroundColor={element.backgroundColor}>
      <Flex
        width={{
          base: "50%",
          md: "70%",
        }}
        color={element.color}
        height="100%"
        flexDirection="column"
        justifyContent={"center"}
        // backgroundColor={"green"}
      >
        <ServiceTitle>{element.title}</ServiceTitle>
        <Text
          fontSize={{
            base: "12px",
            md: "13px",
            lg: "16px",
            xl: "18px",
          }}
          pr={{
            base: "1.2vw",
            md: "10px",
            lg: "16px",
            xl: "26px",
          }}
          fontFamily={"Montserrat"}
          fontWeight={"400"}
          letterSpacing={"-0.5px"}
          lineHeight={{
            base: "16px",
            md: "18px",
            lg: "19px",
            xl: "22px",
          }}
          maxWidth="75%"
        >
          {" "}
          {element.caption}{" "}
        </Text>
      </Flex>
      <ImageWrapper>
        {element.backgroundColor !== beige ? (
          <ImageContainerSmallBeige />
        ) : (
          <ImageContainerSmall />
        )}
      </ImageWrapper>
      <Icon
        as={VscArrowRight}
        position="absolute"
        bottom={{ base: "10vw", md: "2vw", lg: "4vw ", xl: "5vw" }}
        left={{ base: "10vw", md: "3vw", lg: "3.5vw", xl: "4vw" }}
        width={{ base: "28px", sm: "32px", md: "36px", lg: "36px", xl: "44px" }}
        height={{
          base: "16px",
          sm: "20px",
          md: "24px",
          lg: "24px",
          xl: "32px",
        }}
        color={element.color}
      />
    </ServiceGridItem>
  );
}
export default MainpageServiceSection;
