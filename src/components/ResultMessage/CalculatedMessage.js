import React from "react";
import getDayOfWeek from "../../Helpers/getDayOfWeek";
import getTimeGreeting from "../../Helpers/getTimeGreeting";

const CalculatedMessage = (props) => {
  const { guests, companies, templates } = props.messageObject;

  const parseTemplate = (temp) => {
    //Initialize Message:
    if (!guests || !companies || !templates)
      return "Select an option from each category below or create your own template";

    const varData = [
      { str: "FIRSTNAME", var: guests.firstName },
      { str: "LASTNAME", var: guests.lastName },
      { str: "ROOM", var: guests.reservation.roomNumber },
      { str: "COMPANY", var: companies.company },
      { str: "CITY", var: companies.city },
      { str: "STARTDAY", var: getDayOfWeek(guests.reservation.startTimestamp) },
      { str: "ENDDAY", var: getDayOfWeek(guests.reservation.endTimestamp) },
      { str: "TIME", var: getTimeGreeting(companies.timezone) },
    ];

    console.log("testing");
    const finalStr = temp.template
      .split("**")
      .map((word) => {
        for (let x = 0; x < varData.length; x++) {
          if (word.includes(varData[x].str)) return varData[x].var;
        }

        return word;
      })
      .join("");

    return finalStr;
  };
  return <div>{parseTemplate(templates)}</div>;
};

export default CalculatedMessage;
