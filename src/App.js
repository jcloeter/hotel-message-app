import "./App.css";
import DataGroups from "./components/DataGroups/DataGroups";
import Header from "./components/Header/Header";
import ResultMessage from "./components/ResultMessage/ResultMessage";
function App() {
  return (
    <div className="App">
      <Header />
      <ResultMessage />
      <DataGroups />
    </div>
  );
}

export default App;
