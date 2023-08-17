import React from "react";
import { useState, useContext } from "react";

export const MyFilterContext = React.createContext();

const FilterProvider = (props) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    ageCategory: [],
    cosmeticConcernCategory: [],
    treatmentAreaCategory: [],
    desiredResultCategory: [],
  });
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

  const value = {
    selectedCheckboxes,
    setSelectedCheckboxes,
    handleStateChange,
  };

  return <MyFilterContext.Provider value={value} {...props} />;
};

export function withMyFilterContext(Component) {
  return (props) => {
    return (
      <FilterProvider>
        <Component {...props} />
      </FilterProvider>
    );
  };
}

export const useFilterContext = () => {
  const context = useContext(MyFilterContext);

  if (context === undefined) {
    throw new Error(
      `useFunnelWeights must be used within FunnelWeightsProvider`
    );
  }

  const { selectedCheckboxes, handleStateChange } = context;

  return {
    selectedCheckboxes,
    handleStateChange,
  };
};

// const MyContextProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');
// return (
//     <MyContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </MyContext.Provider>
//   );
// };
