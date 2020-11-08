import React from "react";
import Button from "react-bootstrap/Button";

export default function Option({ name, price, onClick }) {
  return (
    <span style={{ display: "flex", justifyContent: "space-between" }}>
      <p>{name}</p>
      <p>{price}</p>
      <Button variant="dark" onClick={onClick}>
        +
      </Button>
    </span>
  );
}
