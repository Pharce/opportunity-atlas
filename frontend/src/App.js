import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><Student /></div>
      </header>
    </div>
  );
}

export default App;
