import React from "react";
import Register from "../AuthenticationPages/Register";
import "./Modal.css";

export const Modal = (Props) => {

  return (
    <div className="modal_back">
      <div className="m">
        <span className="close" onClick={Props.show}>
          x
        </span>
        <Register/>
      </div>
    </div>
  );
};
