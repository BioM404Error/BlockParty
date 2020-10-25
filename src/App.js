import React from "react";
import Milestones from './Milestones';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router >
      <div className="App">
      <nav className={classes.appbar}>
        <AppBar position="static">
          <Toolbar>
          <Button
              aria-label="Home"
              naked
              color="inherit"
              component={Link}
              to="/">
              Home
            </Button>
            <div className={classes.title}/>
            <Button
              aria-label="Milestones"
              naked
              color="inherit"
              component={Link}
              to="/milestones">
              Milestones
            </Button>
          </Toolbar>
        </AppBar>
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
