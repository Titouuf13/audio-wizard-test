import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../logo/triforce.jpg";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function TopNav() {
  return (
    <Navbar expand="sm" fixed="top" bg="dark">
        <Nav className="container-fluid">
            <Nav.Item>
                <Image src={logo} alt="logo" rounded />
            </Nav.Item>
            <Nav.Item className="ml-auto">
                <DropdownButton id="dropdown-item-button" title="Mon compte">
                    <Dropdown.Item>Mes informations</Dropdown.Item>
                    <Dropdown.Item>Déconnexion</Dropdown.Item>
                </DropdownButton>
            </Nav.Item>
        </Nav>
    </Navbar>
  );
}