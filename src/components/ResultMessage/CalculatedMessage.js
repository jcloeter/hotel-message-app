import React, { useEffect } from "react";

const CalculatedMessage = (props) => {
  const { guests, companies, templates } = props.messageObject;
  console.log(templates);
  console.log(companies);

  //Start here and make sure all the right data is being channeled in correctly:

  const parseTemplate = (temp) => {
    // console.log("parsing:");
    // console.log(temp);
    // console.log(guests);
    // console.log(companies);
    // if (!temp || !temp.template) return;

    // console.log(temp.template.includes("FIRSTNAME"));

    // // temp.template.replace("FIRSTNAME", guests.firstName);
    // // temp.template.replace(/LASTNAME/, guests.lastName);
    // console.log("REGEXXXXXXXXXXXXXXXXXXXXXXXX");
    // // console.log(temp.template.split(/\W/));
    // // console.log(temp.template.includes("FIRSTNAME"));
    // // console.log(temp.template.includes("COMPANY"));
    // let other = temp.template.slice();
    // console.log(temp.template.includes("FIRSTNAME"));
    // const nameStr = "FIRSTNAME";
    // other = other.replace(nameStr, guests.firstName);
    // console.log(other);

    //Initialize Message:
    if (!guests || !companies)
      return "Select from options below or create your own template";

    const varData = [
      { str: "FIRSTNAME", var: guests.firstName },
      { str: "LASTNAME", var: guests.lastName },
      { str: "COMPANY", var: companies.company },
      { str: "CITY", var: companies.city },
      // { str: "TIME", var: guests.firstName },
    ];

    const final = temp.template
      .split("**")
      .map((word) => {
        for (let x = 0; x < varData.length; x++) {
          if (word.includes(varData[x].str)) return varData[x].var;
        }

        return word;
      })
      .join("");

    console.log(final);
    return final;
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
