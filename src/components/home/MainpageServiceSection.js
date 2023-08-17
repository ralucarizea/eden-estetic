//3rd party imports
import { Box, Icon, Text } from "@chakra-ui/react";
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
      <Box
        width="45%"
        color={element.color}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
      >
        <ServiceTitle>{element.title}</ServiceTitle>
        <Text
          fontSize={"17px"}
          pr="36px"
          fontFamily={"Montserrat"}
          fontWeight={"400"}
          letterSpacing={"-1px"}
          lineHeight={"24px"}
          maxWidth="70%"
        >
          {" "}
          {element.caption}{" "}
        </Text>
      </Box>
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
        bottom="40px"
        left="64px"
        width="44px"
        height="32px"
        color={element.color}
      />
    </ServiceGridItem>
  );
}
export default MainpageServiceSection;
