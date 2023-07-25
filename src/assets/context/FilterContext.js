import React from "react";

export function withMyFilterContext(Component) {
  return (props) => {
    return (
      <MyFilterContext.Provider value={"blabla"}>
        <Component {...props} />
      </MyFilterContext.Provider>
    );
  };
}

export const MyFilterContext = React.createContext();

// const MyContextProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');
// return (
//     <MyContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </MyContext.Provider>
//   );
// };
