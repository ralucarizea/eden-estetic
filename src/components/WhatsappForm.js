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
import ButtonEllipse from "./ButtonEllipse";
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
    <Flex height="140vh">
      <Box
        width="50%"
        height="100%"
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
        p="80px"
        position="relative"
        borderBottom={`0.5px solid #f3eee7`}
      >
        <Text
          fontSize={"68px"}
          pb="72px"
          fontFamily={"RollgatesLuxury"}
          // fontWeight={"300"}
          letterSpacing={"-1px"}
        >
          {" "}
          Ai vreo curiozitate?{" "}
        </Text>
        <Text
          fontSize={"40px"}
          fontFamily={"TheReason"}
          position="absolute"
          right="3%"
          top={["25%", "30%"]}
        >
          Trimite-ne un mesaj pe Whatsapp!
        </Text>
        {/* <Text
          pl="12px"
          fontSize={"20px"}
          fontFamily={"Montserrat"}
          fontWeight={"300"}
          letterSpacing={"-1px"}
        >
          Promitem ca te contactam inapoi cat de repede cu putinta!
        </Text> */}
        <Box pt="48px" pb="10vh" fontFamily={"Montserrat"}>
          <FormControl py="12px">
            <FormLabel>Nume</FormLabel>
            <Input
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
            <FormLabel>Număr de telefon</FormLabel>
            <Input
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
            <FormLabel>Mesajul tău</FormLabel>
            <Textarea
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
