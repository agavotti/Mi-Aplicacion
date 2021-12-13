
import React from 'react';
import {Link} from "react-router-dom"
function Menu() {
  
    return (
      <div className='BordeMenu'>
        <ul >
          <li className='Menu'><Link to="/">Inicio</Link></li>
          <li className='Menu'><Link to="/detalle">Detalle</Link></li>
          <li className='Menu'><Link to="/stats">Stats</Link></li>
          <li className='Menu'><Link to="/login">Login</Link></li>
          <li className='Menu'><Link to="/register">Register</Link></li>
        </ul>
  
      </div>
    );
  
}

export default Menu;
