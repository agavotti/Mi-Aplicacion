
function Stat(props) {
  const {datos} = props
  //const datos = props.datos
  return (
    <div className="" >
     <p>Humanos: {datos.CountHumantDNA}</p>
     <p>Mutantes: {datos.CountMutantDNA}</p>
     <p>Ratio: {datos.Ratio}</p>
    </div>
  );
}


export default Stat;
