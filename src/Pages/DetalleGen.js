
import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import {getByID} from "../Services/genServices"
import moment from 'moment'
import Loading from '../Components/Loading';
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
      <Loading loading={loading} configuration={{ animation: "grow", variant: "primary" }}>

      </Loading>
    );
  }else{
    return (
      <div className="body detalle">
        <p>ID: {gen.ID}</p>
        <p>{gen.Dna.map((genesCadenas, index) => <li key={index}>{genesCadenas}</li>)}</p>
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
