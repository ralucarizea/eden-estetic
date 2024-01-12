import { Flex } from "@chakra-ui/react";
import { React } from "react";
import styled from "@emotion/styled";
// import thin from "./../assets/images/thinLineEllipse--beige.svg";
// import thick from "./../assets/images/thickLineEllipse-beige.svg";
// import ellipse from "../assets/images/tintedEllipse--beige.svg";
// import {ellipse} from "../assets/images/tintedEllipse.svg";
// import { MaskedImage } from "../assets/constants/styledcomponents";
// import img from "./../assets/images/girl-nobg.png";
const ThinLineEllipse = styled.div`
  border-radius: 50%;
  border: 0.5px solid ${(props) => props.primaryColor};
  opacity: 0.6;
  width: ${(props) => props.maxWidth};
  height: ${(props) => props.maxHeight};
  rotate: -18deg;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: transform 0.25s ease-in-out; /* Add a transition for smooth rotation */
  &:hover {
    transform: rotate(35deg); /* Rotate by 4 more degrees on hover */
  }
`;

const StyledButton = styled.button`
 
  color: ${(props) => props.primaryColor};
  font-family: "Montserrat",serif;
  font-size: 20px;
  z-index: 2;
  font-weight: 600;
  line-height: 22px;


  @media only screen and (max-width: 1250px) {
    font-size: 16.5px;
    line-height: 18px;

  }

  @media only screen and (max-width: 768px) {
    font-size: 14.25px;
    line-height: 16px;

  }
  @media only screen and (max-width: 600px) {
    font-size: 13.75px;
    line-height: 15px;
  
  }
  
  }
`;
function ButtonEllipse({
  primaryColor,
  secondaryColor,
  textCTA,
  maxWidth,
  maxHeight,
  fontSize,
  ...rest
}) {
  return (
    <>
      <Flex
      alignSelf="center"
        position="relative"
        justifyContent="center"
        width={{
          base: "100px",
          sm: "120px",
          md: "160px",
          lg: "180px",
          xl: "220px",
        }}
        height={{
          base: "28px",
          sm: "24px",
          md: "38px",
          lg: "50px",
          xl: "65px",
        }}
      >
        <StyledButton {...rest} secondaryColor={secondaryColor}>
          {textCTA}
          <ThinLineEllipse maxHeight={maxHeight} maxWidth={maxWidth} />
        </StyledButton>
      </Flex>
      {/* </TintedEllipse> */}
    </>
  );
}
export default ButtonEllipse;
