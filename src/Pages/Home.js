
import React,{useState,useEffect} from 'react';
import Gen from '../Components/Gen';
import {getAll,getStats} from "../Services/genServices"
function Home() {
  const [genes,setGenes] = useState([])
  const [loading,setLoading] = useState(true)
  const handleClick = ()=>{
    
  }
  /*function(res){
    return res.json()
  }*/
  useEffect(
    ()=>{
      console.log("useEffect")
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

      
      console.log("Hola")
    },
    []
  )
  if(loading){
    return (
      <div>
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

export default Home;
