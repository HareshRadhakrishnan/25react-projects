import React, { useState } from "react";
import Modal from "./modal";

export default function TestModal() {
  const [isOpen, setIsOpen] = useState(false);

  function HandleClose() {
    setIsOpen(!isOpen);
  }

  return (
    <div style={{ "margin-top": "30vh" }}>
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      <div>
        {isOpen ? (
          <Modal
            header={
              <div>
                <h1>Subscribe to News letter</h1>
              </div>
            }
            body={
              <div>
                <input
                  type="text"
                  placeholder="Type your Email(eg:Haresh@Gmail.com)"
                />
                <button>Submit</button>
              </div>
            }
            footer={
              <div>
                <p>Contact us</p>
                <p>phone: 94762248365</p>
              </div>
            }
            onClose={HandleClose}
          />
        ) : null}
      </div>
    </div>
  );
}
