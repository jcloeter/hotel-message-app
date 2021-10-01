import React, { useEffect } from "react";
import Templates from "./Templates";
import Guests from "./Guests";
import Companies from "./Companies";
import styles from "./DataGroup.module.css";

const DataGroups = () => {
  // useEffect(() => {
  //   const guestData = fetch("../../data.json/Guests.json")
  //     .then((res) => {
  //       // JSON.parse(res);
  //       res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });

  return (
    <div className={styles.data_group}>
      <Templates />
      <Companies />
      <Guests />
    </div>
  );
};

export default DataGroups;
