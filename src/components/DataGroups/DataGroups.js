import React, { useState, useEffect } from "react";
import Templates from "./Templates";
import Guests from "./Guests";
import Companies from "./Companies";
import styles from "./DataGroup.module.css";
// import { useEffect } from "react/cjs/react.development";

const DataGroups = (props) => {
  const [selectedItems, setSelectedItems] = useState({
    guests: "",
    companies: "",
    templates: "",
  });

  //Destructuring props so we can add funct as dependency:
  const { onObjectChange } = props;
  useEffect(() => {
    onObjectChange(selectedItems);
  }, [selectedItems, onObjectChange]);

  let resultObj = { guests: "", companies: "", templates: "" };

  const selectedItemChangeHandler = (obj, type) => {
    if (type === "guests") {
      resultObj.guests = obj;
      setSelectedItems(() => {
        return { ...selectedItems, guests: obj };
      });
    }

    if (type === "companies") {
      resultObj.companies = obj;

      setSelectedItems(() => {
        return { ...selectedItems, companies: obj };
      });
    }

    if (type === "templates") {
      resultObj.templates = obj;
      setSelectedItems(() => {
        return { ...selectedItems, templates: obj };
      });
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
