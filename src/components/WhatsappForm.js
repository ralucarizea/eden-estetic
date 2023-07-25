//3rd party imports
import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { React } from "react";
//local imports
import "../assets/fonts/fonts.css";
// import img from "./../assets/images/top-view-cream-container-with-plant.jpg";
// import EllipseImgBackground from "./EllipseImgBackground";

const img =
  "https://res.cloudinary.com/dgykbnubn/image/upload/v1690194172/edenestetic/visual2_awtoxi.png";


  export default function WhatsappForm() {
  return (
    <Flex height="140vh">
      <Box
        // border="2px solid cyan"
        width="50%"
        height="100%"
        //  maxHeight={"700px"}
        backgroundImage={`url(${img})`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"left"}
      />
      <Flex
        width="50%"
        height="100%"
        flexDirection={"column"}
        justifyContent={"center"}
        p="100px"
        position="relative"
        borderBottom={`0.5px solid #f3eee7`}
      >
        <Text fontSize={"66px"} pb="64px" fontFamily={"RollgatesLuxury"}>
          {" "}
          Ai vreo curiozitate?{" "}
        </Text>
        <Text
          fontSize={"36px"}
          fontFamily={"TheReason"}
          position="absolute"
          right="24px"
          top="27%"
        >
          Trimite-ne un mesaj pe Whatsapp!
        </Text>
        <Text fontSize={"18px"} fontFamily={"Montserrat"} width="64%">
          Promitem că te contactăm înapoi cât de repede cu putință
        </Text>
        <Box py="48px" fontFamily={"Montserrat"}>
          {/* <Form> */}
          <FormControl py="12px">
            <FormLabel>Nume</FormLabel>
            <Input variant={"flushed"} type="text" focusBorderColor="#f3eee7" />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl py="12px">
            <FormLabel>Număr de telefon</FormLabel>
            <InputGroup>
              <InputLeftAddon
                children="+40"
                color="#f3eee7"
                backgroundColor="#6c8a96"
                borderTop="0px"
                borderRight="0px"
                borderLeft="0px"
                borderColor="#f3eee7"
                borderRadius="0px"
                px="12px"
              />
              <Input
                variant={"flushed"}
                type="tel"
                focusBorderColor="#f3eee7"
              />
            </InputGroup>

            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl py="12px">
            <FormLabel>Mesajul tău</FormLabel>
            <Textarea
              placeholder="Introdu aici mesajul dorit..."
              _placeholder={{ color: "#cfcac4" }}
              variant={"flushed"}
              focusBorderColor="#f3eee7"
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Button
          fontFamily={"RollgatesLuxury"}
          fontStyle={"italic"}
          fontSize={"20px"}
          type="submit"
        >
          {" "}
          Trimite
        </Button>
        {/* </Form> */}
      </Flex>
    </Flex>
  );
}
