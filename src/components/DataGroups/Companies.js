import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
import styles from "./Companies.module.css";

const Companies = (props) => {
  const [companies, setCompanies] = useState([{ isSelected: false }]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const getData = async function () {
      const jsonData = require("../../data.json/Companies.json");
      setCompanies(() => {
        return jsonData.map((obj) => {
          return { ...obj, isSelected: false };
        });
      });
    };
    getData();
  }, [companies.isSelected]);

  const companiesItemHandler = (obj) => {
    companies.forEach((data) => {
      data.isSelected = false;
    });

    obj.isSelected = true;
    setSelectedItem(obj);
    props.onSelectedChange(obj, "companies");
  };

  return (
    <Card className={styles.companies}>
      <h4>Companies</h4>

      <ItemContainer>
        {companies
          ? companies.map((company) => {
              return (
                <ListItem
                  key={company.id}
                  info={{ type: "companies", id: company.id }}
                  object={company}
                  onCompaniesItemClick={companiesItemHandler}
                  type="companies"
                  isSelected={company.isSelected}
                >
                  <div>
                    <strong>{company.company}</strong>
                  </div>
                  <div>{company.city}</div>
                </ListItem>
              );
            })
          : console.log(`In JSX:` + companies)}
      </ItemContainer>
    </Card>
  );
};

export default Companies;
