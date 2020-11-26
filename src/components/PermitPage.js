import React, { useContext, useState } from "react";
import Context from "../context/context";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";
import "./Pages.css";
import styled from "@emotion/styled";
import { BlendingEquation } from "three";

const accessPermit = {
  fontSize: "30px",
  color: "black",
  backgroundColor: "white",
  fontFamily: "Helvetica",
  boxShadow: "10px 10px 8px #888888",
};

const subText1 = {
  fontSize: "20px",
  color: "black",
  textAlign: "center",
  fontFamily: "Helvetica",
  marginTop: "50px",
};

const Buttons = styled.div`
  width: max(250px, 40%);
  max-width: 500px;
  height: 7%;
  margin: 7vh auto 0 auto;
  font-size: clamp(1rem, 2vw, 2rem);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SmallButton = styled.div`
  height: 125px;
  width: 100px;
  margin: 5vh auto 0 auto;
  display: flex;
`;

/*const SmallButton = styled.div`
    float: right;
    width: 100%;
    margin-right: 0px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    height: 625px;
    overflow: auto;
'`;
*/

function Permit() {
  const context = useContext(Context);

  const permit = context.permitUrls[context.location];
  console.log(context.location);
  const background =
    context.location !== "Choose..."
      ? context.permitUrls[context.location].image
      : "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80";

  const Body = styled.body`
    background-image: url(${background});
  `;

  return (
    <Body>
      <div className="permit">
        <h1 className="main-title">APPLY FOR A PERMIT</h1>
        <div>
          <Buttons>
            <Button
              style={accessPermit}
              variant="primary"
              href={permit ? permit.url : "/specification"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here To Access Permit for {context.location}
            </Button>
          </Buttons>
        </div>
        <p style={subText1}>
          This location requires you to submit your permit{" "}
          {permit ? permit.timeline : "(No data, please restart...)"} before the
          event
        </p>
        <SmallButton>
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
            to="/specification"
          >
            Back
          </Button>
          <Button
            className="buttonN"
            style={{ fontSize: "25px" }}
            variant="primary"
            as={Link}
            to="/location"
          >
            Next
          </Button>
        </SmallButton>
      </div>
    </Body>
  );
}
export default Permit;
