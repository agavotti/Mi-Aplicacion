
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../../Components/Forms/FormGroup';
import Button from 'react-bootstrap/Button'
import firebase from '../../Config/firebase'
import { useParams } from "react-router-dom"
import { getByIdProductos } from "../../Services/ProductosServices"
import ButtonWithLoading from '../../Components/Forms/ButtonWithLoading';
import AlertCustom from '../../Components/AlertCustom';
function ProductosModificar() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const onSubmit = async (data) => {
    try {
      await firebase.db.doc("productos/" + id)
        .set(data)
      setAlert({ variant: "success", text: "Registro modificado exitosamente" })
      setLoading(false)
    } catch (e) {
      console.log(e.code)
      setAlert({ variant: "danger", text: "error: " + e.code })
      setLoading(false)
    }

  }
  useEffect(
    () => {
      const request = async () => {
        try {
          const response = await getByIdProductos(id)
          if (response) {
            setValue("name", response.data().name)
            setValue("price", response.data().price)
            setValue("description", response.data().description)
          }
        } catch (e) {
          console.log(e)
        }
      }
      request()
    },
    [id, setValue]
  )
  const handleDelete = async () => {
    try {
      await firebase.db.doc("productos/" + id)
        .delete()
      setAlert({ variant: "success", text: "Registro eliminado exitosamente" })
      setLoading(false)
    } catch (e) {
      setAlert({ variant: "danger", text: "error: " + e.code })
    }
  }

  return (
    <div>
      <Button onClick={handleDelete} variant="danger">Eliminar</Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Nombre" register={{ ...register("name", { required: true }) }} placeholder="Ingrese su nombre" helpText="El nombre de tener al menos 1 caracter" />
        {errors.name && <div>El campo nombre es obligatorio</div>}
        <FormGroup label="Precio" register={{ ...register("price", { required: true }) }} />
        {errors.price && <div>El campo nombre es obligatorio</div>}
        <FormGroup label="Descripcion" register={{ ...register("description", { required: true }) }} />
        {errors.description && <div>El campo nombre es obligatorio</div>}
        <ButtonWithLoading loading={loading} type="submit" variant="primary">Guardar</ButtonWithLoading>
        <AlertCustom {...alert} />
      </form>
    </div>
  );


}

export default ProductosModificar;
