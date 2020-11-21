import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Buttons = styled.div`
  height: 125px;
  width: 100px;
  margin: 10vh auto 0 auto;
  display: flex;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export default function SelectionPage() {
  return (
    <body
      style={{
        background: "white",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "100px",
            fontFamily: "Impact",
          }}
        >
          Selections{" "}
        </h1>
        <Content>
          <Card border="light">
            <Card.Body style={{ justifyContent: "space-between" }}>
              <Button
                style={{
                  width: "300px",
                  height: "100px",
                  fontSize: "43px",
                  fontFamily: "Impact",
                  background: "black",
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
                  width: "300px",
                  height: "100px",
                  fontSize: "55px",
                  fontFamily: "Impact",
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
                  width: "300px",
                  height: "100px",
                  fontSize: "28px",
                  fontSize: "55px",
                  fontFamily: "Impact",
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
                  width: "300px",
                  height: "100px",
                  fontSize: "28px",
                  fontSize: "55px",
                  fontFamily: "Impact",
                }}
                as={Link}
                to="/selections/Cosmetics"
              >
                COSMETICS
              </Button>
            </Card.Body>
          </Card>
          <Buttons>
            <Button
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
              }}
              variant="primary"
              as={Link}
              to="/payment"
            >
              Payment
            </Button>
          </Buttons>
        </Content>
      </div>
    </body>
  );
}
