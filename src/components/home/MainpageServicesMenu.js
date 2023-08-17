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
        height="150vh"
        display="grid"
        width="100%"
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="50% 50%"
      >
        <MainpageServiceSection element={mainServiceCategories[0]}/>
        <MainpageServiceSection element={mainServiceCategories[1]}/>
        <MainpageServiceSection element={mainServiceCategories[2]}/>
        <MainpageServiceSection element={mainServiceCategories[3]}/>
      </Box>
    
  );
};

export default MainpageServicesMenu;
