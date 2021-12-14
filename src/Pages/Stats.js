import React,{useState,useEffect} from 'react';

import Gen from '../Components/Gen';
import {getStats} from "../Services/genServices"
function Stats() {
  const [stats,setStats] = useState([])
  const [loading,setLoading] = useState(true)


  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getStats()
          if(response.data){
            setStats(response.data)
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
      <div>
        Cargando ...
  
      </div>
    );
  }else{
    return (
      <div className="body">
        {<Gen datos={stats} />}
      </div>
    );
  }
  
}

export default Stats;
