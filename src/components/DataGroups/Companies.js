import React from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
import styles from "./Companies.module.css";

const Companies = () => {
  const companyArr = [
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 1,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 2,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 3,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 4,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 5,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 6,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 7,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 8,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 9,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 10,
    },
    {
      comp: "The Grand Budapest Hotel",
      country: "Republic of Zubrowka",
      id: 11,
    },
  ];
  return (
    <Card className={styles.companies}>
      <h4>Companies</h4>

      <ItemContainer>
        {companyArr.map((obj) => {
          return (
            <ListItem key={obj.id}>
              <div>
                <strong>{obj.comp}</strong>
              </div>
              <div>{obj.country}</div>
            </ListItem>
          );
        })}
      </ItemContainer>
    </Card>
  );
};

export default Companies;
