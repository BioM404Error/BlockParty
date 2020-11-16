import React, { useContext } from "react";
import Context from "../context/context";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Permit() {
  const context = useContext(Context);
  const permit = context.permitUrls.filter(
    (permit) => permit.location === context.location
  );

  return (
    <div className="permit">
      <h1 class="main-title">APPLY FOR PERMIT</h1>
      <div>
        <Button
          variant="info"
          href={permit[0] ? permit[0].url : "/specification"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here To Access Permit for {context.location} City
        </Button>
      </div>
      <p>
        This location requires you to submit your permit
        {permit[0] ? permit[0].timeline : "(No data, please restart...)"}
        before the event
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
