
import React,{useState,useEffect} from 'react';
import Gen from '../Components/Gen';
import {getAll} from "../Services/genServices"
import {CardGroup, Spinner} from 'react-bootstrap'
import firebase from '../Config/firebase';
function Home() {
  const [genes,setGenes] = useState([])
  const [loading,setLoading] = useState(true)
  console.log("firebase",firebase);
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
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }else{
    return (
      <CardGroup>
        {genes.map(genVar=><Gen datos={genVar} />)}
      </CardGroup>
    );
  }
  
}

export default Home;
