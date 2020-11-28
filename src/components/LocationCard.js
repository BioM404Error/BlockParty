import React, {useContext} from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Context from "../context/context";
import {parse} from "@fortawesome/fontawesome-svg-core";

const CardDiv = styled.div`
  margin: 20px 20px 0;
`



const LocationCard = (props) => {
  const { title, subtitle, desc, link, imgSrc, price } = props;
  const context = useContext(Context);
  const product = {
    name: null,
    price: null,
    location: null,
  }
  const HandleClick = () => {
    context.addProductToCart({
      name: title,
      price: parseInt(title),
    })
    console.log("Added to Cart")
  }
  return (
    <CardDiv>
      <Card style={{
        width: "70%",
        textAlign: "left",
        boxShadow: "-5px 10px 5px rgba(0, 0, 0, 0.5)",
        marginBottom: "10px"
      }}>
        <Card.Image variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>Hello World</Card.Text>
          <Card.Link as={Link} to={link} onClick={HandleClick}>Choose this Venue</Card.Link>
        </Card.Body>
      </Card>
    </CardDiv>
  )
}

export default LocationCard