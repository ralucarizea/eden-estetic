// --------------------3rd party imports
import { React } from "react";
import {
  Flex,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Image,
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
// import { ReactComponent as Logo } from "../../assets/images/logo-edenesteticwhite.svg";
import { ROUTES, beige, green } from "../../assets/constants/constants";
//-------------constants

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

  return (
    <Flex
      maxW="100vw"
      alignItems="center"
      justifyContent="space-between"
      height={{
        base: "72px",
        xs: "76px",
        sm: "84px",
        md: "88px",
        lg: "100px",
        xl: "116px",
      }}
      fontFamily={"Montserrat"}
      fontWeight="300"
      fontStyle="normal"
      backgroundColor={green}
      color={beige}
      borderBottom={`0.5px solid ${beige}`}
      position={"sticky"}
      zIndex="20"
      top={0}
    >
      <Box
        width={{ base: "45%", md: "37.5%" }}
        // height="100%"
        pl={{ base: "16px", xs: "28px", md: "36px", lg: "64px" }}
        // border="1px solid red"
      >
        <Link to="/">
          <Image
            alt=""
            src="https://res.cloudinary.com/dgykbnubn/image/upload/v1704991730/logoEdenesteticwhite_fqnmx9.png"
            // width={{base: "calc(280px + 10.800625vw)", xs: "calc(380px + 10.800625vw)"}}
            width={{
              base: "110px",
              xs: "130px",
              md: "140px",
              lg: "160px",
              xl: "180px",
            }}
            height={{
              base: "16px",
              xs: "19px",
              md: "21px",
              lg: "24px",
              xl: "28px",
            }}
          />
        </Link>
      </Box>
      <Show breakpoint="(min-width: 820px)">
        <Flex>
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
        </Flex>
      </Show>
      <Show breakpoint="(max-width: 819px)">
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
