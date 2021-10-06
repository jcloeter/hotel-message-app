import React from "react";
import styles from "./Message.module.css";
import CalculatedMessage from "./CalculatedMessage";

const Message = (props) => {
  return (
    <>
      <div className={styles.result_message}>
        <div className={styles.message}>
          <CalculatedMessage messageObject={props.messageObject} />
        </div>
      </div>
    </>
  );
};

export default Message;
