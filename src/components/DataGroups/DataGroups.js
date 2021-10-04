import React, { useEffect } from "react";
import Templates from "./Templates";
import Guests from "./Guests";
import Companies from "./Companies";
import styles from "./DataGroup.module.css";

const DataGroups = (props) => {
  return (
    <div className={styles.data_group}>
      <Templates />
      <Companies />
      <Guests />
    </div>
  );
};

export default DataGroups;
