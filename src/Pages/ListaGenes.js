
import React,{useState,useEffect} from 'react';
import Gen from '../Components/Gen';
import {getAll} from "../Services/genServices"
function ListaGenes() {
  const [genes,setGenes] = useState([])
  const [loading,setLoading] = useState(true)


  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAll()
          if(response.data.results){
            setGenes(response.data.results)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
    },
    []
  )
  if(loading){
    return (
      <div className="body">
        Cargando ...
  
      </div>
    );
  }else{
    return (
      <div className="body">
        {genes.map(genVar=><Gen datos={genVar} />)}
      </div>
    );
  }
  
}

export default ListaGenes;
