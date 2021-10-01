import React from 'react';
import {
  Form,
  Row,
  Col,
  Container,
  FloatingLabel,
  Button,
} from 'react-bootstrap';
// import { ImAttachment } from 'react-icons/im';

export default function NgoEvent() {
  return (
    <Container style={{ width: '70vw' }} className="p-5">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formFile">
          <Col sm={2}>Image</Col>
          <Col>
            <Form.Control type="file" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBody">
          <Form.Label column sm={2}>
            Body
          </Form.Label>
          <Col sm={10}>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Type your text"
              style={{ color: 'grey' }}
            >
              <Form.Control
                as="textarea"
                placeholder="Type your text"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalDateVenue"
        >
          |
          <Col sm={2}>
            <Form.Label>Select Date</Form.Label>
          </Col>
          <Col>
            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
          </Col>
        </Form.Group>

        {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel> */}
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBody">
          <Form.Label column sm={2}>
            Details
          </Form.Label>
          <Col sm={10}>
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
          </Col>
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
        <Row className="mt-4 p-3">
          <Col sm={2}>
            <Button variant="outline-success">Publish Now</Button>{' '}
          </Col>
          <Col sm={2}>
            <Button variant="outline-success">Save as Draft</Button>{' '}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
