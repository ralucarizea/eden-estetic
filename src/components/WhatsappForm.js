//3rd party imports
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
// import PhoneInput from "react-phone-number-input";
import { React, useState } from "react";
//local imports
import { beige, green } from "../assets/constants/constants";
import ButtonEllipse from "./ui/ButtonEllipse";
import "../assets/fonts/fonts.css";
// import ButtonEllipse from "./ButtonEllipse";
// import img from "./../assets/images/top-view-cream-container-with-plant.jpg";
// import EllipseImgBackground from "./EllipseImgBackground";

const img =
  "https://res.cloudinary.com/dgykbnubn/image/upload/v1690194172/edenestetic/visual2_awtoxi.png";

export default function WhatsappForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Flex
      mb={{ base: "160px" }}
      minHeight="fit-content"
      height={{ base: "100vh", xs: "80vh", md: "90vh", xl: "120vh" }}
      flexDirection={{ base: "column", xs: "row" }}
    >
      <Box
        width={{ base: "100%", xs: "50%" }}
        height={{ base: "80%", xs: "100%" }}
        backgroundImage={`url(${img})`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"left"}
      />
      <Flex
        width={{ base: "100%", xs: "50%" }}
        height="100%"
        flexDirection={"column"}
        justifyContent={"center"}
        px={{ base: "80px", xs: "3.5vh", sm: "4vh", md: "7vw", xl: "9.5vw" }}
        py={{ base: "50px", xs: "0px" }}
        borderBottom={`0.5px solid #f3eee7`}
        position="relative"
        minW={{ sm: "", md: "420px" }}
      >
        <Text
          fontSize={{
            base: "36px",
            xs: "31.75px",
            sm: "34.5px",
            md: "40px",
            lg: "46px",
            xl: "56px",
          }}
          lineHeight={{ base: "36px", xs: "33px", md: "47px", xl: "44px" }}
          fontFamily={"RollgatesLuxury"}
          letterSpacing={"-1px"}
          ml={{
            base: "0",
            xs: "-20px",
            sm: "-30px",
            md: "-50px",
            lg: "-48px",
            xl: "-36px",
          }}
          mt={{
            base: "0",
            xs: "-16px",
            sm: "-28px",
            md: "-16px",
            lg: "0px",
            xl: "-48px",
          }}
          // pb={{base: "36px", xs: "0"}}
        >
          Ai vreo curiozitate?
        </Text>
        <Text
          width={{ base: "95%", xs: "88%", sm: "96%", md: "86%" }}
          fontSize={{
            base: "24px",
            xs: "21px",
            md: "24px",
            lg: "28px",
            xl: "34px",
          }}
          lineHeight="calc(1em + 2px)"
          textAlign={"right"}
          fontFamily={"TheReason"}
          position="absolute"
          right={{
            base: "0",
            xs: "20px",
            sm: "24px",
            md: "24px",
            lg: "28px",
            xl: "36px",
          }}
          top={{
            base: "105px",
            xs: "175px",
            sm: "165px",
            md: "175px",
            lg: "180px",
            xl: "280px",
          }}
        >
          Trimite-ne un mesaj pe Whatsapp!
        </Text>
        <Box
          pt={{
            base: "70px",
            xs: "80px",
            sm: "70px",
            md: "80px",
            lg: "90px",
            xl: "120px",
          }}
          pb={{ base: "28px", md: "10vh" }}
          fontFamily={"Montserrat"}
          fontSize={{
            base: "13px",
            xs: "13.5px",
            md: "14px",
            lg: "15px",
            xl: "16px",
          }}
        >
          <FormControl py="12px" fontSize="inherit">
            <FormLabel fontSize="calc( 1em + 1px) ">Nume</FormLabel>
            <Input
              fontSize={"inherit"}
              placeholder="Mariana"
              value={name}
              onChange={(e) => setName(e?.currentTarget?.value)}
              variant={"flushed"}
              type="text"
              _placeholder={{
                color: "rgba(243,238,231, 0.5)",
                fontStyle: "italic",
              }}
              borderColor="rgba(243,238,231, 0.3)"
              _focusVisible={{}}
            />
          </FormControl>
          <FormControl py="12px">
            <FormLabel fontSize="calc( 1em + 1px) ">Număr de telefon</FormLabel>
            <Input
              fontSize={"inherit"}
              variant={"flushed"}
              type="tel"
              borderColor="rgba(243,238,231, 0.3)"
              placeholder="+40..."
              _placeholder={{
                color: "rgba(243,238,231, 0.5)",
                fontStyle: "italic",
              }}
              _focusVisible={{}}
            />
          </FormControl>
          <FormControl py="12px">
            <FormLabel fontSize="calc( 1em + 1px) ">Mesajul tău</FormLabel>
            <Textarea
              textOverflow={"ellipsis"}
              fontSize={"inherit"}
              placeholder="Bună, Mariana! Sunt interesată să programez o ședință de diagnoză & consultanță pentru săptămâna viitoare. Ai vreun loc disponibil?"
              _placeholder={{
                color: "rgba(243,238,231, 0.5)",
                fontStyle: "italic",
              }}
              value={message}
              onChange={(e) => setMessage(e?.currentTarget?.value)}
              variant={"flushed"}
              borderColor="rgba(243,238,231, 0.3)"
              _focusVisible={{}}
            />
          </FormControl>
        </Box>
        <ButtonEllipse
          primaryColor={beige}
          secondaryColor={green}
          onClick={() =>
            (window.location.href = `https://wa.me/40721234567?text=${message}`)
          }
          textCTA={"Trimite mesajul"}
          maxHeight={"120"}
          maxWidth={"270"}
        />
      </Flex>
    </Flex>
  );
}
