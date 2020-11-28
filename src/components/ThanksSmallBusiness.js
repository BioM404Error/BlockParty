import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Buttons = styled.div`
  padding-top: 20px;
`;

export default function ThanksSmallBusiness() {
  return (
    <body className="bgTy">
      <div
        style={{
          textAlign: "center",
          paddingTop: "400px",
        }}
      >
        <h1>Thank You For Connecting Your Small Business</h1>
        <h3>We will get back to you soon!</h3>
        <Buttons>
          <Button variant="primary" as={Link} to="/">
            Back to Home
          </Button>
        </Buttons>
      </div>
    </body>
  );
}
