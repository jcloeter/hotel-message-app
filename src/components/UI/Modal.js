import React, { useState } from "react";
import styles from "./Modal.modules.css";
import Button from "./Button";

const Modal = (props) => {
  const [textValue, setTextValue] = useState("");

  const textChangeHandler = (e) => {
    setTextValue(e.target.value.trim());
  };

  const submitTemplateHandler = () => {
    console.log(textValue);
    props.onCloseModal();
    props.onSubmitNewTemplate(textValue);
  };
  return (
    <>
      <div class="overlay" onClick={props.onCloseModal}>
        Overlay
      </div>
      <div class="modal">
        <h4>Custom Greeting Template</h4>
        <form onSubmit={submitTemplateHandler}>
          <textarea
            class="text_area"
            // value={textValue}
            onChange={textChangeHandler}
            placeholder="Start typing to make a template. To use variables and make the template reusable, enter the uppercase words below to use their value.

          Example: 'Good **TIME** **FIRSTNAME**.' => 'Good afternoon Sarah.'"
          ></textarea>
          <ul class="modal_instructions">
            <li>
              <span class="variable">**FIRSTNAME**</span>- First name of
              customer
            </li>
            <li>
              <span class="variable">**LASTNAME**</span>- Last name of customer
            </li>
            <li>
              <span class="variable">**COMPANY**</span>- Name of hotel or
              company
            </li>
            <li>
              <span class="variable">**CITY**</span>- Name of city that the
              company is located in{" "}
            </li>
            <li>
              <span class="variable">**TIME**</span>- "Morning", "Afternoon", or
              "Evening" used for greeting
            </li>
            <li>
              <span class="variable">**STARTDAY**</span>- Day of week that
              customer arrives
            </li>
            <li>
              <span class="variable">**ENDDAY**</span>- Day of week that
              customer leaves
            </li>
          </ul>
          {/* <button class="btn_modal">Create</button> */}
          <Button className="btn_modal" type="submit">
            Create
          </Button>
        </form>
      </div>
    </>
  );
};

export default Modal;
