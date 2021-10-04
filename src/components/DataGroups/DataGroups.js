import React, { useState } from "react";
import Templates from "./Templates";
import Guests from "./Guests";
import Companies from "./Companies";
import styles from "./DataGroup.module.css";

const DataGroups = (props) => {
  const [selectedItems, setSelectedItems] = useState({
    guests: "",
    companies: "",
    templates: "",
  });

  //Trying to make a function that only updates the changed key
  const selectedItemChangeHandler = (obj, type) => {
    console.log(type);
    if (type === "guests") {
      setSelectedItems(() => {
        return { ...selectedItems, guests: obj };
      });
      props.onObjectChange({ ...selectedItems, guests: obj });
    }

    if (type === "companies") {
      setSelectedItems(() => {
        return { ...selectedItems, companies: obj };
      });
      props.onObjectChange({ ...selectedItems, companies: obj });
    }

    if (type === "templates") {
      setSelectedItems(() => {
        return { ...selectedItems, templates: obj };
      });
      props.onObjectChange({ ...selectedItems, templates: obj });
    }
  };
  return (
    <div className={styles.data_group}>
      <Templates onSelectedChange={selectedItemChangeHandler} />
      <Companies onSelectedChange={selectedItemChangeHandler} />
      <Guests onSelectedChange={selectedItemChangeHandler} />
    </div>
  );
};

export default DataGroups;
