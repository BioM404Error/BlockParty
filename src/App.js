import React from "react";
import "./App.css";
import SmallBusinessPage from "./components/SmallBusinessPage";
import ThanksSmallBusiness from "./components/ThanksSmallBusiness";
import Landing from "./components/Landing";
import Locations from "./components/Locations";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/smallbusiness/thankyou">
            <ThanksSmallBusiness />
          </Route>
          <Route exact path="/smallbusiness">
            <SmallBusinessPage />
          </Route>
          <Route exact path="/locations">
            <Locations />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
