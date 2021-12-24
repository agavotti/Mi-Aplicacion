
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import {altaGen} from "../Services/genServices"
import {Alert} from 'react-bootstrap';

function AltaGen() 
{
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    var adn = [data.Cadena1, data.Cadena2, data.Cadena3, data.Cadena4, data.Cadena5, data.Cadena6];
    request(adn);
  }
  const [form, setForm] = useState({Cadena1:'', Cadena2:'', Cadena3:'', Cadena4:'', Cadena5:'', Cadena6:''});
  function limpiarForm(){
    setForm({Cadena1:'', Cadena2:'', Cadena3:'', Cadena4:'', Cadena5:'', Cadena6:''});
  }
  
  const request = async (adn)=>{
      try{
        console.log("request", adn);
        const response = await altaGen(adn);
        if(response.status === 200){
          <Alert key="Succes" variant="succes">
            Gen creado. Es mutante
          </Alert>
          alert("Gen creado. Es mutante");
          limpiarForm();
        }
        else{
          alert("status: " + response.status);
        }
      }catch(e){
        if(e.response.status === 403){
          <Alert key="Danger" variant="danger">
            Gen creado. Es Humano
          </Alert>
          alert("Gen creado. Es humano");
          limpiarForm();
        }
        else alert("error: " + e.response.status);
      }
    }
    return (
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='CargaGen'>
            <label>Genes:</label>
            <FormGroup register={{...register("Cadena1",{required:true,pattern:/([A]|[G]|[C]|[T]){6}/})}} />
            {errors.Cadena1?.type==="required" &&  <div>El campo es obligatorio</div>}
            {errors.Cadena1?.type==="pattern" &&  <div>Caracteres permitidos A, C, G y T</div>} 
            <FormGroup register={{...register("Cadena2",{required:true,pattern: /([A]|[G]|[C]|[T]){6}/})}} />
            {errors.Cadena2?.type==="required" &&  <div>El campo es obligatorio</div>}
            {errors.Cadena2?.type==="pattern" &&  <div>Caracteres permitidos A, C, G y T</div>} 
            <FormGroup register={{...register("Cadena3",{required:true,pattern:/([A]|[G]|[C]|[T]){6}/})}} />
            {errors.Cadena3?.type==="required" &&  <div>El campo es obligatorio</div>}
            {errors.Cadena3?.type==="pattern" &&  <div>Caracteres permitidos A, C, G y T</div>} 
            <FormGroup register={{...register("Cadena4",{required:true,pattern:/([A]|[G]|[C]|[T]){6}/})}} />
            {errors.Cadena4?.type==="required" &&  <div>El campo es obligatorio</div>}
            {errors.Cadena4?.type==="pattern" &&  <div>Caracteres permitidos A, C, G y T</div>} 
            <FormGroup register={{...register("Cadena5",{required:true,pattern:/([A]|[G]|[C]|[T]){6}/})}} />
            {errors.Cadena5?.type==="required" &&  <div>El campo es obligatorio</div>}
            {errors.Cadena5?.type==="pattern" &&  <div>Caracteres permitidos A, C, G y T</div>} 
            <FormGroup register={{...register("Cadena6",{required:true,pattern:/([A]|[G]|[C]|[T]){6}/})}} />
            {errors.Cadena6?.type==="required" &&  <div>El campo es obligatorio</div>}
            {errors.Cadena6?.type==="pattern" &&  <div>Caracteres permitidos A, C, G y T</div>} 

          </div>
          <button type="submit"className="btn btn-white white">Registrar Gen</button>
        </form>
        
      </div>
    );
  
  
}

// function ValidarAcidos(cadena){
//   cadena = cadena.replaceAll('C','');
//   cadena = cadena.replaceAll('T','');
//   cadena = cadena.replaceAll('G','');
//   cadena = cadena.replaceAll('A','');
//   return cadena;
// }


export default AltaGen;
