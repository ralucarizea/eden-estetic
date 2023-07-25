import { Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";
import servicesData from "../assets/constants/data.json";
import { translatedTags } from "../assets/constants/constants";
import { useEffect, useState, useContext } from "react";
import { MyFilterContext } from "../assets/context/FilterContext";


const DynamicCheckboxGroup = ({ categoryKey }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const value = useContext(MyFilterContext);

  const handleStateChange = (value, categoryKey) => {
    setSelectedCheckboxes((prevState) => {
      const prevValue = prevState?.[categoryKey] || [];
  
      return {
        ...prevState,
        [categoryKey]: prevValue.includes(value)
          ? prevValue.filter((item) => item !== value) // Uncheck the checkbox if already checked
          : [...prevValue, value], // Check the checkbox if not already checked
      };
    });
  };
  
  useEffect(() => {
    console.debug(selectedCheckboxes);
    console.log(value);
  }, [selectedCheckboxes]);

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
