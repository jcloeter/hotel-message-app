import React, { useState } from "react";
import styles from "./Modal.modules.css";
import Button from "./Button";

const Modal = (props) => {
  const [textValue, setTextValue] = useState("");

  const textChangeHandler = (e) => {
    setTextValue(e.target.value.trim());
  };

  const submitTemplateHandler = (e) => {
    e.preventDefault();
    if (!textValue) return;
    props.onCloseModal();
    props.onSubmitNewTemplate(textValue);
  };
  return (
    <>
      <div className="overlay" onClick={props.onCloseModal}>
        Overlay
      </div>
      <div className="modal">
        <h4>Custom Greeting Template</h4>
        <form onSubmit={submitTemplateHandler}>
          <textarea
            className="text_area"
            onChange={textChangeHandler}
            placeholder='Start typing to make a template. To use variables and make the template reusable, enter the uppercase words below to use their value.

          Example: "Good **TIME** **FIRSTNAME**." => "Good afternoon Sarah."'
          ></textarea>
          <ul className="modal_instructions">
            Variables:
            <li>
              <span className="variable">**FIRSTNAME**</span>- First name of
              customer
            </li>
            <li>
              <span className="variable">**LASTNAME**</span>- Last name of
              customer
            </li>
            <li>
              <span className="variable">**COMPANY**</span>- Name of hotel or
              company
            </li>
            <li>
              <span className="variable">**CITY**</span>- Name of city that the
              company is located in{" "}
            </li>
            <li>
              <span className="variable">**TIME**</span>- "Morning",
              "Afternoon", or "Evening" used for greeting
            </li>
            <li>
              <span className="variable">**STARTDAY**</span>- Day of week that
              customer arrives
            </li>
            <li>
              <span className="variable">**ENDDAY**</span>- Day of week that
              customer leaves
            </li>
          </ul>
          <Button className="btn_modal" type="submit">
            Create
          </Button>
        </form>
      </div>
    </>
  );
};

export default Modal;
