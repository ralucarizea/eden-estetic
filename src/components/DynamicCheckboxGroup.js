import { Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";
import servicesData from "../assets/constants/data.json";
import { translatedTags } from "../assets/constants/constants";
import { useEffect, useState, useContext } from "react";
import { MyFilterContext, useFilterContext } from "../assets/context/FilterContext";


const DynamicCheckboxGroup = ({ categoryKey }) => {
const {
  selectedCheckboxes,
  handleStateChange,
} = useFilterContext()

  return (
    <CheckboxGroup value={selectedCheckboxes}>
      <VStack spacing={5} alignItems="flex-start">
        {servicesData.categories[categoryKey].map((option) => (
          <Checkbox
            key={option}
            isChecked={selectedCheckboxes?.[categoryKey]?.includes(option)}
            onChange={() => handleStateChange(option, categoryKey)}
          >
            {translatedTags[option]?.translation || option}
            
          </Checkbox>
        ))}
      </VStack>
    </CheckboxGroup>
  );
};

export default DynamicCheckboxGroup;
