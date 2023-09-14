import { GridItem } from "@chakra-ui/react";
import { green } from "../../assets/constants/constants";
import "../../assets/fonts/fonts.css";

export default function NoResults() {
  return (
    <GridItem
      colSpan={12}
      rowSpan={12}
      color={green}
      fontSize={"17px"}
      //   pt="36px"
      //   textAlign={"left"}
      //   alignSelf={"center"}
    >
      {" "}
      Nu am găsit niciun serviciu corespunzător filtrelor selectate.{" "}
    </GridItem>
  );
}
