import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "./Pages.css";

const Content = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 76%;
  text-align: center;
  overflow: hidden;
`;

export default function SelectionPage() {
  return (
    <body style={{ height: "90%" }}>
      <div>
        <h1 className="main-title">SELECTIONS </h1>
        <h2 className="disclaimer">
          {" "}
          *These are all local small business's from the area you chose!*
        </h2>
        <Content>
          <Card border="light">
            <Card.Body style={{ justifyContent: "space-between" }}>
              <Button
                style={{
                  width: "400px",
                  height: "75px",
                  fontSize: "45px",
                  fontFamily: "Impact",
                  background: "black",
                  boxShadow: "10px 10px 8px #888888",
                }}
                as={Link}
                to="/selections/Entertainment"
              >
                ENTERTAINMENT
              </Button>
            </Card.Body>
          </Card>

          <Card border="light">
            <Card.Body>
              <Button
                style={{
                  width: "400px",
                  height: "75px",
                  fontSize: "45px",
                  fontFamily: "Impact",
                  background: "black",
                  boxShadow: "10px 10px 8px #888888",
                }}
                as={Link}
                to="/selections/Food"
              >
                FOOD
              </Button>
            </Card.Body>
          </Card>

          <Card border="light">
            <Card.Body>
              <Button
                style={{
                  width: "400px",
                  height: "75px",
                  fontSize: "45px",
                  fontFamily: "Impact",
                  background: "black",
                  boxShadow: "10px 10px 8px #888888",
                }}
                as={Link}
                to="/selections/Clothing"
              >
                CLOTHING
              </Button>
            </Card.Body>
          </Card>

          <Card border="light">
            <Card.Body>
              <Button
                style={{
                  width: "400px",
                  height: "75px",
                  fontSize: "45px",
                  fontFamily: "Impact",
                  background: "black",
                  boxShadow: "10px 10px 8px #888888",
                }}
                as={Link}
                to="/selections/Cosmetics"
              >
                COSMETICS
              </Button>
            </Card.Body>
          </Card>

          <Button
            className="buttonB"
            style={{
              fontSize: "25px",
              marginRight: "25px",
              background: "white",
              color: "black",
              borderColor: "black",
            }}
            as={Link}
            to="/location"
          >
            Back
          </Button>
          <Button
            style={{
              fontSize: "25px",
              textAlign: "center",
              background: "linear-gradient(150deg, yellow, red)",
              border: "white",
              marginTop: "30px",
            }}
            as={Link}
            to="/payment"
          >
            Payment
          </Button>
        </Content>
      </div>
    </body>
  );
}
