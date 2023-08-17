import { beige, green } from "../assets/constants/constants";
import WhatsappForm from "../components/WhatsappForm";
import { GridItem } from "@chakra-ui/react";

function Contact() {
  return (
    <GridItem
      backgroundColor={`${green}`}
      color={`${beige}`}
      gridAutoRows="100vh"
    >
      <WhatsappForm />
    </GridItem>
  );
}
export default Contact;
