
import { Image } from "@chakra-ui/react";
import {React} from "react";
// import styled from "@emotion/styled";
import thin from "./../assets/images/thinLineEllipse.svg";
import ellipse from "./../assets/images/tintedEllipse.svg";


export default function ImageContainerSmall() {
    return (
        <>
            <Image
            src={`${thin}`}
            alt=""
            width="21%"
            position={"relative"}
            minWidth="200px"
          />
          <Image
            src={`${ellipse}`}
            alt=""
            position={"absolute"}
            width="12.5%"
            minWidth={"184px"}
          />
        </>
    );
}