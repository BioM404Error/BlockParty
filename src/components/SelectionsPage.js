import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function SelectionPage() {
  return (
    <div>
      <h1>Selections</h1>
      <Card>
        <Button variant="secondary" as={Link} to="/selections/entertainment">
          Entertainment
        </Button>
        <Button variant="light" as={Link} to="/selections/food">
          Food
        </Button>
        <Button variant="secondary" as={Link} to="/selections/clothing">
          Clothing
        </Button>
        <Button variant="light" as={Link} to="/selections/cosmetics">
          Cosmetics
        </Button>
      </Card>

      <Button variant="secondary" as={Link} to="/location">
        Back
      </Button>
      <Button variant="primary" as={Link} to="/payment">
        Payment
      </Button>
    </div>
  );
}
