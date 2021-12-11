
import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import {getByID} from "../Services/genServices"
import moment from 'moment'
function DetalleGen() {
  const [gen,setGen] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
  console.log("id",id)
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
      <div>
        Cargando ...
  
      </div>
    );
  }else{
    return (
      <div>
        <p>{gen.Dna.map(genesCadenas=><li>{genesCadenas}</li>)}</p>
        <p>{moment(gen.FechaAlta).format('DD/MM/YYYY HH:mm:SS')}</p>
      </div>
    );
  }
  
}

export default DetalleGen;
