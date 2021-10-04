import React from "react";
import Card from "../UI/Card";
import styles from "./ResultMessage.module.css";

const ResultMessage = (props) => {
  console.log(props.messageObject);
  return (
    <div>
      <div className={styles.result_message}>
        <h2>Message</h2>
        <div className={styles.message}>
          Good TIMEGREETING FIRSTNAME and welcome to THEHOTEL. Please enjoy your
          {props.messageObject.message}
        </div>
      </div>
    </div>
  );
};

export default ResultMessage;
