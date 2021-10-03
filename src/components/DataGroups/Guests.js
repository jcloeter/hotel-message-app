import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
const Guests = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const getData = async function () {
      const jsonData = require("../../data.json/Guests.json");
      // console.log(jsonData);
      setGuests(() => jsonData);
    };
    getData();
  }, [guests]);

  return (
    <Card>
      <h4>Guests</h4>
      {guests.length > 0
        ? guests.map((guest) => {
            return <ListItem key={guest.id}>{guest.firstName}</ListItem>;
          })
        : null}
    </Card>
  );
};

export default Guests;
