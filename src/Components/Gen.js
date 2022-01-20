import { Link } from "react-router-dom"
import { Card, Button, Row, Col } from "react-bootstrap"

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
    <Row xs={4} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="dark" border="light" key={datos.ID} style={styles.cardContainer}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body >
              <Card.Title>ID: {datos.ID}</Card.Title>
              <Card.Text>
                Genes: {datos.Dna.map((genesCadenas, index) => <li key={index}>{genesCadenas}</li>)}
              </Card.Text>
              <Button variant="primary" as={Link} to={'/Gen/' + datos.ID} >Ver Gen</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Gen;
