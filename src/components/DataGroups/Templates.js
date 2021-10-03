import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";

const Templates = () => {
  const [template, setTemplate] = useState([]);

  useEffect(() => {
    console.log("template");
    console.log(template);
    const data = require("../../data.json/Templates.json");
    setTemplate(data);
  }, [template]);

  return (
    <Card>
      <h4>
        Templates
        <button>+</button>
      </h4>
      <ItemContainer>
        {template.length > 0
          ? template.map((temp) => {
              return (
                <ListItem key={temp.id} style={{ "line-spacing": "4rem" }}>
                  {temp.template}
                </ListItem>
              );
            })
          : null}
        {/* 
        <ListItem>
          Good TIMEOFDAY FIRSTNAME, and welcome to COMPANY. We hope you enjoy
          your stay in CITY. Filler
        </ListItem>
        <ListItem>Greetings and welcome to COMPANY</ListItem>
        <ListItem>Greetings and welcome to COMPANY</ListItem>
        <ListItem>Greetings and welcome to COMPANY</ListItem>
        <ListItem>Greetings FIRSTNAME</ListItem> */}
      </ItemContainer>
    </Card>
  );
};

export default Templates;
