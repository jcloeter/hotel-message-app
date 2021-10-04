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
    console.log("useEffect in Datagroups has run");
    console.log(selectedItems);
    onObjectChange(selectedItems);
  }, [selectedItems, onObjectChange]);

  let resultObj = { guests: "", companies: "", templates: "" };

  const selectedItemChangeHandler = (obj, type) => {
    if (type === "guests") {
      resultObj.guests = obj;
      // props.onObjectChange(resultObj);
      setSelectedItems(() => {
        return { ...selectedItems, guests: obj };
      });
      // props.onObjectChange({ ...selectedItems, guests: obj });
    }

    if (type === "companies") {
      resultObj.companies = obj;
      // console.log(resultObj);
      // props.onObjectChange(resultObj);

      // console.log("selectedItems:");
      // console.log(selectedItems);

      // console.log(selectedItems);
      setSelectedItems(() => {
        return { ...selectedItems, companies: obj };
      });
      // props.onObjectChange({ ...selectedItems, companies: obj });
    }

    if (type === "templates") {
      resultObj.templates = obj;
      console.log("hi");
      setSelectedItems(() => {
        return { ...selectedItems, templates: obj };
      });
      // props.onObjectChange(resultObj);

      // console.log(selectedItems);
      // setSelectedItems(() => {
      //   return { ...selectedItems, templates: obj };
      // });
      // props.onObjectChange({ ...selectedItems, templates: obj });
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
