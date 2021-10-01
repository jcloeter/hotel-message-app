import React from "react";
import Card from "../UI/Card";
import styles from "./Companies.module.css";

const Companies = () => {
  return (
    <Card className={styles.companies}>
      <h4>Companies</h4>
      <ul>
        <li>
          <div>
            <strong>The Grand Budapest Hotel</strong>
          </div>
          <div>Republic of Zubrowka</div>
        </li>
        <li>
          <div>The Grand Budapest Hotel</div>
          <div>Republic of Zubrowka</div>
        </li>
        <li>
          <div>The Grand Budapest Hotel</div>
          <div>Republic of Zubrowka</div>
        </li>
        <li>
          <div>The Grand Budapest Hotel</div>
          <div>Republic of Zubrowka</div>
        </li>
      </ul>
    </Card>
  );
};

export default Companies;
