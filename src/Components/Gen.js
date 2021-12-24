import {Link} from "react-router-dom"
import {Card, Button} from "react-bootstrap"

function Gen(props) {
  const {datos} = props
  const styles = {
    colorNegro:{
      color: "black"
    },
    cardContainer:{
      marginTop: "10px",
      width: '18rem',
      flex: 1
    }
  }
  //const datos = props.datos
  return (
    <Card key={datos.ID} style={styles.cardContainer}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={styles.colorNegro}>
      <Card.Title>ID: {datos.ID}</Card.Title>
      <Card.Text>
        Genes: {datos.Dna.map(genesCadenas=><li>{genesCadenas}</li>)}
      </Card.Text>
      <Button variant="primary" as={Link} to={'/Gen/'+datos.ID} >Go somewhere</Button>
    </Card.Body>
    </Card>
  );
}

export default Gen;
