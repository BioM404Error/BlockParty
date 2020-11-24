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
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Reciept from "./components/RecieptPage";
import Payment from "./components/PaymentPage";
import Landing from "./components/Landing/index";
import ConsumerNavbar from "./components/ConsumerNav";
import BasicNavbar from "./components/BasicNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/permit">
              <ConsumerNavbar/>
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
              <ConsumerNavbar/>
              <SelectionsPage />
            </Route>
            <Route exact path="/selections/Food">
              <ConsumerNavbar/>
              <Category type="Food" />
            </Route>
            <Route exact path="/selections/Cosmetics">
              <ConsumerNavbar/>
              <Category type="Cosmetics" />
            </Route>
            <Route exact path="/selections/Clothing"> 
              <ConsumerNavbar/>
              <Category type="Clothing" />
            </Route>
            <Route exact path="/selections/Entertainment">
              <ConsumerNavbar/>
              <Category type="Entertainment" />
            </Route>
            <Route exact path="/thankyou">
              <ThankYou />
            </Route>
            <Route exact path="/payment">
              <ConsumerNavbar/>
              <Payment />
            </Route>
            <Route exact path="/reciept">
              <BasicNavbar/>
              <Reciept />
            </Route>
            <Route exact path="/location">
              <ConsumerNavbar/>
              <div>
                <h1>Location tbd...</h1>
                <Button variant="secondary" as={Link} to="/permit">
                  Back
                </Button>
                <Button variant="primary" as={Link} to="/selections">
                  Next
                </Button>
              </div>
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalState>
  );
}

export default App;
