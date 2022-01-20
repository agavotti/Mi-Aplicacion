
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Loading from '../Components/Loading';
import { getByIdProductos } from "../Services/ProductosServices";

function DetalleProducto() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    console.log("id", id)
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

    return (
        <Loading loading={loading} configuration={{ animation: "grow", variant: "primary" }}>
            <p>{producto.name}</p>
            <p>{producto.price}</p>
            <p>{producto.description}</p>
        </Loading>
    );


}

export default DetalleProducto;
