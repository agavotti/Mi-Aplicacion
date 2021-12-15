
import React from 'react';
import {Link} from "react-router-dom"
function Menu() {
  
    return (
      <div className='BordeMenu AncladoTop'>
        <ul >
          <li className='Menu'><Link to="/">Inicio</Link></li>
          <li className='Menu'><Link to="/Registro">Registro</Link></li>
          <li className='Menu'><Link to="/login">Login</Link></li>
          <li className='Menu'><Link to="/AltaGen">AltaGen</Link></li>
          <li className='Menu'><Link to="/stats">Stats</Link></li>
        </ul>
  
      </div>
    );
  
}

export default Menu;
