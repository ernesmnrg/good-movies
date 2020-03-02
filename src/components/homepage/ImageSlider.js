import React from "react";
import "../../assets/styles/_imagesliders.css";

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider" id="slider">
        <figure>
          <img src={require("../../assets/images/slider/slider1.jpg")} />
          <img src={require("../../assets/images/slider/slider2.jpg")} />
          <img src={require("../../assets/images/slider/slider3.jpg")} />
        </figure>
      </div>
    </div>
  );
};

export default ImageSlider;
