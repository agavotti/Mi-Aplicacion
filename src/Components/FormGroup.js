
import React from 'react';
import {Form} from 'react-bootstrap'
function FormGroup(props) {
    const {label,type,register, placeholder, helptext} = props
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type || "text"} {...register} placeholder={placeholder || ""}/>
        <Form.Text className="text-muted">
          {helptext || ""}
        </Form.Text>
      </Form.Group>
    );
}
export default FormGroup;
