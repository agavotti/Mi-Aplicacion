import React, { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import Stat from '../Components/Stat';
import { getStats } from "../Services/genServices"
function Stats() {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(
    () => {
      const request = async () => {
        try {
          const response = await getStats()
          if (response.data) {
            setStats(response.data)
            setLoading(false)
          }
        } catch (e) {
          console.log(e)
        }
      }
      request()
    },
    []
  )
  return (
    <Loading loading={loading} configuration={{ animation: "grow", variant: "primary" }}>
      <div className="body">
        {<Stat datos={stats} />}
      </div>
    </Loading>
  );
}

export default Stats;
