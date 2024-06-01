import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ starLen = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function HandleClick(currentIndex) {
    setRating(currentIndex);
  }

  function HandleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  function HandleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-container">
      {[...Array(starLen)].map((_, index) => {
        index += 1;
        console.log(index);
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => HandleClick(index)}
            onMouseMove={() => HandleMouseEnter(index)}
            onMouseLeave={() => HandleMouseLeave()}
            size={50}
          />
        );
      })}
    </div>
  );
}
