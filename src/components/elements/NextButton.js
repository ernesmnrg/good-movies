import React from "react";
import { StyleNextButton } from "../assets/styles/StyledNextButton";

export const NextButton = ({ text, callback }) => (
  <StyleNextButton type="button" onClick={callback}>
    Load
  </StyleNextButton>
);

export default NextButton;
