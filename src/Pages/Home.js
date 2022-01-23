
import React, { useState, useEffect } from 'react';
import Gen from '../Components/Gen';
import { getAll } from "../Services/genServices"
import { CardGroup } from 'react-bootstrap'
import Loading from '../Components/Loading';
function Home() {
  const [genes, setGenes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(
    () => {
      getAll()
        .then(response => {
          if (response.data) {
            setLoading(false)
            setGenes(response.data)

          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    []
  )
    return (
      <Loading loading={loading} configuration={{ animation: "grow", variant: "primary" }}>
        <CardGroup>
          {genes.map(gen => <Gen key={gen.ID.toString()} datos={gen} />)}
        </CardGroup>
      </Loading>
    );
  }


export default Home;
