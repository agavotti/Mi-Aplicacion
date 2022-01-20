
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/Forms/FormGroup';
import firebase from '../Config/firebase'
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import { loginMessage } from "../Utils/errorMessage"
import AlertCustom from '../Components/AlertCustom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ variant: "", text: "" })
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
      setLoading(false)
      console.log(responseUser.user.uid)
      setAlert({ variant: "success", text: "Bienvenido" })
    } catch (e) {
      console.log(e.code)
      setAlert({ variant: "danger", text: loginMessage[e.code] })
      setLoading(false)
    }

  }

  return (
    <div className="body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Email" type="email" register={{ ...register("email", { required: true }) }} />
        {errors.Email && <span>Es necesario un mail</span>}
        <FormGroup label="Password" type="password" register={{ ...register("password", { required: true, minLength: 6 }) }} />
        {errors.Password?.type === "required" && <div>El campo Contraseña es obligatorio</div>}
        {errors.Password?.type === "minLength" && <div>Debe completar al menos 6 caracteres</div>}
        <ButtonWithLoading loading={loading} type="submit" variant="primary">Ingresar</ButtonWithLoading>
        <AlertCustom {...alert} />
      </form>
    </div>
  );


}

export default Login;
