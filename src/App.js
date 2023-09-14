import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
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
import { beige, green, ROUTES } from "./assets/constants/constants";
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
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.SERVICES} element={<ProductMenus />}>
          <Route path={ROUTES.DIAGNOSIS} element={<DiagnosisSubmenu />} />
          <Route
            path={ROUTES.PROCEDURES}
            element={
              <ProceduresSubmenu
                proceduresData={data.services.procedures}
                filterCategories={data.categories}
              />
            }
          ></Route>
          <Route path={ROUTES.COURSES} element={<CoursesSubmenu />} />
        </Route>
        <Route path={ROUTES.PROCEDURE} element={<ProcedurePage />} />
        <Route path={ROUTES.PRICING_LIST} element={<PricingList />} />
        <Route path={ROUTES.CONSULTANCE} element={<Consultance />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
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
