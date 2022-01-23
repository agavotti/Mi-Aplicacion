import Home from '../Pages/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import DetalleGen from '../Pages/DetalleGen';
import Stats from '../Pages/Stats';
import Login from '../Pages/Login';
import React from 'react';
import Registro from '../Pages/Registro';
import AltaGen from '../Pages/AltaGen';
import AltaGen2 from '../Pages/AltaGen2';
import NotFound from '../Pages/NotFound';
import ProductosAlta from '../Pages/ABMProductos/ProductoAlta';
import ProductosModificar from '../Pages/ABMProductos/ProductoModificar';
import { Container } from 'react-bootstrap';
import DetalleProducto from '../Pages/DetalleProducto';
import ListaProductos from '../Pages/ABMProductos/ListaProductos';
import AuthContext from '../Context/AuthContext';
function Public() {
    return (
        <Router>
            <Menu />
            <Container>
                <AuthContext.Consumer>
                    {
                        context =>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/Mi-Aplicacion" element={<Home />} />
                                <Route path="/registro" element={<Registro />} />
                                <Route path="/login" element={<Login />} />
                                {
                                    context.userLogin &&
                                    <Route path="/AltaGen" element={<AltaGen />} />
                                }
                                {
                                    context.userLogin &&
                                    <Route path="/AltaGen2" element={<AltaGen2 />} />
                                }
                                {
                                    context.userLogin &&
                                    <Route path="/productos/alta" element={<ProductosAlta />} />
                                }
                                {
                                    context.userLogin &&
                                    <Route path="/productos/modificar/:id" element={<ProductosModificar />} />
                                }
                                <Route path="/productos/Lista" element={<ListaProductos />} />
                                <Route path="/producto/:id" element={<DetalleProducto />} />
                                <Route path="/Gen/:id" element={<DetalleGen />} />
                                <Route path="/stats" element={<Stats />} />


                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                    }
                </AuthContext.Consumer>
            </Container>
            <Footer />
        </Router>
    );
}

export default Public;