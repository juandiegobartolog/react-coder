import React from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () =>{
    return(        
       <FontAwesomeIcon icon={faShoppingCart} />
    )
}

export default CartWidget