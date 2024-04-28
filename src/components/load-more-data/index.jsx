import React, { useEffect, useState } from "react";
import "./styles.css";
export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0); //num of times load more buttom get clicked

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setProducts((prevlist) => {
          return [...prevlist, ...data.products];
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      return <h2>error occured: {err}</h2>;
    }
  }
  useEffect(() => {
    fetchProducts();

    if (loading) {
      return <div>Loading Data! please wait</div>;
    }
  }, [count]);

  return (
    <div className="load-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => {
              return (
                <>
                  <div className="product-card">
                    <img src={item.thumbnail} alt={item.description} />
                    <p>{item.title}</p>
                  </div>
                </>
              );
            })
          : null}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          disabled={count === 5 ? true : false}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
