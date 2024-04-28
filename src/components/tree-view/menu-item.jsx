import React, { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [currentChildToggle, setcurrentChildToggle] = useState(false);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item.children && item.children.length ? (
          <span
            onClick={() => {
              setcurrentChildToggle(!currentChildToggle);
            }}
          >
            {currentChildToggle ? "-" : "+"}
          </span>
        ) : null}
        {item.children && item.children.length && currentChildToggle ? (
          <MenuList menu={item.children} />
        ) : null}
      </div>
    </li>
  );
}
