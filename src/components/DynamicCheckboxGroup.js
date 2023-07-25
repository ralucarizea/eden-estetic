import { Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";
import servicesData from "../assets/constants/data.json";
import {translatedTags} from "../assets/constants/constants";
import { useState } from "react";

const DynamicCheckboxGroup = ({ categoryKey }) => {

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const handleCheckboxChange = (values) => {
    setSelectedCheckboxes(values);
  };
  return (
    <CheckboxGroup value={selectedCheckboxes} onChange={handleCheckboxChange}>
      <VStack spacing={5} alignItems="flex-start">
        {servicesData.categories[categoryKey].map((option) => (
          <Checkbox key={option} value={option}>
            {translatedTags[option]?.translation || option}
          </Checkbox>
        ))
        }
      </VStack>
    </CheckboxGroup>
  );
};

export default DynamicCheckboxGroup;
