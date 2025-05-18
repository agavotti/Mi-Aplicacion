import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { altaGen } from "../Services/genServices";
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import AlertCustom from '../Components/AlertCustom';

function AltaGen2() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    const adn = [
      data.cadena1,
      data.cadena2,
      data.cadena3,
      data.cadena4,
      data.cadena5,
      data.cadena6,
    ];

    try {
      setLoading(true);
      const response = await altaGen(adn);
      
      if (response.status === 200) {
        setAlert({ variant: "success", text: "Gen creado. Es mutante." });
      } else {
        setAlert({ variant: "danger", text: `status: ${response.status}` });
      }
    } catch (e) {
      if (e.response?.status === 403) {
        setAlert({ variant: "success", text: "Gen creado. Es humano." });
      } else {
        setAlert({ variant: "danger", text: `status: ${e.response?.status || "Error desconocido"}` });
      }
    } finally {
      setLoading(false);
      reset(); // limpia el formulario
    }
  };

  const validationRules = {
    required: "No puede estar vacía",
    pattern: {
      value: /^[ACGT]{6}$/,
      message: "Debe contener 6 caracteres A, C, G o T",
    },
  };

  const renderInput = (name, label) => (
    <InputGroup className="mb-1">
      <InputGroup.Text id={name}>{label}° ACGT</InputGroup.Text>
      <FormControl
        placeholder="Ácidos ACGT"
        aria-describedby={name}
        {...register(name, validationRules)}
        isInvalid={!!errors[name]}
        onInput={(e) => e.target.value = e.target.value.toUpperCase()}
      />
      <FormControl.Feedback type="invalid">
        {errors[name]?.message}
      </FormControl.Feedback>
    </InputGroup>
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Genes:</label>
      {renderInput("cadena1", 1)}
      {renderInput("cadena2", 2)}
      {renderInput("cadena3", 3)}
      {renderInput("cadena4", 4)}
      {renderInput("cadena5", 5)}
      {renderInput("cadena6", 6)}

      <ButtonWithLoading loading={loading} type="submit" variant="primary">
        Registrar Gen
      </ButtonWithLoading>

      <AlertCustom {...alert} />
    </Form>
  );
}

export default AltaGen2;
