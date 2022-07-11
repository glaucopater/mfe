import "./App.css";
import { Card } from "./components/Card";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React TS CRA ejected running on port 5002</h3>
        <Card />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
