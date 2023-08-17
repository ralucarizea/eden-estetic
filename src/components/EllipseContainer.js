import React from "react";
import styled from "@emotion/styled";

const EllipseContainerWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  transform: rotate(${(props) => props.rotationDegrees}deg);
  position: absolute;
  //   display: inline-block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto 0;
`;

const EllipseContainer = ({
  rotationDegrees,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <EllipseContainerWrapper
      rotationDegrees={rotationDegrees}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    />
  );
};

export default EllipseContainer;
