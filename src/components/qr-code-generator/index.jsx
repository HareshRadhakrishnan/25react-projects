import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";
export default function QrGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  function HandleClick() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="container">
      <span className="form">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder="Input Your text here"
          name="qr-input"
        ></input>
        <button disabled={input ? false : true} onClick={HandleClick}>
          Generate
        </button>
      </span>

      <QRCode value={qrCode} size={400} color="white" />
    </div>
  );
}
