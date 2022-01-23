
import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/Forms/FormGroup';
import firebase from '../Config/firebase'
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import { loginMessage } from "../Utils/errorMessage"
import AlertCustom from '../Components/AlertCustom';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ variant: "", text: "" })
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      console.log("antes de ir a firebase")
      const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
      if (responseUser.user.uid) {
        console.log(responseUser)
        const userInfo = await firebase.db.collection("usuarios")
          .where("userId", "==", responseUser.user.uid)
          .get()
          console.log(userInfo)
        if (userInfo) {
          console.log(userInfo)
          setLoading(false)
          context.loginUser(userInfo.docs[0]?.data())
          setAlert({ variant: "success", text: "Bienvenido" })
          navigate("/")
        }
      }
      else {
        setLoading(false)
        setAlert({ variant: "danger", text: "Usuario o contraseña incorrectos" })
        console.log(responseUser)
      }
    } catch (e) {
      console.log(e)
      setAlert({ variant: "danger", text: loginMessage[e] })
      setLoading(false)
      navigate("/login")
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
