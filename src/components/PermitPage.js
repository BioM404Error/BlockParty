import React, { useContext } from "react";
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
};

const subText1 = {
  fontSize: "20px",
  color: "black",
  textAlign: "center",
  fontFamily: "Helvetica",
  marginTop: "30px",
  paddingBottom: "100px",
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
  const permit = context.permitUrls.filter(
    (permit) => permit.location === context.location
  );

  return (
    <div className="permit">
      <h1 className="main-title">APPLY FOR PERMIT</h1>
      <div>
        <Buttons>
          <Button
            style={accessPermit}
            variant="info"
            href={permit[0] ? permit[0].url : "/specification"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here To Access Permit for {context.location} City
          </Button>
        </Buttons>
      </div>
      <p style={subText1}>
        This location requires you to submit your permit
        {permit[0] ? permit[0].timeline : "(No data, please restart...)"}
        before the event
      </p>
      <SmallButton>
        <Button
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
          style={{ fontSize: "25px" }}
          variant="primary"
          as={Link}
          to="/location"
        >
          Next
        </Button>
      </SmallButton>
    </div>
  );
}
export default Permit;
