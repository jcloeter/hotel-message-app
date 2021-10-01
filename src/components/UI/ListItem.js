import React from "react";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <li className={`${styles.list_item} ${props.className}`}>
      {props.children}
    </li>
  );
};

export default ListItem;
