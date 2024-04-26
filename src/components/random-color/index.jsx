import React from "react";
import { useState, useEffect } from "react";
export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setcolor] = useState("#000000");
  useEffect(() => {
    colorType === "hex" ? HandleHexColor() : HandleRGBColor();
  }, [colorType]);
  function RandomUtility(len) {
    return Math.floor(Math.random() * len);
  }
  function HandleHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    var generatedHex = "#";
    for (let i = 0; 6 > i; i++) {
      generatedHex += hex[RandomUtility(16)];
    }
    setcolor(generatedHex);
  }
  function HandleRGBColor() {
    const r = RandomUtility(256);
    const g = RandomUtility(256);
    const b = RandomUtility(256);
    setcolor(`rgb(${r},${g},${b})`);
  }
  return (
    <div style={{ "background-color": color, width: "100vw", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          color: "white",
          "padding-top": "30vh",
          "flex-direction": "column",
        }}
      >
        <div>
          <h1>Generated {colorType === "hex" ? "HEX" : "RGB"} Color</h1>
          <h1>{color}</h1>
        </div>
        <div>
          <button onClick={() => setColorType("hex")}>
            Generate Hex Color
          </button>
          <button onClick={() => setColorType("rgb")}>
            Generate RGB Color
          </button>
          <button
            onClick={colorType === "hex" ? HandleHexColor : HandleRGBColor}
          >
            Generate Random Color
          </button>
        </div>
      </div>
    </div>
  );
}
