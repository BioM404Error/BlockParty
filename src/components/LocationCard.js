import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CardDiv = styled.div`
  margin: 10px 10px 0;
`

const LocCard = (props) => {
  const { title, subtitle, desc, link } = props;
  return (
    <>
      <Card style={{
        width: "70%",
        textAlign: "left",
        boxShadow: "-5px 10px 5px rgba(0, 0, 0, 0.5)"
      }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>{desc}</Card.Text>
          <Card.Link as={Link} to={link}>About</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

const LocationCard = (props) => {
  return (
    <CardDiv>
      <LocCard {...props}/>
    </CardDiv>
  )
}

export default LocationCard