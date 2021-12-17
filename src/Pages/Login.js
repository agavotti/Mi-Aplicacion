
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
      <div className="body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Email" type="email" register={{...register("Email",{required:true})}} />
        {errors.Email && <span>Es necesario un mail</span>}
        <FormGroup label="Password" type="password" register={{...register("Password",{required:true,minLength:6})}} />
        {errors.Password?.type==="required" &&  <div>El campo Contraseña es obligatorio</div>}
        {errors.Password?.type==="minLength" &&  <div>Debe completar al menos 6 caracteres</div>}
        <button type="submit">Login</button>
      </form>
    </div>
    );
  
  
}

export default Login;
