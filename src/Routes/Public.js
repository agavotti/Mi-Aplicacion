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
import Register from '../Pages/Registro';
import ListaGenes from '../Pages/ListaGenes';

function Public() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalle" element={<DetalleGen />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}  

export default Public;