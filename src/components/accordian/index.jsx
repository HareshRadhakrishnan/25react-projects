import React from "react";
import data from "./data";
import { useState } from "react";
import "./styles.css";
// single selection
// milti selection

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiSelected, setmultiSelected] = useState([]);

  function HandleMultiSelection(id) {
    const selectedItem = data.find((item) => id === item.id).id;
    const newMultiSelected = [...multiSelected];
    const itemIndex = newMultiSelected.indexOf(selectedItem);
    itemIndex === -1
      ? newMultiSelected.push(id)
      : newMultiSelected.splice(itemIndex, 1);
    setmultiSelected(newMultiSelected);
    console.log(newMultiSelected, multiSelected);
    return <></>;
  }
  function HandleSingleSelection(id) {
    const newSelection =
      selected === id ? null : data.find((item) => id === item.id).id;
    setSelected(newSelection);
  }
  // gets the id of the list item and set the item to the State
  function HandleClick(id) {
    enableMultiSelection ? HandleMultiSelection(id) : HandleSingleSelection(id);
  }
  return (
    <>
      <div className="accordian-container">
        <button
          className="selectionToggle"
          onClick={() => setenableMultiSelection(!enableMultiSelection)}
        >
          Enable {enableMultiSelection ? "Single" : " Multi"} Selection
        </button>
        <div className="wrapper">
          <div className="a-container">
            {data && data.length > 0 ? (
              data.map((item) => (
                <>
                  {/* one user clicks, the item will be added to state and renderd */}
                  <div
                    onClick={() => HandleClick(item.id)}
                    className="accordian"
                  >
                    <h3 style={{ width: "100%" }}>{item.question}</h3>
                    <h3
                      style={{
                        flex: "2",
                        width: "100%",
                        "margin-right": "1em",
                      }}
                    >
                      +
                    </h3>
                  </div>
                  {enableMultiSelection ? (
                    multiSelected.indexOf(item.id) !== -1 && (
                      <h4 className="answer">{item.answer}</h4>
                    )
                  ) : item.id === selected ? (
                    <h4 className="answer">{item.answer}</h4>
                  ) : null}
                </>
              ))
            ) : (
              <div>no data found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
