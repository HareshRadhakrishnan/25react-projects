import React from "react";
import MenuItem from "./menu-item";

export default function MenuList({ menu = [] }) {
  return (
    <ul>
      <div className="menu-list-container">
        {menu && menu.length ? (
          menu.map((i) => <MenuItem item={i} />)
        ) : (
          <p>No menu Items Found</p>
        )}
      </div>
    </ul>
  );
}
