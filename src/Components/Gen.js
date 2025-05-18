import { Link } from "react-router-dom"
import { Card, Button, Col } from "react-bootstrap"

function Gen(props) {
  const { datos } = props
  const styles = {
    colorNegro: {
      color: "black"
    },
    cardContainer: {
      marginTop: "10px",
      marginRight: "10px",
      width: '18rem',
      flex: 1
    }
  }
  //const datos = props.datos
  return (
    <Col>
      <Card bg="dark" border="light" key={datos.id} style={styles.cardContainer}>
        <Card.Body>
          <Card.Title className="text-white">ID: {datos.id}</Card.Title>
          <Card.Text as="div" className="text-white">
            <strong>Genes:</strong>
            <ul>
              {datos.sequence.map((cadena, index) => (
                <li key={index} >{cadena}</li>
              ))}
            </ul>
          </Card.Text>
          <Button variant="primary" as={Link} to={'/Gen/' + datos.id}>Ver Gen</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Gen;
