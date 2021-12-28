import {Card, Button, Row, Col} from "react-bootstrap"

function Stat(props) {
  const {datos} = props
  const styles = {
    cardContainer:{
      marginTop: "10px"
    }
  }
  return (
    <Card bg="dark" border="light" key={datos.ID} style={styles.cardContainer}>
    <Card.Body >
      <Card.Title>Estadisticas</Card.Title>
      <Card.Text>
        <p>Humanos: {datos.CountHumantDNA}</p>
        <p>Mutantes: {datos.CountMutantDNA}</p>
        <p>Ratio: {datos.Ratio}</p>
      </Card.Text>
    </Card.Body>
    </Card>
  );
}


export default Stat;
