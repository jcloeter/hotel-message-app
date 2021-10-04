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

  const templateItemHandler = (obj) => {
    console.log(obj);
  };
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
                <ListItem
                  key={temp.id}
                  style={{ "line-spacing": "4rem" }}
                  info={{ type: "templates", id: temp.id }}
                  object={temp}
                  onTemplatesItemClick={templateItemHandler}
                >
                  {temp.template}
                </ListItem>
              );
            })
          : null}
      </ItemContainer>
    </Card>
  );
};

export default Templates;
