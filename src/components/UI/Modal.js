import React from "react";
import styles from "./Modal.modules.css";

const Modal = () => {
  const closeModalHandler = () => {
    console.log("closing modal");
  };
  return (
    <>
      <div class="overlay" onClick={closeModalHandler}>
        Overlay
      </div>
      <div class="modal">
        <h4>Custom Greeting Template</h4>
        <textarea
          class="text_area"
          placeholder="Start typing to make a template. To use variables and make the template reusable, enter the uppercase words below to use their value.

          Example: 'Good TIME FIRSTNAME.' => 'Good afternoon Sarah.'"
        ></textarea>
        <ul class="modal_instructions">
          <li>
            <span class="variable">FIRSTNAME</span>- First name of customer
          </li>
          <li>
            <span class="variable">LASTNAME</span>- Last name of customer
          </li>
          <li>
            <span class="variable">COMPANY</span>- Name of hotel or company
          </li>
          <li>
            <span class="variable">CITY</span>- Name of city that the company is
            located in{" "}
          </li>
          <li>
            <span class="variable">TIME</span>- "Morning", "Afternoon", or
            "Evening" used for greeting
          </li>
        </ul>
        <button class="btn_modal">Create</button>
      </div>
    </>
  );
};

export default Modal;
