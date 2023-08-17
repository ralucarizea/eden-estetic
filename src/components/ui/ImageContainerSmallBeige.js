
import { Image } from "@chakra-ui/react";
import {React} from "react";
// import styled from "@emotion/styled";
import thin from "../../assets/images/thinLineEllipse--beige.svg";
import ellipse from "../../assets/images/tintedEllipse--beige.svg";


export default function ImageContainerSmallBeige() {
    return (
        <>
            <Image
            src={`${thin}`}
            alt=""
            width="22%"
            position={"relative"}
            minWidth="200px"
          />
          <Image
            src={`${ellipse}`}
            alt=""
            position={"absolute"}
            width="12%"
            minWidth={"180px"}
          />
        </>
    );
}