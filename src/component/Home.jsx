import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { TbToolsKitchen2 } from 'react-icons/tb';


export default function Home() {
    const navigate = useNavigate();
    return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand >
      Kitchen Recipe 
      <TbToolsKitchen2/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >
            Recipe List 📑
          </Nav.Link>
          <Nav.Link >
            Add Recipe to List📑
          </Nav.Link>
          <Nav.Link >Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <h1 style={{textAlign: "center"}}>Welcome To Kitchen Recipe Application</h1>
    </>
  )
}
