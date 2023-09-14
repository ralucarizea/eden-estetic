import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProceduresSubmenu from "../components/services/ProceduresSubmenu";
import DiagnosisSubmenu from "../components/services/DiagnosisSubmenu";
import CoursesSubmenu from "../components/services/CoursesSubmenu";
// import Footer from "../components/Footer";
import "../assets/fonts/fonts.css";
import { green, beige } from "../assets/constants/constants";
import data from "../assets/constants/data.json";
function ProductMenus() {
  return (
    <Flex
      width="100%"
      height="100%"
      backgroundColor={`${beige}`}
      color={`${green}`}
      // px="64px"
      overflowY={"hidden"}
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
        borderColor={green}
        align="center"
        variant="enclosed"
      >
        <TabList width="100%">
          <Link to="/product-menu/diagnosis">
            <Tab
              // borderColor={green}
              borderColor="transparent"
              opacity={0.35}
              _selected={{ opacity: 1 }}
              rounded={0}
              letterSpacing="-1px"
              fontSize="18px"
              fontWeight={"500"}
            >
              Diagnoză & consultanță{" "}
            </Tab>
          </Link>
          <Link to="/product-menu/procedures">
            <Tab
              // borderColor={green}
              borderColor="transparent"
              opacity={0.35}
              _selected={{ opacity: 1 }}
              rounded={0}
              letterSpacing="-1px"
              fontSize="18px"
              fontWeight={"500"}
            >
              Proceduri cosmetice
            </Tab>
          </Link>
          <Link to="/product-menu/courses">
            <Tab
              // borderColor={green}
              borderColor="transparent"
              opacity={0.35}
              _selected={{ opacity: 1 }}
              rounded={0}
              letterSpacing="-1px"
              fontSize="18px"
              fontWeight={"500"}
            >
              Cursuri & certificări{" "}
            </Tab>
          </Link>
        </TabList>
        <TabPanels>
          {/* <TabPanel p="0px">
            <DiagnosisSubmenu />
          </TabPanel>
          <TabPanel pr="20px" pl="0px" pt="48px">
            <ProceduresSubmenu
              // proceduresData={data.services.procedures}
              // filterCategories={data.categories}
            />
          </TabPanel>{" "}
          <TabPanel p="0px">
            <CoursesSubmenu />
          </TabPanel> */}
          <Outlet />
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
export default ProductMenus;
