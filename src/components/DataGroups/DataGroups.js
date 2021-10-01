import React, { useEffect } from "react";
import Templates from "./Templates";
import Guests from "./Guests";
import Companies from "./Companies";

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
    <div>
      <Templates />
      <Companies />
      <Guests />
    </div>
  );
};

export default DataGroups;
