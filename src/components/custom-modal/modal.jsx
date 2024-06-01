import React from "react";
import "./modal.css";
export default function Modal({ id, header, body, footer, onClose }) {
  console.log("this is headr", header);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div className="floating-box" key={id ? id : "modal"}>
        <p className="btn-close" onClick={() => onClose()}>
          x
        </p>
        <div>{header ? header : <h1>Header</h1>}</div>
        <div>{body ? body : <h2>this is Body Element</h2>}</div>
        <div>{footer ? footer : <h2>this is footer Element</h2>}</div>
      </div>
    </div>
  );
}
