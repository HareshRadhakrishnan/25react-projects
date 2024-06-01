import React from "react";
import data from "../accordian/data";

export default function Suggessions({ data, whenClicked }) {
  return (
    <div>
      <ul>
        {data.map((i, index) => (
          <li
            key={index}
            onClick={() => {
              whenClicked(index);
            }}
          >
            {" "}
            {i}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
