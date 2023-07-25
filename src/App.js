// --------------------3rd party imports
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { checkboxTheme } from "./components/Checkbox";
// --------------------local imports
// //----pages
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

const theme = extendTheme({
  components: {
    Checkbox: checkboxTheme,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <BrowserRouter> */}
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
    </ChakraProvider>
  );
}

export default App;
