import React from "react";
import { ImHome } from "react-icons/im";

export default function BackToHome() {
  return (
    <a href="/">
      <ImHome
        style={{
          position: "fixed",
          bottom: "40px",
          left: "40px",
          "box-shadow": "2px 2px 3px #999",
          "border-radius": "50px",
          color: "ade8f4",
          padding: "0.6rem",
        }}
        size={40}
      />
    </a>
  );
}
