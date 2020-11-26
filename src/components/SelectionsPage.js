import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Buttons = styled.div`
  height: 50px;
  width: 100px;
  margin: 10vh auto 0 auto;
  display: flex;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 85%;
  text-align: center;
`;

export default function SelectionPage() {
  return (
    <body>
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
                  fontSize: "43px",
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
          <Buttons>
            <Button
              style={{
                fontSize: "25px",
                textAlign: "center",
                background: "linear-gradient(150deg, green, blue)",
                border: "white",
              }}
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
