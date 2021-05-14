import React from 'react'
import CartWidget from './CartWidget'
import logo from './img/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
      
      <div>
        <nav>
          <ul className='navbar'>     
            <li>
              <img src={logo} className='logo'></img>
            </li>
            <li>                      
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Computadores</a>
            </li>
            <li>
              <a>Impresoras</a>
            </li>
            <li>
              <a>Accesorios</a>
            </li>
            <li>
              <a>Celulares</a>
            </li>
            <li>
            <CartWidget/>
            </li>
          </ul>
        </nav>
        </div>
        
      
    )
}

export default Navbar