
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar'
import Main from './views/Main'
function App() {
  return (
    <div className="App grid">
      <NavBar />
      <Router>
      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
