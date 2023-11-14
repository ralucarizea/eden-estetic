import { Flex, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../assets/fonts/fonts.css";
import { beige, green, ROUTES } from "../assets/constants/constants";
import { useEffect, useState } from "react";

function ProductMenus() {
  const [tabIndex, setTabIndex] = useState(0);
  const location = useLocation();

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  useEffect(() => {
    const locationPath = location.pathname;

    switch (locationPath) {
      case ROUTES.DIAGNOSIS:
        setTabIndex(0);
        break;
      case ROUTES.PROCEDURES:
        setTabIndex(1);
        break;
      case ROUTES.COURSES:
        setTabIndex(2);
        break;
      default:
        break;
    }
  }, [location, tabIndex]);

  return (
    <Flex
      width="100%"
      height="100%"
      backgroundColor={`${beige}`}
      color={`${green}`}
      // overflowY={"hidden"}
      flexDirection="column"
    >
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        pt="120px"
        pb="60px"
        fontSize="72px"
        fontFamily="RollgatesLuxury"
      >
        Servicii oferite
      </Flex>

      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        defaultIndex={1}
        fontFamily="Montserrat"
        fontSize="16px"
        size="md"
        borderColor={green}
        align="center"
        variant="enclosed"
      >
        <TabList width="100%">
          <Link to={ROUTES.DIAGNOSIS}>
            <Tab
              borderColor="transparent"
              opacity={0.35}
              _selected={{ opacity: 1 }}
              rounded={0}
              letterSpacing="-1px"
              fontSize="18px"
              fontWeight={"500"}
            >
              Diagnoză & consultanță
            </Tab>
          </Link>
          <Link to={ROUTES.PROCEDURES}>
            <Tab
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
          <Link to={ROUTES.COURSES}>
            <Tab
              borderColor="transparent"
              opacity={0.35}
              _selected={{ opacity: 1 }}
              rounded={0}
              letterSpacing="-1px"
              fontSize="18px"
              fontWeight={"500"}
            >
              Cursuri & certificări
            </Tab>
          </Link>
        </TabList>
        <TabPanels>
          <Outlet />
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
export default ProductMenus;
