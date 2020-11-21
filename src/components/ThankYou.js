import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

const Buttons = styled.div`
  height: 125px;
  width: 100px;
  margin: 10vh auto 0 auto;
  display: flex;
`;

export default function ThankYou() {
  return (
    <body style={{ background: "./images/pageImages/permitPage.png" }}>
      <div
        style={{
          color: "black",
          justifyContent: "center",
          background: "permitPage.png",
        }}
      >
        <h1
          style={{
            color: "black",
            textAlign: "center",
            paddingTop: "200px",
          }}
        >
          Thank You!
        </h1>
        <h1
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          {" "}
          Our team is getting straight to work...
        </h1>
        <h1
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          {" "}
          See You On The Block!
        </h1>
        <Buttons>
          <Button variant="primary" as={Link} to="/">
            Return to Home
          </Button>
        </Buttons>
      </div>
    </body>
  );
}
