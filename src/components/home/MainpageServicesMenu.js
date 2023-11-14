//3rd party imports
import { Box } from "@chakra-ui/react";
import {React} from "react";
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
          md: "repeat(2, 0.5fr)",
        }}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
        }}
      >
        <MainpageServiceSection element={mainServiceCategories[0]}/>
        <MainpageServiceSection element={mainServiceCategories[1]}/>
        <MainpageServiceSection element={mainServiceCategories[2]}/>
        <MainpageServiceSection element={mainServiceCategories[3]}/>
      </Box>
    
  );
};

export default MainpageServicesMenu;
