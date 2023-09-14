import { beige, green } from "../assets/constants/constants";
import WhatsappForm from "../components/WhatsappForm";
import { GridItem } from "@chakra-ui/react";
import FAQ from "../components/layout/FAQ";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <GridItem
        backgroundColor={`${green}`}
        color={`${beige}`}
        gridAutoRows="100vh"
      >
        <WhatsappForm />
      </GridItem>
      <GridItem
        backgroundColor={`${beige}`}
        color={`${green}`}
        gridAutoRows="100vh"
      >
        <FAQ color={green} />
      </GridItem>
    </>
  );
}
export default Contact;
