import React from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import styles from "./Companies.module.css";

const Companies = () => {
  return (
    <Card className={styles.companies}>
      <h4>Companies</h4>
      <ul>
        <ListItem>
          <div>
            <strong>The Grand Budapest Hotel</strong>
          </div>
          <div>Republic of Zubrowka</div>
        </ListItem>
        <ListItem>
          <div>
            <strong>The Grand Budapest Hotel</strong>
          </div>
          <div>Republic of Zubrowka</div>
        </ListItem>
        <ListItem>
          <div>
            <strong>The Grand Budapest Hotel</strong>
          </div>
          <div>Republic of Zubrowka</div>
        </ListItem>
        <ListItem>
          <div>
            <strong>The Grand Budapest Hotel</strong>
          </div>
          <div>Republic of Zubrowka</div>
        </ListItem>
        <ListItem>
          <div>
            <strong>The Grand Budapest Hotel</strong>
          </div>
          <div>Republic of Zubrowka</div>
        </ListItem>
      </ul>
    </Card>
  );
};

export default Companies;
