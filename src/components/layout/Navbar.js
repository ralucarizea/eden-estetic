// --------------------3rd party imports
import { React } from "react";
import {
  Flex,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Show } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// --------------------local imports
import "../../assets/fonts/fonts.css";
import {
  NavbarButtonBox,
  DrawerLinkButtonBox,
} from "../../assets/constants/styledcomponents";
import { ReactComponent as Logo } from "../../assets/images/logo-edenesteticwhite.svg";
import { ROUTES, beige, green } from "../../assets/constants/constants";
//-------------constants

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      height="calc(55px + 2.800625vw)"
      fontFamily={"Montserrat"}
      fontWeight="300"
      fontStyle="normal"
      backgroundColor={green}
      color={beige}
      borderBottom={`0.5px solid ${beige}`}
      position={"sticky"}
      zIndex="200"
    >
      <Box width="40%" height="100%" pl="4.800625vw" py="1.500625vw">
        <Link to="/">
          <Logo
            alt=""
            width="calc(380px + 10.800625vw)"
            height="100%"
            viewBox="0 0 580 25"
          />
        </Link>
      </Box>

      <Show breakpoint="(min-width: 700px)">
        <NavbarButtonBox>
          <Link to={ROUTES.ABOUT}>Despre</Link>
        </NavbarButtonBox>

        <NavbarButtonBox>
          <Link to={ROUTES.SERVICES}>Servicii</Link>
        </NavbarButtonBox>

        <NavbarButtonBox>
          <Link to={ROUTES.PRICING_LIST}>Listă de prețuri </Link>
        </NavbarButtonBox>

        <NavbarButtonBox>
          <Link to={ROUTES.BLOG}>Blog</Link>
        </NavbarButtonBox>

        <NavbarButtonBox>
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </NavbarButtonBox>
      </Show>
      <Show breakpoint="(max-width: 699px)">
        <Button
          // ref={btnRef}
          mr="16px"
          backgroundColor={green}
          color={beige}
          onClick={onOpen}
          as={IconButton}
          icon={<HamburgerIcon />}
          // variant="outline"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>Meniu</DrawerHeader> */}

            <DrawerBody background={beige}>
              {/* <Input placeholder='Type here...' /> */}
              <Flex
                pt="20vh"
                pr="36px"
                height="50%"
                flexDirection={"column"}
                justifyContent="space-between"
                fontSize="18px"
                fontFamily={"Montserrat"}
                fontWeight="500"
                alignItems={"flex-end"}
                color={green}
                
              >
                <DrawerLinkButtonBox>
                  <Link to={ROUTES.ABOUT}>Despre</Link>
                </DrawerLinkButtonBox>

                <DrawerLinkButtonBox>
                  <Link to={ROUTES.SERVICES}>Servicii</Link>
                </DrawerLinkButtonBox>

                <DrawerLinkButtonBox>
                  <Link to={ROUTES.PRICING_LIST}>Listă de prețuri </Link>
                </DrawerLinkButtonBox>

                <DrawerLinkButtonBox>
                  <Link to={ROUTES.BLOG}>Blog</Link>
                </DrawerLinkButtonBox>

                <DrawerLinkButtonBox>
                  <Link to={ROUTES.CONTACT}>Contact</Link>
                </DrawerLinkButtonBox>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
}
export default Navbar;
