import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
import styles from "./Companies.module.css";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const data = require("../../data.json/Companies.json");
    setCompanies(data);
    console.log(data);
  }, [companies]);

  // const companiesClickHandler = (e) => {
  //   console.log("companies click handler");
  // };

  const companiesItemHandler = (obj) => {
    console.log("COMPANY !!!!");
    console.log(obj);
  };

  return (
    <Card className={styles.companies}>
      <h4>Companies</h4>

      <ItemContainer>
        {companies.length > 0
          ? companies.map((obj) => {
              return (
                <ListItem
                  key={obj.id}
                  info={{ type: "companies", id: obj.id }}
                  object={obj}
                  onCompaniesItemClick={companiesItemHandler}
                >
                  <div>
                    <strong>{obj.company}</strong>
                  </div>
                  <div>{obj.city}</div>
                </ListItem>
              );
            })
          : null}
      </ItemContainer>
    </Card>
  );
};

export default Companies;
