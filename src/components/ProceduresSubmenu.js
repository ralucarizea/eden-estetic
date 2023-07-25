// import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";

// --------------------local imports
import "../assets/fonts/fonts.css";
import {
  productMenuGridColNumber,
  green,
  beige,
  translatedTags,
} from "../assets/constants/constants";
import { AccordionBox } from "../assets/constants/styledcomponents";

import ProceduresCard from "./ProceduresCard";
import DynamicCheckboxGroup from "./DynamicCheckboxGroup";

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

// const filtre = {
//   areaOfApplication: ['scalp', 'ochi']
//   solutionTo: ['acnee'],
//   ageRecommendation: [],
//   effects: [],
// }

function mapOverChildArrays(obj) {
  const result = {};
  for (const category in obj) {
    if (Array.isArray(obj[category])) {
      result[category] = obj[category].map((item) => item);
    }
  }
  return result;
}

const ProceduresSubmenu = ({ proceduresData, filterCategories }) => {
  //   const [filteredServices, _] = useState(proceduresData)

  // useEffect(() => {
  //   filteredServices.filter(....)
  // }, [filtre])

  console.debug(proceduresData);
  console.debug(filterCategories);

  const mappedCategories = mapOverChildArrays(filterCategories);

  console.debug(mappedCategories);

  return (
    <Grid
      width="100%"
      columnGap={"16px"}
      backgroundColor="inherit"
      gridTemplateColumns={`4.6fr repeat(${productMenuGridColNumber}, 1fr)`}
      gridAutoRows="auto"
    >
      <GridItem pt="16px" colSpan="1" rowSpan="12" pr="8px" borderRight="1px">
        <Accordion allowToggle fontFamily="Montserrat">
          {Object.keys(filterCategories).map((category) => (
            <AccordionItem py="4px" key={category}>
              <AccordionButton px="0px">
                <AccordionBox as="span">
                  {translatedTags[category]?.translation || ""}
                </AccordionBox>
                <AccordionIcon as={VscArrowRight} />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <DynamicCheckboxGroup categoryKey={category} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </GridItem>
      {proceduresData.map((procedure) => (
        <GridItem
          mt="16px"
          colSpan={`${productMenuGridColNumber / 3}`}
          rowSpan="auto"
        >
          <ProceduresCard key={procedure.ID} procedure={procedure} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default ProceduresSubmenu;
