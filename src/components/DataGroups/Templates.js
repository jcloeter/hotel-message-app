import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
import styles from "./Templates.modules.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Templates = (props) => {
  const [template, setTemplate] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    const jsonData = require("../../data.json/Templates.json");
    setTemplate(() => {
      return jsonData.map((temp) => {
        return { ...temp, isSelected: false };
      });
    });
  }, [template.isSelected]);

  const templateItemHandler = (obj) => {
    template.forEach((temp) => {
      return (temp.isSelected = false);
    });
    obj.isSelected = true;
    setSelectedItem(obj);
    props.onSelectedChange(obj, "templates");
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };
  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const addNewTemplateHandler = (str) => {
    setTemplate((temp) => {
      return [
        ...temp,
        { id: temp.length + 1, template: str, isSelected: false },
      ];
    });
  };

  return (
    <>
      {modalIsVisible ? (
        <Modal
          onCloseModal={closeModalHandler}
          onSubmitNewTemplate={addNewTemplateHandler}
        />
      ) : null}

      <Card>
        <div class="template_header">
          <h4>
            Templates
            <Button
              className={styles.template_button}
              onClick={showModalHandler}
            >
              Add
            </Button>
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
                    isSelected={temp.isSelected}
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
