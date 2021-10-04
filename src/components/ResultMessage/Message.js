import React from "react";
import styles from "./Message.module.css";
import CalculatedMessage from "./CalculatedMessage";

const Message = (props) => {
  //Will need to do some guarding against null/und values
  return (
    <>
      <div className={styles.result_message}>
        <h2>Message</h2>
        <div className={styles.message}>
          <CalculatedMessage messageObject={props.messageObject} />
          {/* {props.messageObject.templates.message} */}
          {/* {props.messageObject.guests.firstName} */}
        </div>
      </div>
    </>
  );
};

export default Message;
