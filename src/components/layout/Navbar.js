// --------------------3rd party imports
import {React} from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// --------------------local imports
import "../../assets/fonts/fonts.css";
import { NavbarButtonBox } from "../../assets/constants/styledcomponents";
import { ReactComponent as Logo } from "../../assets/images/logo-edenesteticwhite.svg";
//-------------constants

function Navbar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      height="14vh"
      fontFamily={"Montserrat"}
      fontWeight="300"
      fontStyle="normal"
      backgroundColor={"#6c8a96"}
      color={"#f3eee7"}
      borderBottom={"1px solid #f3eee7"}
      // letterSpacing={"-0.5px"}
    >
      <Box width="40%" height="100%" pl="64px" py="36px">
      <Link to="/"><Logo alt="" width="100%" height="100%" viewBox="0 0 580 25" /></Link>
      </Box>

      <NavbarButtonBox>
        <Link to="/about">Despre</Link>
      </NavbarButtonBox>

      <NavbarButtonBox>
        <Link to="/product-menu">Servicii</Link>
      </NavbarButtonBox>

      <NavbarButtonBox>
        {" "}
        <Link to="/pricing-list">Listă de prețuri </Link>
      </NavbarButtonBox>

      <NavbarButtonBox>
        <Link to="/blog">Blog</Link>
      </NavbarButtonBox>

      <NavbarButtonBox>
        {" "}
        <Link to="/contact">Contact</Link>
      </NavbarButtonBox>
    </Flex>
  );
}
export default Navbar;