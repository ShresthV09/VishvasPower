import React from "react";
import './FWSCarousel.css';
import leftArrow from "./left-arrow.png";
import rightArrow from "./right-arrow.png";


export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
      <div className="ButtonRR">
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="button" />
      </button>
      </div>
    );
}
  