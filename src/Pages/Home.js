
import React,{useState,useEffect} from 'react';
import Gen from '../Components/Gen';
import {getAll} from "../Services/genServices"
function Home() {
  const [genes,setGenes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(
    ()=>{
      getAll()
      .then(response=>{
        if(response.data){
          setLoading(false)
          setGenes(response.data)
          
        }
      })
      .catch(e=>{
        console.log(e)
      })
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
      <div className="body flex">
        {genes.map(genVar=><Gen datos={genVar} />)}
      </div>
    );
  }
  
}

export default Home;
