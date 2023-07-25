// import { Box } from "@chakra-ui/react";
import {React} from "react";


// import ellipse from "./../assets/images/tintedEllipse.svg";
// import img from "./../assets/images/girl-nobg.png";
import {PersonDiv, PersonCircle, PersonImage} from '../assets/constants/styledcomponents'

 function EllipseImgBackground() {
  return (
    <PersonDiv>
      {/* <PersonContainer /> */}
      <PersonCircle />
      <PersonImage  />
    </PersonDiv>
  );
}
export default EllipseImgBackground;