import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  position: relative;
  width: 60%;
  margin: 30vh auto 0 auto;
  font-size: clamp(6rem, 10vw, 11rem);
  text-align: center;
  color: white;
  font-family: Impact;
`;

const Buttons = styled.div`
  width: max(250px, 40%);
  max-width: 700px;
  height: 7%;
  margin: 7vh auto 0 auto;
  font-size: clamp(0.5rem, 1.5vw, 1.5rem);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.a`
  width: 40%;
  height: 100%;
  border: none;
  color: white;
  border-radius: 5px;
  :focus {
    outline: none;
  }
  :hover {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
  }
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Overlay = (props) => {
  const { consumer, business } = props;
  return (
    <Content>
      <Title>On The Block</Title>
      <Buttons>
        <Button
          style={{
            background: "linear-gradient(150deg, yellow, red)",
          }}
          href={consumer}
        >
          Throw A Block Party!
        </Button>
        <Button
          style={{
            background: "linear-gradient(150deg, green, blue)",
          }}
          href={business}
        >
          Small Business Owner
        </Button>
      </Buttons>
    </Content>
  );
};

export default Overlay;
