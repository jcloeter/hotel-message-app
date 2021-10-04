import "./App.css";
import DataGroups from "./components/DataGroups/DataGroups";
import Header from "./components/Header/Header";
import ResultMessage from "./components/ResultMessage/ResultMessage";
import React, { useState } from "react";

// import loadGuests from "./data.json/loadJSON";
function App() {
  // const [selectedItems, setSelectedItems] = useState("");

  const objectChangeHandler = (dataObject) => {
    console.log("app says hi");
    console.log(dataObject);
    // setSelectedItems({ templates: "", companies: "", guests: dataObject });
  };
  return (
    <div className="App">
      <Header />
      {/* <ResultMessage messageObject={} /> */}
      <DataGroups onObjectChange={objectChangeHandler} />
    </div>
  );
}

export default App;
