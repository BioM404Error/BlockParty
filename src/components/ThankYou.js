import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

const Buttons = styled.div`
  height: 55px;
  width: 200px;
  margin: 10vh auto 0 auto;
  display: flex;
`;

export default function ThankYou() {
  return (
    <body className="tyImage">
      <div
        style={{
          color: "black",
          justifyContent: "center",
        }}
      >
        <h1
          className="main-title"
          style={{
            color: "black",
            textAlign: "center",
            paddingTop: "200px",
            fontSize: "100px",
            borderRadius: "0%",
          }}
        >
          Thank You!
        </h1>
        <h1
          className="parting"
          style={{
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          {" "}
          Our team is getting straight to work...
        </h1>
        <h1 className="parting" style={{}}>
          {" "}
          See You <span className="special">On The Block!</span>
        </h1>
        <Buttons>
          <Button
            style={{
              fontSize: "25px",
              border: "white",
            }}
            as={Link}
            to="/"
          >
            Return to Home
          </Button>
        </Buttons>
      </div>
    </body>
  );
}
