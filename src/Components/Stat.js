import {Card} from "react-bootstrap"

function Stat(props) {
  const {datos} = props
  const styles = {
    cardContainer:{
      marginTop: "10px",
      color:"white"
    }
  }
  return (
    <Card bg="dark" border="light" key={datos.ID} style={styles.cardContainer}>
    <Card.Body >
      <Card.Title>Estadisticas</Card.Title>
      <Card.Text as="div">
        <div>Humanos: {datos.countHumanDna}</div>
        <div>Mutantes: {datos.countMutantDna}</div>
        <div>Ratio: {datos.ratio}</div>
      </Card.Text>
    </Card.Body>
    </Card>
  );
}


export default Stat;
