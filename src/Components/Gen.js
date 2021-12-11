import moment from 'moment';
import {Link} from "react-router-dom"

function Gen(props) {
  const {datos} = props
  //const datos = props.datos
  return (
    <div className="" >
     <p>Genes: {datos.Dna.map(genesCadenas=><li>{genesCadenas}</li>)}</p>
     <p>Es Mutante: {booleanToString(datos.EsMutante)}</p>
     <p>Fecha alta: {moment(datos.FechaAlta).format('DD/MM/YYYY HH:mm:SS')}</p>
     <button className="btn btn-white"><Link to={'/detalleGen/'+datos.id}>Ver Detalle</Link></button>

    </div>
  );
}

function booleanToString(bool){
  switch(bool){
      case true: return "Si";
      case false: return "No";
      default: return String(bool);
  }
}

export default Gen;
