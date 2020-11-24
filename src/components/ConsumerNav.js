import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";


function ConsumerNavbar(props) {
    return (
        <div>
            <Navbar bg="primary" variant="dark" >
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/images/logo2-1.png"
                        width="40"
                        className="d-inline-block align-top"
                    />{' '}
                    On The Block
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="consumer-navbar-nav" />
                <Navbar.Collapse id="consumer-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/specification">Specifications</Nav.Link>
                        <Nav.Link as={Link} to="/permit">Permit</Nav.Link>
                        <Nav.Link as={Link} to="/location">Locations</Nav.Link>
                            <NavDropdown title="Selections" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/selections">Selections</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/selections/Entertainment">Entertainment</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/selections/Food">Food</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/selections/Clothing">Clothing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/selections/Cosmetics">Cosmetics</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}


export default ConsumerNavbar