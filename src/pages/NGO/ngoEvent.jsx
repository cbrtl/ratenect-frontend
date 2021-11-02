/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import {
  Form,
  Row,
  Col,
  Container,
  FloatingLabel,
  Button,
  Modal,
} from 'react-bootstrap';
import axios from 'axios';
// import { ImAttachment } from 'react-icons/im';

export default function NgoEventModal(props) {
  const [name, setName] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [startDate, setStartDate] = useState('');
  const [regEndDate, setRegEndDate] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [incentives, setIncentives] = useState('');
  const [volNum, setVolNum] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');

  const checkDateValidity = () => {
    const sd = startDate.split('-');
    const ed = regEndDate.split('-');
    const [startYear, startMonth, startDay] = sd;
    const [endYear, endMonth, endDay] = ed;
    if (startYear > endYear) {
      setError('Error: Start date cannot be after end date');
      return false;
    }
    if (startYear === endYear) {
      if (startMonth > endMonth) {
        setError('Error: Start date cannot be after end date');
        return false;
      }
      if (startMonth === endMonth) {
        if (startDay > endDay) {
          setError('Error: Start date cannot be after end date');
          return false;
        }
      }
    }
    setError('');
    return true;
  };

  useEffect(() => {
    let dateCheck = true;
    if (startDate && regEndDate) {
      dateCheck = checkDateValidity();
    }
    if (dateCheck) {
      setError('');
    } else {
      setError('Error: Start date cannot be after end date');
    }
  }, [startDate, regEndDate]);

  const addNewCampaign = () => {
    if (checkDateValidity) {
      const tagsArray = tags.split(',');
      const newCampaign = {
        name,
        shortDesc,
        startDate,
        regEndDate,
        eventDetails,
        incentives,
        volNum,
        tagsArray,
      };
      console.log(newCampaign);
      axios
        .post(`/api/createCampaign`, newCampaign)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      props.handleClose();
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Container style={{ width: '60vw', textAlign: 'center' }} className="p-5">
        <h3 style={{ marginBottom: '25px' }}>Create a New Campaign</h3>

        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formFile">
            <Col sm={2}>Image</Col>
            <Col>
              <Form.Control type="file" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name of the Campaign"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBody">
            <Form.Label column sm={2}>
              Short Description
            </Form.Label>
            <Col sm={10}>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Explain your event in one or two lines"
                style={{ color: 'grey' }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Type your text"
                  style={{ height: '100px' }}
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDateVenue"
          >
            <Col sm={2}>
              <Form.Label>Start Date</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="startDate"
                placeholder="Camapign starts on"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Col>
          </Form.Group>
          <p style={{ color: 'red' }}>{error}</p>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDateVenue"
          >
            <Col sm={2}>
              <Form.Label>Last date to Register</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="regEnds"
                placeholder="Last date to register"
                value={regEndDate}
                onChange={(e) => setRegEndDate(e.target.value)}
              />
            </Col>
          </Form.Group>

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
                  value={eventDetails}
                  onChange={(e) => setEventDetails(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBody">
            <Form.Label column sm={2}>
              Incentives
            </Form.Label>
            <Col sm={10}>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Incentives for Volunteers"
                style={{ color: 'grey' }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Details of your event"
                  style={{ height: '100px' }}
                  value={incentives}
                  onChange={(e) => setIncentives(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              No. of Volunteers
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder=" No. of Volunteers required for the Campaign"
                value={volNum}
                onChange={(e) => setVolNum(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Tags
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder=" Add tags separated by commas"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Row className="mt-4 p-3">
            <Col>
              <Button variant="success" onClick={addNewCampaign}>
                Publish Now
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Modal>
  );
}
