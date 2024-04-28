import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
function App() {
  return (
    <>
      {/* Accoridan Component */}
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating starLen={10} /> */}

      {/* image Slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} length={10} /> */}

      {/* Load More data - batch by batch fetching */}
      <LoadMoreData />
    </>
  );
}

export default App;
