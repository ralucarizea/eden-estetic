import styled from "@emotion/styled";
import { beige, green } from "./constants";
// import ellipse from "../images/tintedEllipse.svg";

export const AccordionBox = styled.div`
  flex: 1;
  text-align: left;
  font-weight: 500;
  letter-spacing: -1px;
  // font-size: 15px;
`;

export const CaptionBox = styled.div`
  padding: 24px 44px;
  width: 28%;
  height: inherit;
  border-right: 1px solid ${green};
  &:last-child {
    border-right: 0px;
    color: red;
  }
`;
export const CaptionHeading = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 8px;
`;
export const CaptionText = styled.p`
  font-size: 14px;
`;
export const CategoryBox = styled.button`
  background-color: ${green};
  color: ${beige};
  padding: 0.5rem;
  margin-left: 0.5rem;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 12px;
  &:first-child {
    margin-left: 0px;
  }
`;

export const PersonDiv = styled.div`
  height: 80vh;
  background-color: aqua;
  margin-inline: auto;
  margin-bottom: 36px;
  max-width: 24rem;
  display: grid;
  justify-content: center;
  align-items: end;
  position: relative;
`;

export const PersonCircle = styled.div`
  display: block;
  background-color: blue;
  width: 100%;
  height: 60%;

  position: absolute;
  z-index: 2;
  margin-inline: auto;
  bottom: -54px;
  clip-path: ellipse(19% 32% at 50% 51%);
  rotate: 12deg;
`;
export const PersonImage = styled.img`
  display: block;
  max-width: 14rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;
export const Question = styled.div`
  text-align: left;
  font-size: 20px;
`;

export const IconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
  background-color: ${green};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 16px;
`;
// export const MaskedImage = styled.div`
//   background-image: url("https://res.cloudinary.com/dgykbnubn/image/upload/v1690194168/edenestetic/mainpage-about_em1jvf.png");
//   background-position: center;
//   background-repeat: no-repeat;
//   -webkit-mask-image: url(${ellipse});
//   mask-image: url(${ellipse});
//   mask-size:10vmin;
//   mask-position: bottom;
// `;
export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 8px;
  width: 100%;
  min-width: 35%;
  justify-content: flex-start;
  text-align: center;
`;
export const StatNumbers = styled.div`
  font-size: 2.85vw;
  font-weight: 500;
  font-family: "RollgatesLuxury";
  font-style: normal;
  padding: 4px 0px;
`;
export const StatDescriber = styled.div`
  font-size: inherit;
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.5px;
  text-align: ${(props) => props.textAlign};
  // align-self: center;
`;
export const ServiceGridItem = styled.div`
  padding: 8vw 4vw;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  // background-color: purple;


  @media only screen and (max-width: 1250px) {
    padding: 7vw 3.5vw;
  }

  @media only screen and (max-width: 767px) {
    padding: 10vw;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  // background-color: blue;

  @media only screen and (max-width: 767px) {
    width: 30%;
  }
`;
export const ServiceTitle = styled.p`
  padding-bottom: 1.95vw;
  font-size: 38px;
  line-height: 36px;
  font-family: "RollgatesLuxury";

  @media only screen and (max-width: 1250px) {
    font-size: 32px;
    line-height: 23px;
  }
  @media only screen and (max-width: 990px) {
    font-size: 25px;
    line-height: 20px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 22px;
    line-height: 18px;
    padding-bottom: 3vw;
  }
  @media only screen and (max-width: 440px) {
    font-size: 20px;
    line-height: 16px;
  }
`;
export const NavbarButtonBox = styled.div`
  width: 12%;
  border-left: 0.5px solid ${beige};
  padding: 0px 8px;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: calc(9.5px + 0.390625vw);
  line-height: calc(10px + 0.390625vw);
`;
export const DrawerLinkButtonBox = styled.div`
&:hover {{
  text-decoration: underline;
  font-style: italic;
transition: 210ms ease-in;}}
`;

export const Persona = styled.div`
  height: 50vh;
  width: 36vw;
  margin: 0px 24px;
  border: 1.5px solid ${green};
  padding: 36px 48px 40px 48px;
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-rows: minmax(100px, 1fr) 1fr;
`;
export const Name = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  // border-bottom: 1px solid ${green};
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 28px;
  font-family: "RollgatesLuxury";
  font-style: italic;
`;
export const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  place-self: center;
`;
export const Caption = styled.div`
  padding-top: 16px;
  width: 90%;
  font-family: "Montserrat";
  font-style: normal;
`;

export const Ellipse = styled.img`
  position: absolute;
  width: 20%;
  min-width: 12vw;
  rotate: 356.5deg;
`;
export const DiagnosisHeading = styled.div`
  font-family: "RollgatesLuxury";
  font-size: 42px;
`;
export const DiagnosisCaption = styled.div`
  font-family: "Montserrat";
  letter-spacing: -1px;
  line-height: 26px;
  font-size: 15px;
  padding: 24px 120px 0px 24px;
  position: ${(props) => props.position};
`;
export const DiagnosisNumberedElement = styled.div`
  font-family: "RollgatesLuxury";
  font-size: 220px;
  position: ${(props) => props.position};
  line-height: 0px;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
`;
export const StyledSliderButton = styled.button`
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  border-radius: 50%;
  background: transparent;
  &:hover {{background-color : ${green}; 
            color: ${beige};  
            opacity: 0.8;
            transition: 210ms ease-in;}}
  // &:active {{
  //   background-color : ${beige};
  //           color : ${green}; 
  //           border: 0.5px solid ${green};  
  //           border-radius: 50%;
  //           opacity: 0.8;
  //           }}
`;

// export const CarouselThumb = styled.div`
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   position: ${(props) => props.position};
//   line-height: 0px;
//   left: ${(props) => props.left};
//   right: ${(props) => props.right};
//   top: ${(props) => props.top};
//   transform: ${(props) => props.transform};
// `;

export const ProductPageImageContainer = styled.div`
  margin-bottom: 24px;
  width: 100%;
  height: 60vh;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;
export const LatestBlogArticleLayoutBox = styled.div`
  width: ${(props) => props.width};
  // height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vw 3.5vw;
  @media only screen and (max-width: 953px) {
    padding: 0px 0px 36px 0px;
    max-height: 450px;
    &:first-child {
      border-bottom: 0.5px solid ${green};
    }
  }

  @media only screen and (min-width: 966px) {
    &:nth-child(2n + 1) {
      border-bottom: 0px;
      border-right: 0.5px solid ${green};
    }
  }
`;
export const BlogArticleLayoutBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vw 3.5vw;
  @media only screen and (max-width: 906px) {
    padding: 0px 0px 36px 0px;
    max-height: 450px;
    &:nth-child(n) {
      border-bottom: 0.5px solid ${green};
      border-right: 0px;
    }
  }

  @media only screen and (min-width: 906px) {
    &:nth-child(2n + 1) {
      border-bottom: 0px;
      border-left: 0px;
      border-right: 0.5px solid ${green};
    }
  }
  @media only screen and (min-width: 1377px) {
    &:nth-child(n) {
      border-bottom: 0px;
      border-right: 0px;
    }
    &:nth-child(3n + 2) {
      border-right: 0.5px solid ${green};
      border-left: 0.5px solid ${green};
    }
  }
`;

export const BlogArticleImageBox = styled.div`
  height: ${(props) => props.height};
  border-radius: 12px;
  width: 100%;
  opacity: 0.9;
  // background-color: ${green};
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.srcImage});
`;
export const BlogArticleTitleBig = styled.div`
  font-family: "RollgatesLuxury";
  line-height: calc(24px + 0.790625vw);
  font-size: calc(24px + 0.690625vw);
`;
export const BlogArticleTitleMedium = styled.div`
  font-family: "RollgatesLuxury";
  line-height: calc(16px + 0.790625vw);
  font-size: calc(17px + 0.590625vw);
  margin-left: 4px;
`;
export const BlogArticleTag = styled.div`
  width: fit-content;
  font-size: calc(12.5px + 0.090625vw);
  padding: calc(1.5px + 0.100625vw) calc(3px + 0.290625vw);
  margin: 20px 4px;
  border: 1px solid ${green};
  border-radius: 4px;
`;
