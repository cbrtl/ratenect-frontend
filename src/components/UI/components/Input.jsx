import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/input.css';

function Input(props) {
  const { type, placeholder, value, onChange } = props;
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </div>
  );
}

export default Input;
