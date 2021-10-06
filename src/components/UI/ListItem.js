import React from "react";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const itemClickHandler = (e) => {
    if (props.info.type === "templates")
      props.onTemplatesItemClick(props.object);
    if (props.info.type === "companies")
      props.onCompaniesItemClick(props.object);
    if (props.info.type === "guests") props.onGuestsItemClick(props.object);
  };
  return (
    <li
      onClick={itemClickHandler}
      className={`${styles.list_item}`}
      style={
        props.isSelected ? { backgroundColor: "rgba(101, 172, 172, 1)" } : null
      }
    >
      {props.children}
    </li>
  );
};

export default ListItem;
