import React from "react";
import { StyledImageSlider } from "../assets/styles/StyledImageSlider";
import { IMAGE_BASE_URL } from "../../config";

const ImageSlider = ({ image, title, text }) => (
  <StyledImageSlider image={`${IMAGE_BASE_URL}`} title={``} text={``}>
    <div className="image-content">
      <div className="image-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </StyledImageSlider>
);
export default ImageSlider;
