
import React from 'react';
function FormGroup(props) {
    const {label,type,register} = props
    return (
        <div>
            <label>{label}</label>
            <input type={type || "text"} {...register} />
        </div>
    );
}
export default FormGroup;
