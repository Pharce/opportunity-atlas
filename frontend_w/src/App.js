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
import { createMuiTheme, ThemeProvider, Fab } from "@material-ui/core"; 
import  QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FeedBackButton from "./components/feedback/feedBackButton";
import CssBaseline from "@material-ui/core/CssBaseline";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      contrastText: "#000000"
    }
  }
})



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={darkTheme}>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/atlas" component={Atlas}/>
              <Route path="/schoolselection" component={SchoolSelection}/>
              <Route path="/schoolquality" component={SchoolQuality}/>
              <Route path="/access" component={Access}/>
            </Switch>
            <FeedBackButton/>
          </header>
        </div>
        </ThemeProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
