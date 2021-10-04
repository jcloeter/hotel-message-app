import React, { useEffect } from "react";

const CalculatedMessage = (props) => {
  const { guests, companies, templates } = props.messageObject;
  console.log(companies);

  //   useEffect(() => {
  //     console.log(props.messageObject);
  //     parseTemplate(templates);
  //   }, [templates, props.messageObject]);

  const parseTemplate = (temp) => {
    console.log("parsing:");
    if (!temp) return;
    const final = temp.message
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
