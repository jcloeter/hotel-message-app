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

  //This probably isnt getting remembered after each state change. How do we get state to be updated like resultObj is? Or should we use resultObj and find a way for it to be remembered?
  let resultObj = { guests: "", companies: "", templates: "" };

  //START HERE: Right now the problem is that state is behind, and we are passing an object that doesnt accurately pass unchanged data
  const selectedItemChangeHandler = (obj, type) => {
    if (type === "guests") {
      resultObj.guests = obj;
      props.onObjectChange(resultObj);
      console.log("selectedItems:");
      console.log(selectedItems);
      // console.log(resultObj);
      // console.log(selectedItems);
      setSelectedItems(() => {
        return { ...selectedItems, guests: obj };
      });
      // props.onObjectChange({ ...selectedItems, guests: obj });
    }

    if (type === "companies") {
      resultObj.companies = obj;
      console.log(resultObj);
      props.onObjectChange(resultObj);

      console.log("selectedItems:");
      console.log(selectedItems);

      // console.log(selectedItems);
      setSelectedItems(() => {
        return { ...selectedItems, companies: obj };
      });
      // props.onObjectChange({ ...selectedItems, companies: obj });
    }

    if (type === "templates") {
      resultObj.templates = obj;
      props.onObjectChange(resultObj);

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
