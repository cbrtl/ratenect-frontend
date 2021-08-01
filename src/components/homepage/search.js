import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Badge from "react-bootstrap/Badge";
import {Button, FormControl, Navbar,Nav,Form,InputGroup , ButtonToolbar, Container} from "react-bootstrap"

export default function Search() {

  return (
    <Container className=" my-3 justify-content-around align-items-center">
    <Navbar  expand="lg" >
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />

        <Button variant="outline-success" >Search</Button>
      </Form>

      <Navbar.Toggle aria-controls="navbarScroll" />
     
        <Nav
          className="ms-5 mx-5 my-lg-0 "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1" className="lead">Home</Nav.Link>
          <Nav.Link href="#action2" className="lead">Link</Nav.Link>
          <Nav.Link href="#" className="lead">Link</Nav.Link>
          <Nav.Link href="#" className="lead">Link</Nav.Link>
          <Nav.Link href="#" className="lead">Link</Nav.Link>
        </Nav>
      
    </Navbar>
    </Container>
  );
}
