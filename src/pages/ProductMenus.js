//3rd party imports
import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

//local imports
import ProceduresSubmenu from "../components/ProceduresSubmenu";
import DiagnosisSubmenu from "../components/DiagnosisSubmenu";
import CoursesSubmenu from "../components/CoursesSubmenu";
// import Footer from "../components/Footer";
import "../assets/fonts/fonts.css";
import { green, beige } from "../assets/constants/constants";
import servicesData from "../assets/constants/data.json";
function ProductMenus() {
  return (
    <Flex
      width="100%"
      height="100%"
      // backgroundColor="purple"
      backgroundColor={`${beige}`}
      color={`${green}`}
      px="64px"
      flexDirection="column"
    >
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        // backgroundColor="green"
        pt="120px"
        pb="60px"
        fontSize="72px"
        fontFamily="RollgatesLuxury"
      >
        Servicii oferite
      </Flex>
      <Tabs
        fontFamily="Montserrat"
        fontSize="16px"
        size="md"
        align="center"
        variant="enclosed"
      >
        <TabList width="100%">
          <Tab letterSpacing="-1px" fontSize="18px" fontWeight={"500"}>
            Diagnostic & consultanță{" "}
          </Tab>
          <Tab letterSpacing="-1px" fontSize="18px" fontWeight={"500"}>
            Proceduri cosmetice
          </Tab>
          <Tab letterSpacing="-1px" fontSize="18px" fontWeight={"500"}>
            Cursuri și certificări{" "}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0px">
            <DiagnosisSubmenu />
          </TabPanel>
          <TabPanel>
            <ProceduresSubmenu proceduresData={servicesData.services.procedures} filterCategories={servicesData.categories}/>
          </TabPanel>
          <TabPanel>
            <CoursesSubmenu />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px"
          fontFamily="Montserrat"
          letterSpacing="-1px"
          fontWeight="500"
          fontSize="18px"
        >
          <Box>Filtre</Box>
          <Box>Sortează după</Box>
        </Flex> */}
    </Flex>
  );
}
export default ProductMenus;
