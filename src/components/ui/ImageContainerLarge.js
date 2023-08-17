
import { Image } from "@chakra-ui/react";
import {React} from "react";
import thin from "../../assets/images/thinLineEllipse.svg";
import thick from "../../assets/images/thickLineEllipse.svg";
import ellipse from "../../assets/images/tintedEllipse.svg";
// import {ellipse} from "../assets/images/tintedEllipse.svg";
// import { MaskedImage } from "../assets/constants/styledcomponents";
// import img from "./../assets/images/girl-nobg.png";


 function ImageContainerLarge() {
    return (
        <>
            <Image
            src={`${thin}`}
            alt=""
            width="56%"
            position={"relative"}
            minWidth="175px"
          />
          <Image
            src={`${thick}`}
            alt=""
            position={"absolute"}
            width="26%"
            minWidth="200px"
          />
          <Image
            src={`${ellipse}`}
            position={"absolute"}
            width="20%"
            // height="300px"
            minWidth={"156px"} 
          />
        </>
    );
}
export default ImageContainerLarge;