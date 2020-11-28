import React, {useContext} from "react";
import styled from "@emotion/styled";
import LocationCard from "./LocationCard";
import venues from "../context/locations.json";
import Context from "../context/context";

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
  const context = useContext(Context);
  const venueArr = [];
  for (let venue of venues) {
    if (venue.city === context.location) {
      venueArr.push(
        <LocationCard title={venue.name} subtitle={venue.address} desc={venue.desc} link="/selections" imgSrc={venue.img}/>
      )
    }
  }


  return (
    <Content>
      <Header>
        Available Locations
      </Header>
      {venueArr}
    </Content>
  )
}

export default Locations