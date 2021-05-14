import React, {useEffect, useState} from 'react'
import ItemList from './ItemList.js'

const ItemListContainer = () =>{
    
    const [arrayItems, setArrayItems] = useState([]);

    useEffect(()=>{
        const task = new Promise((resolve, reject) => {

            const productos =[
                {
                    img : 'assets/img/computador1.png',
                    description : 'Computador All in One HP, Ryzen 5, Ram de 4 GB, 512 de disco SSD.',
                    id : 'PC-001',
                    titulo : 'Computador All in One HP',
                    precio : '2.500.000',
                    categoria : 'computador'
                },
                {
                    img : 'assets/img/impresora1.png',
                    description : 'Impresora Epson L350, sistema de tinta continua Full Color',
                    id : 'I-001',
                    titulo : 'Impresora Epson L350',
                    precio : '800.000',
                    categoria : 'impresora'
                },
                {
                    img : 'assets/img/celular1.png',
                    description : 'Celular Xioami Note Pro 10. 108 mpx de camara, 6gb de ram, procesador Qualcomm Equinox de 8 nucleos.',
                    id : 'C-001',
                    titulo : 'Celular Xioami Note Pro 10',
                    precio : '1.500.000',
                    categoria : 'celular'
                },
                {
                    img : 'assets/img/accesorio1.png',
                    description : 'Teclado Logitech Gamer KB-420 Retroiluminado, teclas mecanicas.',
                    id : 'AC-001',
                    titulo : 'Teclado Logitehc',
                    precio : '280.000',
                    categoria : 'accesorio'

                },
                {
                    img : 'assets/img/computador2.png',
                    description : 'Computador todo en uno Lenovo, Ryzen 5, Ram de 4 GB, 512 de disco SSD',
                    id : 'PC-002',
                    titulo : 'Computador todo en uno Lenovo',
                    precio : '2.700.000',
                    categoria : 'computador'
                },
                {
                    img : 'assets/img/impresora2.png',
                    description : 'Impresora Multifuncional HP Smart Tank 515',
                    id : 'I-002',
                    titulo : 'Impresora Multifuncional HP Smart Tank 515',
                    precio : '900.000',
                    categoria : 'impresora'
                },
                {
                    img : 'assets/img/celular2.png',
                    description : 'Celular Samsung A51',
                    id : 'C-002',
                    titulo : 'Celular Samsung A51',
                    precio : '1.100.000',
                    categoria : 'celular'
                },
                {
                    img : 'assets/img/accesorio2.png',
                    description : 'Mouse Gamer Logitech, 108 dpi',
                    id : 'AC-002',
                    titulo : 'Mouse Gamer Logitech ZQ30',
                    precio : '120.000',
                    categoria : 'accesorio'

                }
            ];
            setTimeout(() => {
                resolve(productos);
              }, 2000);
            })
      
            task.then((res) =>{
              setArrayItems(res)
            })
            .catch(()=>{
                console.log('Problemas al Cargar');
            })
            .finally(()=>{
                console.log('Finalizado');
            })
        },[])
    
    return(
        <ItemList productos={arrayItems}/>
    )
}

export default ItemListContainer