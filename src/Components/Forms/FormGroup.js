import React from 'react';
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';

function FormGroup(props) {
    const {label,type,register, placeholder, helptext} = props
    return (
        <Form.Group className="mb-3" controlId={label}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type || "text"} {...register} placeholder={placeholder || ""}/>
        <Form.Text className="text-muted">
          {helptext || ""}
        </Form.Text>
      </Form.Group>
    );
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  helptext: PropTypes.string
};

export default FormGroup;
