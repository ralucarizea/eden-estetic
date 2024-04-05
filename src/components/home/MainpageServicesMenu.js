//3rd party imports
import { Box, Show } from "@chakra-ui/react";
import { React } from "react";
//local imports
import { mainServiceCategories } from "../../assets/constants/constants";
import MainpageServiceSection from "./MainpageServiceSection";
import "../../assets/fonts/fonts.css";

const MainpageServicesMenu = () => {
  return (
    <Box
      height="fit-content"
      display="grid"
      width="100%"
      // gridTemplateColumns="1fr 1fr"
      gridTemplateRows={{
        base: "repeat(4, minmax(350px, auto))",
        lg: "repeat(2, 0.5fr)",
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <Show above="lg">
        <MainpageServiceSection element={mainServiceCategories[0]} />
        <MainpageServiceSection element={mainServiceCategories[1]} />
        <MainpageServiceSection element={mainServiceCategories[2]} />
        <MainpageServiceSection element={mainServiceCategories[3]} />
      </Show>
      <Show below="lg">
        <MainpageServiceSection element={mainServiceCategories[0]} />
        <MainpageServiceSection element={mainServiceCategories[1]} />
        <MainpageServiceSection element={mainServiceCategories[3]} />
        <MainpageServiceSection element={mainServiceCategories[2]} />
      </Show>
    </Box>
  );
};

export default MainpageServicesMenu;
