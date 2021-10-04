import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
const Guests = () => {
  const [guests, setGuests] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const getData = async function () {
      const jsonData = require("../../data.json/Guests.json");
      setGuests(() =>
        jsonData.map((obj) => {
          console.log("is this what is changin it ");
          return { ...obj, isSelected: false };
        })
      );
    };

    getData();
  }, [guests.id]);

  const guestsItemHandler = (obj) => {
    console.log(obj);
    guests.map((data, i) => {
      console.log("changing to false");
      data.isSelected = false;
      console.log(data);
    });
    obj.isSelected = true;

    console.log(obj);
    setSelectedItem(obj);
  };
  return (
    <Card>
      <h4>Guests</h4>
      <ItemContainer>
        {guests.length > 0
          ? guests.map((guest) => {
              return (
                <ListItem
                  key={guest.id}
                  type="guests"
                  number={guest.id}
                  info={{ type: "guests", id: guest.id }}
                  object={guest}
                  onGuestsItemClick={guestsItemHandler}
                  isSelected={guest.isSelected}
                >
                  {guest.firstName} {guest.lastName}
                </ListItem>
              );
            })
          : null}
      </ItemContainer>
    </Card>
  );
};

export default Guests;
