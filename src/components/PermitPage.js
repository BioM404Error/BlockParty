import React, { useContext } from "react";
import Context from "../context/context";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Permit() {
  const context = useContext(Context);

  return (
    <div className="permit">
      <h1 class="main-title">APPLY FOR PERMIT</h1>
      <div>
        <button
          onClick={() => {
            alert("going to permit");
          }}
        >
          Click Here To Access Permit for X City
        </button>
      </div>
      <p>
        This location requires you to submit your permit X days before the event
      </p>
      <Button variant="secondary" as={Link} to="/specification">
        Back
      </Button>
      <Button variant="primary" as={Link} to="/location">
        Next
      </Button>
    </div>
  );
}
export default Permit;
