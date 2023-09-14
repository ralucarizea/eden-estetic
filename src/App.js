import { ChakraProvider, Switch, extendTheme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { checkboxTheme } from "./components/ui/Checkbox";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProductMenus from "./pages/ProductMenus";
import PricingList from "./pages/PricingList";
import Consultance from "./pages/Consultance";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound";

// //-----components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProceduresSubmenu from "./components/services/ProceduresSubmenu";
import DiagnosisSubmenu from "./components/services/DiagnosisSubmenu";
import CoursesSubmenu from "./components/services/CoursesSubmenu";
import { beige, green } from "./assets/constants/constants";
import data from "../src/assets/constants/data.json";
import ProcedurePage from "./components/ui/ProcedurePage";

const theme = extendTheme({
  components: {
    Checkbox: checkboxTheme,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product-menu" element={<ProductMenus />}>
          {/* <Switch> */}
          <Route path="diagnosis" element={<DiagnosisSubmenu />} />
          <Route
            path="procedures"
            element={
              <ProceduresSubmenu
                proceduresData={data.services.procedures}
                filterCategories={data.categories}
              />
            }
          ></Route>
          <Route path="courses" element={<CoursesSubmenu />} />
          {/* </Switch> */}
        </Route>
        <Route path=":procedureId" element={<ProcedurePage />} />
        <Route path="/pricing-list" element={<PricingList />} />
        <Route path="/consultance" element={<Consultance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer
        primaryColor={`${green}`}
        secondaryColor={`${beige}`}
        primaryReversed={"#937569"}
        secondaryReversed={"#937569"}
      />
    </ChakraProvider>
  );
}

export default App;
