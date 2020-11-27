import React from "react";
import Navbar from "react-bootstrap/Navbar";

function BasicNavbar(props) {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="xl">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/images/logo2-1.png"
            width="60"
            className="d-inline-block align-top"
          />{" "}
          On The Block
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default BasicNavbar;
