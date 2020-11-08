import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div>
      <h1>Thank You!</h1>
      <p1> Our team is getting staright to work...</p1>
      <h1> See You On The Block!</h1>
      <Button variant="primary" as={Link} to="/">
        Return to Home
      </Button>
    </div>
  );
}
export default ThankYou;
