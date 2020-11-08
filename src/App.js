import React from "react";
import "./App.css";
import SmallBusinessPage from "./components/SmallBusinessPage";
import ThanksSmallBusiness from "./components/ThanksSmallBusiness";
import Reciept from "./components/RecieptPage"
import Payment from "./components/PaymentPage"
import Thankyou from "./components/thankyou"

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/reciept">
            <Reciept />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/thankyou">
            <Thankyou />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
