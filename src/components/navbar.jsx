import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            <h1>Block Party</h1>
            <h1>Teams</h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;