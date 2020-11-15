import React from "react";
import styled from "@emotion/styled";
import LocationCard from "./LocationCard";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
`

const Header = styled.div`
  width: 100%;
  height: 20%;
  font-size: 3rem;
  border-bottom: 2px solid black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Locations = () => {
  return (
    <Content>
      <Header>
        Available Locations
      </Header>
      <LocationCard title="Loc1" subtitle="sub1" desc="hello world" link="/selections"/>
      <LocationCard title="Loc1" subtitle="sub1" desc="hello world" link="/selections"/>
    </Content>
  )
}

export default Locations