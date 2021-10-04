import React, { useEffect } from "react";

const CalculatedMessage = (props) => {
  const { guests, companies, templates } = props.messageObject;
  console.log(templates);
  console.log(companies);

  //Start here and make sure all the right data is being channeled in correctly:

  const parseTemplate = (temp) => {
    console.log("parsing:");
    console.log(temp);
    console.log(guests);
    console.log(companies);
    if (!temp || !temp.template) return;

    const final = temp.template
      .split(" ")
      .map((w) => {
        switch (w) {
          case "FIRSTNAME":
            return guests.firstName;
          case "LASTNAME":
            return guests.lastName;
          case "COMPANY":
            return companies.company;
          case "CITY":
            return companies.city;
          // case "TIME":
          //   return ;

          default:
            return w;
        }
      })
      .join(" ");

    return final;
  };
  return <div>{parseTemplate(templates)}</div>;
};

export default CalculatedMessage;
