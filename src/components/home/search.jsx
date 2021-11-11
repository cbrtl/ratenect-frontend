import React from 'react';
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
// import {Button, FormControl, Navbar,Nav,Form,InputGroup , ButtonToolbar, Container} from "react-bootstrap"
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  return (
    // <Container className=" my-3 justify-content-around align-items-center">
    // <Navbar  expand="lg" >
    //   <Form className="d-flex">
    //     <FormControl
    //       type="search"
    //       placeholder="Search"
    //       className="mr-2"
    //       aria-label="Search"
    //     />

    //     <Button variant="outline-success" >Search</Button>
    //   </Form>

    //   <Navbar.Toggle aria-controls="navbarScroll" />

    //     <Nav
    //       className="ms-5 mx-5 my-lg-0 "
    //       style={{ maxHeight: "100px" }}
    //       navbarScroll
    //     >
    //       <Nav.Link href="#action1" className="lead">Home</Nav.Link>
    //       <Nav.Link href="#action2" className="lead">Link</Nav.Link>
    //       <Nav.Link href="#" className="lead">Link</Nav.Link>
    //       <Nav.Link href="#" className="lead">Link</Nav.Link>
    //       <Nav.Link href="#" className="lead">Link</Nav.Link>
    //     </Nav>

    // </Navbar>
    // </Container>

    <div className="container mt-5">
      <div className="row">
        <div className="col-3 me-3 mt-1">
          <form>
            <div className="input-group ">
              <span className="input-group-text">
                <i className="bi bi-search" />
              </span>
              <input
                type="text"
                className="form-control"
                id="search"
                s
                placeholder="Search"
              />
            </div>
          </form>
        </div>

        {/* <button type="button" className="btn  btn-outline-dark col-3 me-3 "> Search </button> */}

        <button type="button" className="btn  btn-outline-dark col-2 m-1">
          {' '}
          Education{' '}
        </button>

        <button type="button" className="btn  btn-outline-dark col-2 m-1">
          {' '}
          Youth{' '}
        </button>

        <button type="button" className="btn  btn-outline-dark col-2 m-1">
          {' '}
          Health{' '}
        </button>

        <button type="button" className="btn btn-outline-dark col-2 m-1">
          {' '}
          Environment{' '}
        </button>
      </div>
    </div>
  );
}
