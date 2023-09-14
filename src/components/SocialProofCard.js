import React from "react";
import {
  Persona,
  Name,
  ProfilePic,
  Caption,
} from "../assets/constants/styledcomponents";
import "../assets/fonts/fonts.css";

export default function SocialProofCard({ name, thumbnail, reviewText }) {
  return (
    <Persona>
      <Name>{name}</Name>
      <ProfilePic src={thumbnail} />
      <Caption>{reviewText}</Caption>
    </Persona>
  );
}
