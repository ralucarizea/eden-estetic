
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
            width={{ base: "75%", sm:"65%", md: "60%", lg: "85%" }}
            position={"relative"}
            minWidth={{ base: "18.5vw", sm:"18.5vw", md: "58%", lg: "70%" }}
          />
          <Image
            src={`${thick}`}
            alt=""
            position={"absolute"}
            width={{ base: "25%", sm:"22%", md: "23%", lg: "24.5%" }}
            minWidth={{ base: "18.5vw", sm:"25.5vw", md: "21%", lg: "20%" }}
          />
          <Image
            src={`${ellipse}`}
            position={"absolute"}
            width={{ base: "20%", sm:"20%", md: "18%", lg: "19.5%" }}
            // height="300px"
            minWidth={{ base: "17%", sm:"15%", md: "15%", lg: "19%" }}
          />
        </>
    );
}
export default ImageContainerLarge;