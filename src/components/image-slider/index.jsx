import React, { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import "./styles.css";
export default function ImageSlider({ url, page = 1, length = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function FetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${length}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err);
      setLoading(true);
    }
  }
  useEffect(() => {
    url !== "" ? FetchImage(url) : null;

    if (loading) {
      return <div>loading Data Please Wait for a Moment</div>;
    }
    if (errorMsg) {
      return (
        <div>
          Error Occured <br /> {errorMsg}
        </div>
      );
    }
  }, [url]);
  function HandleNext() {
    currentSlide === images.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  }
  function HandlePrevious() {
    currentSlide === 0
      ? setCurrentSlide(images.length - 1)
      : setCurrentSlide(currentSlide - 1);
  }
  return (
    <center>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={HandlePrevious}
        />
        {images && images.length > 0
          ? images.map((imageItem, index) => {
              return (
                <img
                  className={
                    currentSlide === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                  key={index}
                  src={imageItem.download_url}
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={HandleNext}
        />
        <span className="circle-indicators">
          {images && images.length > 0
            ? images.map((imageItem, index) => {
                return (
                  <button
                    style={{
                      width: "15px",
                      height: "15px",
                      padding: 0,
                      "border-radius": "50%",
                      margin: "0 0.1rem",
                    }}
                    onClick={() => {
                      setCurrentSlide(index);
                    }}
                    key={index}
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive"
                    }
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </center>
  );
}
