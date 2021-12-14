import moment from 'moment';
import {Link} from "react-router-dom"

function Gen(props) {
  const {datos} = props
  //const datos = props.datos
  return (
    <div className="" >
     <p>ID: {datos.ID}</p>
     <p>Genes: {datos.Dna.map(genesCadenas=><li>{genesCadenas}</li>)}</p>
     <button className="btn btn-white"><Link to={'/Gen/'+datos.ID} className='withe'>Ver Detalle Gen</Link></button>

    </div>
  );
}

export default Gen;
