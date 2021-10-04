import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
const Guests = (props) => {
  const [guests, setGuests] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const getData = async function () {
      const jsonData = require("../../data.json/Guests.json");
      setGuests(() =>
        jsonData.map((obj) => {
          return { ...obj, isSelected: false };
        })
      );
    };

    getData();
  }, [guests.id]);

  const guestsItemHandler = (obj) => {
    //1) Change all to unselected:
    guests.forEach((data) => {
      data.isSelected = false;
    });

    //2)Change selected li to true:
    obj.isSelected = true;
    setSelectedItem(obj);
    props.onSelectedChange(obj, "guests");
    props.onSelectedChange({ name: "Hotel Motel" }, "companies");
    props.onSelectedChange(
      {
        message:
          "Hello FIRSTNAME LASTNAME and welcome to COMPANY, the oldest hotel in CITY",
      },
      "templates"
    );
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
