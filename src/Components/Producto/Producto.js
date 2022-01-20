
import { Card } from 'react-bootstrap'
import './Producto.css'
import { Col } from 'react-bootstrap'
import Actions from "./Actions"
const styles = {
    cardContainer: {
        marginTop: "10px",
        marginRight: "10px",
        width: '18rem',
        flex: 1
    }
}

function Producto(props) {
    const { datos } = props
    //const datos = props.datos
    return (
        <Col>
            <Card bg="dark" border="light" style={styles.cardContainer}>
                <Card.Img className="imgProducto" variant="top" src={datos.thumbnail} />
                <Card.Body>
                    <Card.Title>{datos.name}</Card.Title>
                    <Card.Subtitle>$ {datos.price}</Card.Subtitle>
                    <Card.Text>
                        {datos.description}
                    </Card.Text>
                    <Actions datos={datos} />
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Producto;
