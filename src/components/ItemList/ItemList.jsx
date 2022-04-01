import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'
import Item from '../Item/Item'

function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

  return (
    <div className='container'>
        {
            loading ?
            <h4 className='mt-5 fst-italic'>Cargando..</h4>
            :
            productos.map((item) => {
                return(
                    <div key={item.id}>
                        <Item nombre={item.nombre} foto={item.foto} precio={item.precio} stock={item.stock} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ItemList