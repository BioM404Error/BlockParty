import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function SelectionPage() {
  return (
    <div>
      <h1>Selections</h1>
      <Card>
        <Button variant="secondary" as={Link} to="/selections/Entertainment">
          Entertainment
        </Button>
        <Button variant="light" as={Link} to="/selections/Food">
          Food
        </Button>
        <Button variant="secondary" as={Link} to="/selections/Clothing">
          Clothing
        </Button>
        <Button variant="light" as={Link} to="/selections/Cosmetics">
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
