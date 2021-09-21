import React from 'react';
import {
  Form,
  Row,
  Col,
  Container,
  FloatingLabel,
  Button,
} from 'react-bootstrap';

export default function NgoEvent() {
  return (
    <Container style={{ width: '70vw' }} className="p-5">
      <Form>
        <Form.Group className="mb-3" controlId="formHorizontalImage">
          <Form.Label>Banner Image</Form.Label>

          <Form.Control type="file" placeholder="Image" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formHorizontalBody">
          <Form.Label>Body</Form.Label>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Type your text"
            style={{ color: 'grey' }}
          >
            <Form.Control
              placeholder="Type your text"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorizontalDateVenue">
          <Form.Label>Select Date</Form.Label>

          <Form.Control type="date" name="dob" placeholder="Date of Birth" />
        </Form.Group>

        {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel> */}
        <Form.Group className="mb-3" controlId="formHorizontalBody">
          <Form.Label>Details</Form.Label>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Details of your event"
            style={{ color: 'grey' }}
          >
            <Form.Control
              as="textarea"
              placeholder="Details of your event"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Form.Group>
        {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalBody">
                <Form.Label column sm={2}>
                Incentives/Certificates(if any)
                </Form.Label>
                <Col sm={10}>
                <FloatingLabel controlId="floatingTextarea2" label="Type your text" style={{color:'grey'}}>
                    <Form.Control as="textarea" placeholder="Details of your event"  style={{height:'100px'}}/>
                </FloatingLabel>
                </Col>
            </Form.Group> */}
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Incentives/Certificates(if any)"
        >
          <Form.Control
            as="textarea"
            placeholder="Incentives/Certificates(if any)"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <Row className="g-2 pt-3">
          <Col md>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Number of Volunteers"
            >
              <Form.Control type="number" placeholder="1" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Types of Volunteers needed"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2 p-3">
          <Col className="ms-5">
            <Button variant="outline-success">Publish Now</Button>{' '}
          </Col>
          <Col className="m-auto">
            <Button variant="outline-success">Save as Draft</Button>{' '}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
