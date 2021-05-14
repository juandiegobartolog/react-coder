import React from 'react'
import Item from './Item.js'


const ItemList = ({productos}) =>{

    return(
        <React.Fragment>
        <div className='catalogo'>Catalogo</div>
        {productos.map((dato) =>
           
            <div>
               <Item id={dato.id} img={dato.img} titulo={dato.titulo} precio={dato.precio} descripcion={dato.descripcion} categoria={dato.categoria} />
            </div>
        )}      
        </React.Fragment>
    )

}

export default ItemList