
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import Button from 'react-bootstrap/Button'
function Registro() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
    return (
      <div className="body">
        <form  onSubmit={handleSubmit(onSubmit)}>

          <FormGroup label="Nombre" type="nombre" register={{...register("Nombre",{required:true})}} />
          {errors.Nombre && <span>Es necesario un mail</span>}
          <FormGroup label="Apellido" type="apellido" register={{...register("Apellido",{required:true})}} />
          {errors.Nombre && <span>Es necesario un mail</span>}
          <FormGroup label="Email" type="email" register={{...register("Email",{required:true})}} />
          {errors.Email && <span>Es necesario un mail</span>}
          <FormGroup label="Password" type="password" register={{...register("Password",{required:true,minLength:6})}} />
          {errors.Password?.type==="required" &&  <div>El campo Contraseña es obligatorio</div>}
          {errors.Password?.type==="minLength" &&  <div>Debe completar al menos 6 caracteres</div>}
          
          <Button type="submit" variant="primary" size="lg">Registrar</Button>{' '}
        </form>
      </div>
    );
  
  
}

export default Registro;
