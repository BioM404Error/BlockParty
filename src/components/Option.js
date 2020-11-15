import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Option({
  name,
  price,
  subtype,
  photo,
  description,
  startTime,
  endTime,
  addProduct,
  handleOptionShow,
  daysOpen,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button variant="primary" onClick={handleOptionShow}>
        <strong>{name}</strong>
      </Button>
      <p>{subtype}</p>
      <p>${price}</p>
      <Button variant="dark" onClick={addProduct}>
        Add Business <FontAwesomeIcon icon={faCartPlus} />
      </Button>
    </div>
  );
}
