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
import { Container } from 'react-bootstrap';
function Public() {
    return (
        <Router>
            <Menu />
            <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Mi-Aplicacion" element={<Home />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/AltaGen" element={<AltaGen />} />
                <Route path="/AltaGen2" element={<AltaGen2 />} />
                <Route path="/Gen/:id" element={<DetalleGen />} />
                <Route path="/stats" element={<Stats />} />


                <Route path="/*" element={<NotFound />} />
            </Routes>
            </Container>
            <Footer />
        </Router>
    );
}  

export default Public;