import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import QrGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import CustomTabs from "./components/custom-tabs";
import TestModal from "./components/custom-modal";
import GitProfileSearch from "./components/fetch-github-user";
import SearchCompletion from "./components/search-complete";
import TicTacToe from "./components/tic-tac-toe";
import MainGrid from "./components/main-grid";
import { Routes, Route } from "react-router-dom";
import BackToHome from "./components/back-to-home";
function App() {
  return (
    <>
      {/* image Slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} length={10} /> */}

      {/* Load More data - batch by batch fetching */}
      {/* <LoadMoreData /> */}

      {/* Tree view coponent a recursive UI component */}
      {/* <TreeView /> */}

      {/* QR code Generator */}
      {/* <QrGenerator /> */}

      {/* Dark and Light theme switching with a custom hook */}
      {/* <LightDarkMode /> */}

      {/* indicator that allows user to see the scrolling depth */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tab switching component */}
      {/* <CustomTabs /> */}

      {/* modal componnet to open over the webpage */}
      {/* <TestModal /> */}

      {/* a component uses Github api to fetch and load user profile */}
      {/* <GitProfileSearch /> */}

      {/* auto suggession on search */}
      {/* <SearchCompletion /> */}

      {/* double player tic tac toe game */}
      {/* <TicTacToe /> */}
      <BackToHome />
      <Routes>
        <Route path="/" element={<MainGrid />} exact></Route>
        <Route path="/Accordian" element={<Accordian />}></Route>
        <Route path="/RandomColor" element={<RandomColor />}></Route>
        <Route path="/StarRating" element={<StarRating starLen={10} />}></Route>
        <Route
          path="/ImageSlider"
          element={<ImageSlider url={"https://picsum.photos/v2/list"} />}
        ></Route>
        <Route path="/LoadMoreData" element={<LoadMoreData />}></Route>
        <Route path="/QrGenerator" element={<QrGenerator />}></Route>
        <Route path="/LightDarkMode" element={<LightDarkMode />}></Route>
        <Route path="/TreeView" element={<TreeView />}></Route>
        <Route
          path="/ScrollIndicator"
          element={
            <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
          }
        ></Route>
        <Route path="/TestModal" element={<TestModal />}></Route>
        <Route path="/GitProfileSearch" element={<GitProfileSearch />}></Route>
        <Route path="/SearchCompletion" element={<SearchCompletion />}></Route>
        <Route path="/TicTacToe" element={<TicTacToe />}></Route>
        <Route path="/CustomTabs" element={<CustomTabs />}></Route>
      </Routes>
    </>
  );
}

export default App;
