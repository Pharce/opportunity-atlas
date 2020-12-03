import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Student from "./components/Student";
import HomePage from "./components/HomePage/HomePage";
import Atlas from "./components/Atlas/Atlas";
import SchoolSelection from "./components/SchoolSelection/SchoolSelection";
import SchoolQuality from "./components/SchoolQuality/SchoolQuality";
import Access from './components/Access/Access';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/atlas" component={Atlas}/>
            <Route path="/schoolselection" component={SchoolSelection}/>
            <Route path="/schoolquality" component={SchoolQuality}/>
            <Route path="/access" component={Access}/>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
