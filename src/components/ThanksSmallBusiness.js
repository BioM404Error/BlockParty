import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ThanksSmallBusiness() {
  return (
    <div>
      <h1>Thank You For Connecting Your Small Business</h1>
      <h3>We will get back to you soon!</h3>
      <Button variant="primary" as={Link} to="/">
        Back to Home
      </Button>
    </div>
  );
}
