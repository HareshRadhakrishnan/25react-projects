import React, { useEffect, useState } from "react";
import "./styles.css";
export default function ScrollIndicator({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrolledPercentage, setScrolledPercentage] = useState(0);
  const [totalScrollHeight, setTotalScrollHeight] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      data && data.products && data.products.length > 0
        ? setProducts(data.products)
        : null;
      setLoading(false);
    } catch (err) {
      setErrorMsg(err);
      console.log(err);
    }
  }

  window.addEventListener("scroll", () => {
    const elementHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrolled = (window.scrollY / elementHeight) * 100;
    setScrolledPercentage(scrolled);
  });
  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div>
      <div>
        <div className="floating-bar">
          <h1>Scroll to view the Products</h1>
          <div className="progressbar-container">
            <div
              className="progressbar"
              style={{ width: `${scrolledPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="products">
          {products && products.length > 0 ? (
            products.map((item) => {
              return <p>{item.title}</p>;
            })
          ) : loading ? (
            <p>Please wait! loading the data</p>
          ) : (
            <p>No Products to load</p>
          )}
        </div>
      </div>
    </div>
  );
}
