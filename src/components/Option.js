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
  onClick,
}) {
  return (
    <span style={{ display: "flex", justifyContent: "space-between" }}>
      <strong>{name}</strong>
      <p>
        {startTime[0]}:{startTime[1].toString().padEnd(2, 0)}-{endTime[0]}:
        {endTime[1].toString().padEnd(2, 0)}
      </p>
      <p>{subtype}</p>
      <p>${price}</p>
      <Button variant="dark" onClick={onClick}>
        Add Business <FontAwesomeIcon icon={faCartPlus} />
      </Button>
    </span>
  );
}
