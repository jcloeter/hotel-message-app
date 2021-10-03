import "./App.css";
import DataGroups from "./components/DataGroups/DataGroups";
import Header from "./components/Header/Header";
import ResultMessage from "./components/ResultMessage/ResultMessage";

// import loadGuests from "./data.json/loadJSON";
function App() {
  // const jsonData = require("./data.json/Companies.json");

  // loadGuests();
  // const fs = require("fs");

  // const rawData = fs.readFileSync("Guests.json");
  // const guests = JSON.parse(rawData);

  // console.log(guests);
  return (
    <div className="App">
      <Header />
      <ResultMessage />
      <DataGroups />
    </div>
  );
}

export default App;
