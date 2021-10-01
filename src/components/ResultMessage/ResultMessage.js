import React from "react";
import Card from "../UI/Card";
import styles from "./ResultMessage.module.css";

const ResultMessage = () => {
  return (
    <div>
      <div className={styles.result_message}>
        <h4>Message</h4>
        <div className={styles.message}>
          Good TIMEGREETING FIRSTNAME and welcome to THEHOTEL. Please enjoy your
          stay.
        </div>
      </div>
    </div>
  );
};

export default ResultMessage;
