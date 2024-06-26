import React from "react";
import MenuList from "./menu-list";
import menus from "./data";
import "./styles.css";
export default function TreeView() {
  return (
    <div className="tree-view-container">
      <MenuList menu={menus} />
    </div>
  );
}
