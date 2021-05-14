import React from 'react'

const Item = ({id, img, titulo, precio, descripcion, categoria}) =>{
    return(

        <div className='card'>
            <p className='id'>{id}</p>
            <div className='imagen'>
                <img src = {img} width="150" height="100" className='img-fluid'></img>
            </div>
            <div className='informacion'>
                <p>{titulo}</p>
                <p className='product_price'>
                    <strong>${precio}</strong>
                </p>
                <p className='product_info'>{descripcion}</p>    
            </div>
            <div className='button'>
                <button className='btn btn-primary'>Agregar al Carrito</button>
            </div>
        </div>      
    )
}

export default Item