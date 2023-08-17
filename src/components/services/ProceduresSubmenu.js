// import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
// --------------------local imports
import "../../assets/fonts/fonts.css";
import {
  productMenuGridColNumber,
  green,
  beige,
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

//-------------constants
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

// function mapOverChildArrays(obj) {
//   const result = {};
//   for (const category in obj) {
//     if (Array.isArray(obj[category])) {
//       result[category] = obj[category].map((item) => item);
//     }
//   }
//   return result;
// }

// function filteringByCurrentFilters(allDataArray, filtersObject) {
//   let filteredProductArray = [];
//   for (const i in Object.keys(filtersObject)) {
//     filteredProductArray = allDataArray.filter((product) =>
//       product.i
//         .map((propery) => .i.toString())
//         .includes(i)
//     );
//   }
//   return filteredProductArray;
// }

// const filterProduct = (product, filters) => {
//   for (let [key, value] of Object.entries(filters)) {
//     console.debug({key})
//     const productAgeCategories = product[key]; // e.g., ['Toate vârstele']
//     const selectedAgeCategories = value; // e.g., ['Toate vârstele']
//     const isSomeIncluded = productAgeCategories.some(category => selectedAgeCategories.includes(category));
//     return isSomeIncluded;
//   }
// }

// function isArrayEmpty(array) {
//   if (Array.isArray(array) && array.length) return false;
//   return true;
// }

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
      }
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
    // console.log(" RE-rendering -> New value for arr : ", arr);
    setFilteredProcedures(
      proceduresData.filter((product) =>
        checkIfProductIsFilterable(product, selectedCheckboxes)
      )
    );
  }, [selectedCheckboxes]);

  useEffect(() => {
    console.log(
      "RE-rendering -> New value for filteredProcedures: ",
      filteredProcedures
    );
  }, [filteredProcedures]);

  return (
    <Grid
      width="100%"
      columnGap={"24px"}
      rowGap="24px"
      backgroundColor="inherit"
      gridTemplateColumns={`4.4fr repeat(${productMenuGridColNumber}, 1fr)`}
      gridAutoRows="auto"
      ref={scope}
    >
      <GridItem colSpan="1" rowSpan="12" borderRight="1px">
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
      {/* {console.log("filteredProcedures is: ", filteredProcedures)} */}
      {filteredProcedures?.length ? (
        filteredProcedures.map((procedure) => (
          <GridItem
            className="procedure-service"
            key={procedure.ID}
            // mt="16px"
            colSpan={`${productMenuGridColNumber / 3}`}
            rowSpan="auto"
          >
            <ProceduresCard procedure={procedure} />
          </GridItem>
        ))
      ) : (
        <>Nu am gasit niciun serviciu :(</>
      )}
    </Grid>
  );
};
export default withMyFilterContext(ProceduresSubmenu);
