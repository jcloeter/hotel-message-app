import React from "react";
import styles from "./Modal.modules.css";

const Modal = () => {
  return (
    <>
      <div class="overlay">Overlay</div>
      <div class="modal">
        <h4>Create Custum Greeting Template</h4>
        <textarea
          class="text_area"
          placeholder="Start typing to make a template. To use variables and make the template reusable, enter the uppercase words below to use their value. "
        ></textarea>
        <button>Create</button>
      </div>
    </>
  );
};

export default Modal;
