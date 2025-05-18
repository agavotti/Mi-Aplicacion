import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { getByIdProductos } from "../../Services/ProductosServices";
import firebase from '../../Config/firebase';

import FormGroup from '../../Components/Forms/FormGroup';
import Button from 'react-bootstrap/Button';
import ButtonWithLoading from '../../Components/Forms/ButtonWithLoading';
import AlertCustom from '../../Components/AlertCustom';

function ProductosModificar() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await getByIdProductos(id);
        const data = response.data();
        if (data) {
          setValue("name", data.name);
          setValue("price", data.price);
          setValue("description", data.description);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setAlert({ variant: "danger", text: "Error al obtener el producto" });
      }
    };

    fetchProducto();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await firebase.db.doc(`productos/${id}`).set(data);
      setAlert({ variant: "success", text: "Registro modificado exitosamente" });
      setTimeout(() => navigate('/productos/Lista'), 1000); // ← Redirige luego de 1 segundo
    } catch (e) {
      console.error(e);
      setAlert({ variant: "danger", text: `Error: ${e.code || "desconocido"}` });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("¿Estás seguro que querés eliminar este producto?");
    if (!confirm) return;
    setLoading(true);
    try {
      await firebase.db.doc(`productos/${id}`).delete();
      setAlert({ variant: "success", text: "Registro eliminado exitosamente" });
      setTimeout(() => navigate('/productos/Lista'), 1000); // ← Redirige luego de 1 segundo
    } catch (e) {
      console.error(e);
      setAlert({ variant: "danger", text: `Error: ${e.code || "desconocido"}` });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/productos/Lista');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label="Nombre"
          register={{ ...register("name", { required: "El nombre es obligatorio" }) }}
          placeholder="Ingrese el nombre"
        />
        {errors.name && <div className="text-danger">{errors.name.message}</div>}

        <FormGroup
          label="Precio"
          register={{ ...register("price", { required: "El precio es obligatorio" }) }}
          placeholder="Ingrese el precio"
        />
        {errors.price && <div className="text-danger">{errors.price.message}</div>}

        <FormGroup
          label="Descripción"
          register={{ ...register("description", { required: "La descripción es obligatoria" }) }}
          placeholder="Ingrese la descripción"
        />
        {errors.description && <div className="text-danger">{errors.description.message}</div>}

        <ButtonWithLoading loading={loading} type="submit" variant="primary">
          Guardar
        </ButtonWithLoading>
        <div className="mt-3 d-flex justify-content-between">
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </div>
        <AlertCustom {...alert} />
      </form>
    </div>
  );
}

export default ProductosModificar;