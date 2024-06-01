import React from "react";
import "./styles.css";
export default function Tile({ whenClicked, value, index }) {
  return (
    <div onClick={() => whenClicked(index)} key={index} className="tile">
      <span>{value}</span>
    </div>
  );
}
