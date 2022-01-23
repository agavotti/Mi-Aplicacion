import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../../Components/Forms/FormGroup';
import {crearProducto} from "../../Services/ProductosServices"
import ButtonWithLoading from '../../Components/Forms/ButtonWithLoading';
function ProductosAlta() {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const [loading,setLoading] = useState(false)
    const onSubmit = async (data) => {
      try{
        setLoading(true)
        const document = await crearProducto(data)
        setLoading(false)
        console.log(document)
      }catch(e){
        console.log(e.code)
      }
      
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} placeholder="Ingrese su nombre" helpText="El nombre de tener al menos 1 caracter" />
          {errors.name && <div>El campo nombre es obligatorio</div>}
          <FormGroup label="Precio" register={{...register("price",{required:true})}} />
          {errors.price && <div>El campo nombre es obligatorio</div>}
          <FormGroup label="Descripcion" register={{...register("description",{required:true})}} />
          {errors.description && <div>El campo nombre es obligatorio</div>}

          <ButtonWithLoading loading={loading} type="submit" variant="primary">Guardar</ButtonWithLoading>
        </form>
  
      </div>
    );
  
  
}

export default ProductosAlta;
