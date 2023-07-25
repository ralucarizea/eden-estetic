import styled from "@emotion/styled";
// import ellipse from "../images/tintedEllipse.svg";

export const AccordionBox = styled.div`
  flex: 1;
  text-align: left;
  font-weight: 500;
  letter-spacing: -1px;
`;

export const CaptionBox = styled.div`
  padding: 24px 44px;
  width: 28%;
  height: inherit;
  border-right: 1px solid #6c8a96;
  &:last-child {
    border-right: 0px;
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
  background-color: #6c8a96;
  color: #f3eee7;
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
  display:grid;
  justify-content:center;
  align-items:end;
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
  width: 24px;
  height: 24px;
  background-color: #6c8a96;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const StatNumbers = styled.div`
  padding-top: 28px;
  font-size: 48px;
  font-family: "RollgatesLuxury";
  // font-weight: 200;
  font-style: normal;
`;
export const StatDescriber = styled.div`
  margin-top: -12px; 
  font-size: 24px;
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1px;
`;
export const ServiceGridItem = styled.div`
  padding: 32px 64px 32px 80px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const ImageWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
`;
export const ServiceTitle = styled.p`
  padding-bottom: 28px;
  font-size: 44px;
  line-height: 30px;
  font-family: "RollgatesLuxury";
`;
export const NavbarButtonBox = styled.div`
width: 12%;
border-left: 1px solid #f3eee7;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 17px;
`;

export const Persona = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 124px);
  grid-template-rows: 1fr 3fr;
  border: 1.5px solid #6c8a96;
  padding: 36px 64px 0px 64px;
`;
export const Name = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  // border-bottom: 1px solid #6c8a96;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 22px;
`;
export const ProfilePic = styled.div`
  width: 92px;
  height: 92px;
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
`;