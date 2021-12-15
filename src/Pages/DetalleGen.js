
import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import {getByID} from "../Services/genServices"
import moment from 'moment'
function DetalleGen() {
  const [gen,setGen] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getByID(id);
          if(response.data){
            setGen(response.data)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
    },
    [id]
  )
  if(loading){
    return (
      <div className="body detalle">
        Cargando ...
  
      </div>
    );
  }else{
    return (
      <div className="body detalle">
        <p>{gen.id}</p>
        <p>{gen.Dna.map(genesCadenas=><li>{genesCadenas}</li>)}</p>
        <p>Es Mutante: {booleanToString(gen.EsMutante)}</p>
        <p>Fecha alta: {moment(gen.FechaAlta).format('DD/MM/YYYY HH:mm:SS')}</p>
      </div>
    );
  }
  
}


function booleanToString(bool){
  switch(bool){
      case true: return "Si";
      case false: return "No";
      default: return String(bool);
  }
}

export default DetalleGen;
