import "../../assets/fonts/fonts.css";
import {
  productMenuGridColNumber,
  green,
  // beige,
  translatedTags,
} from "../../assets/constants/constants";
import { AccordionBox } from "../../assets/constants/styledcomponents";
import {
  useFilterContext,
  withMyFilterContext,
} from "../../assets/context/FilterContext";
import ProceduresCard from "../ui/ProceduresCard";
import DynamicCheckboxGroup from "./DynamicCheckboxGroup";
import { useAnimate, stagger, motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NoResults from "../ui/NoResults";
import { Link } from "react-router-dom";

function checkIfProductIsFilterable(product, filtersObject) {
  let ok = 0;
  let emptyFields = 0;

  for (const category in product) {
    if (!filtersObject.hasOwnProperty(category)) continue;

    const filter = filtersObject[category];
    const productValues = product[category];

    if (filter.length === 0) {
      emptyFields++;
    } else {
      if (isEveryItemIncluded(filter, productValues)) ok++;
    }
  }

  return ok === Object.keys(filtersObject).length - emptyFields;
}

function isEveryItemIncluded(smallArray, bigArray) {
  return smallArray.every((item) => bigArray.includes(item));
}

const staggerMenuItems = stagger(0.15, { startDelay: 0.25 });

function useStaggerAnimation(filteredProcedures) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    console.debug({ filteredProcedures });
    if (!filteredProcedures?.length) {
      return;
    }
    animate(
      ".procedure-service",
      { opacity: [0.5, 1], filter: ["blur(10px)", "blur(0px)"] },
      {
        duration: 0.4,
        delay: staggerMenuItems,
      },
    );
  }, [filteredProcedures]);

  return scope;
}

const ProceduresSubmenu = ({ proceduresData, filterCategories }) => {
  const [filteredProcedures, setFilteredProcedures] = useState([]);
  const scope = useStaggerAnimation(filteredProcedures);

  const { selectedCheckboxes } = useFilterContext();

  useEffect(() => {
    setFilteredProcedures(proceduresData);
  }, []);

  useEffect(() => {
    setFilteredProcedures(
      proceduresData.filter((product) =>
        checkIfProductIsFilterable(product, selectedCheckboxes),
      ),
    );
  }, [proceduresData, selectedCheckboxes]);

  return (
    <Grid
      width="100%"
      gap="8px"
      backgroundColor="inherit"
      gridTemplateColumns={`4.4fr repeat(${productMenuGridColNumber}, 1fr)`}
      gridAutoRows="auto"
      ref={scope}
    >
      <GridItem colSpan="1" rowSpan="16" borderRight="1px">
        <Accordion allowMultiple fontFamily="Montserrat">
          {Object.keys(filterCategories).map((category) => (
            <AccordionItem borderColor={green} key={category} pl="20px">
              <AccordionButton p="3">
                <AccordionBox as="span">
                  {translatedTags[category]?.translation || ""}
                </AccordionBox>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pr="0px" pb={4}>
                <DynamicCheckboxGroup categoryKey={category} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </GridItem>
      {filteredProcedures?.length ? (
        filteredProcedures.map((procedure, index) => (
          <GridItem
            className="procedure-service"
            key={procedure.ID}
            colSpan={index % 4 === 0 || index % 4 === 3 ? 7 : 5}
            rowSpan="auto"
          >
            <Link to={`/${procedure.ID}`}>
              <ProceduresCard procedure={procedure} />
            </Link>
          </GridItem>
        ))
      ) : (
        <NoResults />
      )}
    </Grid>
  );
};
export default withMyFilterContext(ProceduresSubmenu);
