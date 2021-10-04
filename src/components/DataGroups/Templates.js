import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
import styles from "./Templates.modules.css";
import Modal from "../UI/Modal";

const Templates = () => {
  const [template, setTemplate] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    // console.log("template");
    // console.log(template);
    const data = require("../../data.json/Templates.json");
    setTemplate(data);
  }, [template]);

  const templateItemHandler = (obj) => {
    // console.log(obj);
  };

  const showModalHandler = () => {
    // console.log("gonna show the modal");
    setModalIsVisible(true);
  };
  return (
    <>
      {modalIsVisible ? <Modal /> : null}

      <Card>
        <div class="template_header">
          <h4>
            Templates
            <button
              class="template_button"
              type="button"
              onClick={showModalHandler}
            >
              Add
            </button>
          </h4>
        </div>
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
    </>
  );
};

export default Templates;
