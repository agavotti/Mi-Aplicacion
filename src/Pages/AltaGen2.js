
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import {altaGen} from "../Services/genServices"
import {Alert,InputGroup,FormControl,Button, Form } from 'react-bootstrap';

function AltaGen2() 
{
  const { register, handleSubmit, watch, formState: { errors2 } } = useForm();
  const [ errors, setErrors ] = useState({})
  const onSubmit = data => {
    console.log(data);
    
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      var adn = [data.Cadena1, data.Cadena2, data.Cadena3, data.Cadena4, data.Cadena5, data.Cadena6];
      request(adn);
    }
    
  }
  const [form, setForm] = useState({Cadena1:'', Cadena2:'', Cadena3:'', Cadena4:'', Cadena5:'', Cadena6:''});
  function limpiarForm(){
    setForm({Cadena1:'', Cadena2:'', Cadena3:'', Cadena4:'', Cadena5:'', Cadena6:''});
  }
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }
  const findFormErrors = () => {
    const { cadena1, cadena2, cadena3, cadena4, cadena5, cadena6 } = form
    const newErrors = {}
    const regex = /([A]|[G]|[C]|[T]){6}/
    // cadena1 errors
    if ( !cadena1 || cadena1 === '' ) newErrors.cadena1 = 'No puede estar vacia!'
    else if ( cadena1.length !== 6) newErrors.cadena1 = 'La longitud debe ser de 6 caracteres!'
    else if( regex.test(cadena1) === false ) newErrors.cadena1 = 'Debe contener solo caracteres A, C, G o T!'
    // cadena2 errors
    if ( !cadena2 || cadena2 === '' ) newErrors.cadena2 = 'No puede estar vacia!'
    else if ( cadena2.length !== 6) newErrors.cadena2 = 'La longitud debe ser de 6 caracteres!'
    else if( regex.test(cadena2) === false ) newErrors.cadena2 = 'Debe contener solo caracteres A, C, G o T!'
    // cadena3 errors
    if ( !cadena3 || cadena3 === '' ) newErrors.cadena3 = 'No puede estar vacia!'
    else if ( cadena3.length !== 6) newErrors.cadena3 = 'La longitud debe ser de 6 caracteres!'
    else if( regex.test(cadena3) === false ) newErrors.cadena3 = 'Debe contener solo caracteres A, C, G o T!'
    // cadena4 errors
    if ( !cadena4 || cadena4 === '' ) newErrors.cadena4 = 'No puede estar vacia!'
    else if ( cadena4.length !== 6) newErrors.cadena4 = 'La longitud debe ser de 6 caracteres!'
    else if( regex.test(cadena4) === false ) newErrors.cadena4 = 'Debe contener solo caracteres A, C, G o T!'
    // cadena5 errors
    if ( !cadena5 || cadena5 === '' ) newErrors.cadena5 = 'No puede estar vacia!'
    else if ( cadena5.length !== 6) newErrors.cadena5 = 'La longitud debe ser de 6 caracteres!'
    else if( regex.test(cadena5) === false ) newErrors.cadena5 = 'Debe contener solo caracteres A, C, G o T!'
    // cadena6 errors
    if ( !cadena6 || cadena6 === '' ) newErrors.cadena6 = 'No puede estar vacia!'
    else if ( cadena6.length !== 6) newErrors.cadena6 = 'La longitud debe ser de 6 caracteres!'
    else if( regex.test(cadena6) === false ) newErrors.cadena6 = 'Debe contener solo caracteres A, C, G o T!'
    
    console.log(newErrors);
    return newErrors
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
      
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Genes:</label>
            <InputGroup className="mb-1">
              <InputGroup.Text id="Cadena1">1° ACGT</InputGroup.Text>
              <FormControl placeholder="Acidos ACGT" aria-describedby="Cadena1" onChange={ e => setField('cadena1', e.target.value)} isInvalid={ !!errors.cadena1 }/>
              <FormControl.Feedback type='invalid'>
                  { errors.cadena1 }
              </FormControl.Feedback>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text id="Cadena2">2° ACGT</InputGroup.Text>
              <FormControl placeholder="Acidos ACGT" aria-describedby="Cadena2" onChange={ e => setField('cadena2', e.target.value)} isInvalid={ !!errors.cadena2 }/>
              <FormControl.Feedback type='invalid'>
                  { errors.cadena2 }
              </FormControl.Feedback>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text id="Cadena3">3° ACGT</InputGroup.Text>
              <FormControl placeholder="Acidos ACGT" aria-describedby="Cadena3" onChange={ e => setField('cadena2', e.target.value) } isInvalid={ !!errors.cadena3 }/>
              <FormControl.Feedback type='invalid'>
                  { errors.cadena3}
              </FormControl.Feedback>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text id="Cadena4">4° ACGT</InputGroup.Text>
              <FormControl placeholder="Acidos ACGT" aria-describedby="Cadena4" onChange={ e => setField('cadena4', e.target.value) } isInvalid={ !!errors.cadena4 }/>
              <FormControl.Feedback type='invalid'>
                  { errors.cadena4 }
              </FormControl.Feedback>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text id="Cadena5"> 5° ACGT</InputGroup.Text>
              <FormControl placeholder="Acidos ACGT" aria-describedby="Cadena5" onChange={ e => setField('cadena5', e.target.value) } isInvalid={ !!errors.cadena5 }/>
              <FormControl.Feedback type='invalid'>
                  { errors.cadena5 }
              </FormControl.Feedback>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text id="Cadena6"> 6° ACGT</InputGroup.Text>
              <FormControl placeholder="Acidos ACGT" aria-describedby="Cadena6" onChange={ e => setField('cadena6', e.target.value) } isInvalid={ !!errors.cadena6 }/>
              <FormControl.Feedback type='invalid'>
                  { errors.cadena6 }
              </FormControl.Feedback>
            </InputGroup>
            <Button variant="primary" type="submit"> Registrar Gen </Button>
        </Form>
    );
  
  
}

// function ValidarAcidos(cadena){
//   cadena = cadena.replaceAll('C','');
//   cadena = cadena.replaceAll('T','');
//   cadena = cadena.replaceAll('G','');
//   cadena = cadena.replaceAll('A','');
//   return cadena;
// }


export default AltaGen2;
