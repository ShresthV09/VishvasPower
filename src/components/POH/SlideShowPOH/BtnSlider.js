import React from "react";
import './FWSCarousel.css';



export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
      <div className="ButtonRR">
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
          <img src={direction === "next" ? "https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680680924/VishvasWebsite/f2qea1sqg44t7rmsv9gl.png" : "https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680680924/VishvasWebsite/lvxcuffiqdkiqtjru8yi.png"} alt="button" />
      </button>
      </div>
    );
}
  