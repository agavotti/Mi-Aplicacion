
import React from 'react';
import {Link} from "react-router-dom"
function Menu() {
  
    return (
      <div>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/detalle">Detalle</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
  
      </div>
    );
  
}

export default Menu;
