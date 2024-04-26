import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
function App() {
  return (
    <>
      {/* Accoridan Component */}
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      <StarRating starLen={10} />
    </>
  );
}

export default App;
