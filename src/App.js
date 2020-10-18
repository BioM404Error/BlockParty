import React from "react";
import Milestones from './Milestones';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router >
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/milestones">Milestones</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/milestones">
            <Milestones />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
