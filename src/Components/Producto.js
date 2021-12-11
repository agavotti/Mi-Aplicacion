import './App.css';
import React,{useState,useReducer} from 'react';

function Producto({nombre,descripcion,precio,unidades,productoNumero}) {
    const [mensaje,setMensaje] = useState('')
    const handleClick = ()=>{
        setMensaje("Gracias por su compra!!")
        
      }
      
    return (
        <div className="producto">
            <p>{nombre} </p>
            <p>{descripcion}</p>
            <p>{precio} </p>
            <p>{productoNumero} </p>
            <p>{unidades} Unidades </p>
            <button onClick={handleClick}>Comprar</button> 
            <p>{mensaje}</p>
        </div>
    )
}
export default Producto;