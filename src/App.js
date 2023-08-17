import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { checkboxTheme } from "./components/Checkbox";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProductMenus from "./pages/ProductMenus";
import PricingList from "./pages/PricingList";
import Consultance from "./pages/Consultance";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound";

// //-----components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { beige, green } from "./assets/constants/constants";

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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-menu" element={<ProductMenus />} />
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
