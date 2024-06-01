import React, { useState } from "react";
import "./styles.css";
export default function Tabs({ contents, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  console.log(contents);
  function HandleClick(itemIndex) {
    setCurrentTabIndex(itemIndex);
    onChange(currentTabIndex);
  }
  return (
    <div>
      <div className="main">
        <div className="tab-navigation">
          {contents && contents.length > 0
            ? contents.map((item, index) => {
                return (
                  <div
                    onClick={() => HandleClick(index)}
                    key={index}
                    className="tab"
                    isActive={currentTabIndex === index ? "active" : null}
                  >
                    <h3> {item.label}</h3>
                  </div>
                );
              })
            : null}
        </div>
        <div className="current-tab">{contents[currentTabIndex].content}</div>
      </div>
    </div>
  );
}
