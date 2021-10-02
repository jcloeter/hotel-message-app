import React from "react";
import Card from "../UI/Card";
import ListItem from "../UI/ListItem";
import ItemContainer from "../UI/ItemContainer";
import styles from "./Companies.module.css";

const Companies = () => {
  const companyArr = [
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
    { comp: "The Grand Budapest Hotel", country: "Republic of Zubrowka" },
  ];
  return (
    <Card className={styles.companies}>
      <h4>Companies</h4>

      <ItemContainer>
        {companyArr.map((obj) => {
          return (
            <ListItem>
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
