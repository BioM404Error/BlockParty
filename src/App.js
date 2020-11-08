import React from "react";
import "./App.css";
import SmallBusinessPage from "./components/SmallBusinessPage";
import ThanksSmallBusiness from "./components/ThanksSmallBusiness";
import SelectionsPage from "./components/SelectionsPage";
import Category from "./components/Category";
import GlobalState from "./context/GlobalState";
import Permit from "./components/PermitPage";
import ThankYou from "./components/ThankYou";
import SpecificationPage from "./components/SpecificationPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/permit">
              <Permit />
            </Route>
            <Route exact path="/specification">
              <SpecificationPage />
            </Route>
            <Route exact path="/smallbusiness/thankyou">
              <ThanksSmallBusiness />
            </Route>
            <Route exact path="/smallbusiness">
              <SmallBusinessPage />
            </Route>
            <Route exact path="/selections">
              <SelectionsPage />
            </Route>
            <Route exact path="/selections/Food">
              <Category type="Food" />
            </Route>
            <Route exact path="/selections/Cosmetics">
              <Category type="Cosmetics" />
            </Route>
            <Route exact path="/selections/Clothing">
              <Category type="Clothing" />
            </Route>
            <Route exact path="/selections/Entertainment">
              <Category type="Entertainment" />
            </Route>
            <Route exact path="/thankyou">
              <ThankYou />
            </Route>
            <Route exact path="/payment">
              <h1>Payments tbd...</h1>
            </Route>
            <Route exact path="/location">
              <h1>Location tbd...</h1>
            </Route>
            <Route exact path="/">
              <h1>Home Page TBD...</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalState>
  );
}

export default App;
