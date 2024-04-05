//3rd party imports
import { Flex, Icon, Text } from "@chakra-ui/react";
//local imports
import "../../assets/fonts/fonts.css";
import { beige } from "../../assets/constants/constants";
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
          base: "100%",
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
            base: "13px",
            xs: "14px",
            sm: "15px",
            md: "16px",
            lg: "16.5px",
            xl: "20px",
          }}
          pr={{
            base: "1.2vw",
            md: "10px",
            lg: "16px",
            xl: "26px",
          }}
          fontFamily={"Montserrat"}
          fontWeight={"400"}
          letterSpacing={"-0.25px"}
          lineHeight={{
            base: "16px",
            xs: "18px",
            sm: "20px",
            md: "22px",
            lg: "19px",
            xl: "25px",
          }}
          maxWidth="78%"
        >
          {element.caption}
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
        bottom={{ base: "10vw", md: "7vw", lg: "4vw", xl: "5vw" }}
        // left={{ base: "10vw", md: "3vw", lg: "3.5vw", xl: "4vw" }}
        width={{ base: "28px", sm: "32px", md: "36px", lg: "36px", xl: "44px" }}
        height={{
          base: "22px",
          sm: "25px",
          md: "26px",
          lg: "28px",
          xl: "32px",
        }}
        color={element.color}
      />
    </ServiceGridItem>
  );
}
export default MainpageServiceSection;
