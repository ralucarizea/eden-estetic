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
  width: ${(props) => props.maxWidth}px;
  height: ${(props) => props.maxHeight}px;
  rotate: -18deg;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: transform 0.25s ease-in-out; /* Add a transition for smooth rotation */
  // &:hover {
  //   transform: rotate(35deg); /* Rotate by 4 more degrees on hover */
  // }
`;
// const TintedEllipse = styled.div`
//   border-radius: 50%;
//   background: ${(props) => props.primaryColor};
//   width: ${(props) => props.maxWidth}px;
//   height: ${(props) => props.maxHeight}px;
//   rotate: -8deg;
//   position: relative;
//   align-self: center;
//   margin: 0px;
//   opacity: 0.8;
// `;

const StyledButton = styled.button`
 
  color: ${(props) => props.primaryColor};
  font-family: "Montserrat",serif;
  font-size: ${(props) => props.fontSize}px;
  z-index: 2;
  
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
      {/* // <TintedEllipse
    //   primaryColor={primaryColor}
    //   maxHeight={maxHeight}
    //   maxWidth={maxWidth}
    // > */}
      <Flex
        position="relative"
        // border="1px solid red"
        width="auto"
        height="10vh"
        justifyContent="center"
      >
        <StyledButton
          {...rest}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        >
          {textCTA}
          <ThinLineEllipse maxHeight={maxHeight} maxWidth={maxWidth} />
        </StyledButton>
      </Flex>
      {/* </TintedEllipse> */}
    </>
  );
}
export default ButtonEllipse;
