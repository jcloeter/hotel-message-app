import React from "react";
import getDayOfWeek from "../../Helpers/getDayOfWeek";
import getTimeGreeting from "../../Helpers/getTimeGreeting";

const CalculatedMessage = (props) => {
  const { guests, companies, templates } = props.messageObject;
  console.log(templates);
  console.log(companies);

  //Start here and make sure all the right data is being channeled in correctly:

  const parseTemplate = (temp) => {
    //Initialize Message:
    if (!guests || !companies)
      return "Select from options below or create your own template";

    getTimeGreeting(guests.reservation.startTimestamp);
    getDayOfWeek(guests.reservation.startTimestamp);

    const varData = [
      { str: "FIRSTNAME", var: guests.firstName },
      { str: "LASTNAME", var: guests.lastName },
      { str: "ROOM", var: guests.reservation.roomNumber },
      { str: "COMPANY", var: companies.company },
      { str: "CITY", var: companies.city },
      { str: "STARTDAY", var: getDayOfWeek(guests.reservation.startTimestamp) },
      { str: "ENDDAY", var: getDayOfWeek(guests.reservation.endTimestamp) },
      { str: "TIME", var: getTimeGreeting(companies.timezone) },

      // { str: "TIME", var: guests.firstName },
    ];

    const finalStr = temp.template
      .split("**")
      .map((word) => {
        for (let x = 0; x < varData.length; x++) {
          if (word.includes(varData[x].str)) return varData[x].var;
        }

        return word;
      })
      .join("");

    console.log(finalStr);
    return finalStr;
  };
  return <div>{parseTemplate(templates)}</div>;
};

export default CalculatedMessage;

//Old solution:
// if (word.includes("COMPANY"))
//   return word.replace("COMPANY", companies.company);
// return word.replace("FIRSTNAME", guests.firstName);

// switch (w) {
//   case "FIRSTNAME":
//     return guests.firstName;
//   case "LASTNAME":
//     return guests.lastName;
//   case "COMPANY":
//     return companies.company;
//   case "CITY":
//     return companies.city;
//   // case "TIME":
//   //   return ;

//   default:
//     return w;
// }

// if (word.includes(variablesData[0].str)) return variablesData[0].var;
// if (word.includes(variablesData[1].str)) return variablesData[1].var;
// if (word.includes(variablesData[2].str)) return variablesData[2].var;
// if (word.includes(variablesData[3].str)) return variablesData[3].var;
