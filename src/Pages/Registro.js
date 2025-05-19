import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/Forms/FormGroup';
import firebase from '../Config/firebase';
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import AlertCustom from '../Components/AlertCustom';
function Registro() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password);
      if (responseUser.user.uid) {
        const document = await firebase.db.collection("usuarios")
          .add({
            name: data.nombre,
            lastname: data.apellido,
            userId: responseUser.user.uid
          })
        console.log(document)
        setAlert({ variant: "success", text: "Registro exitoso" })
        setLoading(false)
      }
    } catch (e) {
      console.log(e.code)
      console.log(e)
      switch (e.code) {
        case "auth/weak-password":
          setAlert({ variant: "danger", text: "La contraseña debe tener al menos 6 caracteres" })
          break;
        case "auth/email-already-in-use":
          setAlert({ variant: "danger", text: "El email ya se encuentra registrado" })
          break;
        default:
          setAlert({ variant: "danger", text: "Ha ocurrido un error" })
      }
      setLoading(false)

    }

  }

  return (
    <div className="body">
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormGroup label="Nombre" type="text" register={{ ...register("nombre", { required: true }) }} />
        {errors.nombre && <span>El nombre es obligatorio</span>}
        <FormGroup label="Apellido" type="text" register={{ ...register("apellido", { required: true }) }} />
        {errors.apellido && <span>El apellido es obligatorio</span>}
        <FormGroup label="Email" type="email" register={{ ...register("email", { required: true }) }} />
        {errors.email && <span>El email es obligatorio</span>}
        <FormGroup label="Password" type="password" register={{ ...register("password", { required: true, minLength: 6 }) }} />
        {errors.password?.type === "required" && <div>El campo Contraseña es obligatorio</div>}
        {errors.password?.type === "minLength" && <div>Debe completar al menos 6 caracteres</div>}

        <ButtonWithLoading loading={loading} type="submit" variant="primary">Registrarse</ButtonWithLoading>
        <AlertCustom {...alert} />
      </form>
    </div>
  );


}

export default Registro;
