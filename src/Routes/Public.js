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
import NotFound from '../Pages/NotFound';

function Public() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/AltaGen" element={<AltaGen />} />
                <Route path="/Gen/:id" element={<DetalleGen />} />
                <Route path="/stats" element={<Stats />} />


                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}  

export default Public;