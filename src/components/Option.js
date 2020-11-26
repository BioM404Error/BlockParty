import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styled from "@emotion/styled";

const Buttons = styled.div`
  display: block;
  flex-direction: column;
  justify-content: right;
`;

const subType = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
`;

const Price = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
`;

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
      <Button
        style={{ width: "200px" }}
        variant="primary"
        onClick={handleOptionShow}
      >
        <strong>{name}</strong>
      </Button>
      <subType>
        <Row style={{ width: "200px", textAlign: "center" }}>
          <Col>{subtype}</Col>
        </Row>
      </subType>
      <Price>
        <Row style={{ justifyContent: "center" }}>
          <Col>${price}</Col>
        </Row>
      </Price>

      <Buttons>
        <Button variant="dark" onClick={addProduct}>
          Add Business <FontAwesomeIcon icon={faCartPlus} />
        </Button>
      </Buttons>
    </div>
  );
}
