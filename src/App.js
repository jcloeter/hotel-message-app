import "./App.css";
import DataGroups from "./components/DataGroups/DataGroups";
import Header from "./components/Header/Header";
import Message from "./components/ResultMessage/Message";
import React, { useState } from "react";

// import loadGuests from "./data.json/loadJSON";
function App() {
  const [selectedItems, setSelectedItems] = useState("");

  const objectChangeHandler = (dataObject) => {
    setSelectedItems(dataObject);
  };
  return (
    <div className="App">
      <Header />
      <Message messageObject={selectedItems} />
      <DataGroups onObjectChange={objectChangeHandler} />
    </div>
  );
}

export default App;
