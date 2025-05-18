
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Loading from '../Components/Loading';
import { getByIdProductos } from "../Services/ProductosServices";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function DetalleProducto() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(
        () => {
            const request = async () => {
                try {

                    const document = await getByIdProductos(id)
                    if (document) {
                        setProducto(document.data())
                        setLoading(false)
                    }
                } catch (e) {
                    console.log(e)
                }
            }
            request()
        },
        [id]
    )
    const handleCancel = () => {
        navigate('/productos/Lista');
    };

    return (
        <Loading loading={loading} configuration={{ animation: "grow", variant: "primary" }}>
            <p>{producto.name}</p>
            <p>{producto.price}</p>
            <p>{producto.description}</p>
            <div className="mt-3 d-flex justify-content-between">
                <Button variant="secondary" onClick={handleCancel}>
                    Cancelar
                </Button>
            </div>
        </Loading>
    );


}

export default DetalleProducto;
