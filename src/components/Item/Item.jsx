import React from 'react'
import '../Item/Item.css'

function Item({nombre, foto, precio, stock}) {
  return (
    <div className='card mt-5'>
        <div className='card-header'>
            <p className='fw-bold h2'>{nombre}</p>
        </div>
        <div className="card-body">
            <img src={foto} alt="Foto del producto" className='card-body_foto' />
            <p className='fst-italic h5'>${precio}ARS</p>
            <button className='btn btn-primary'>
                Ir al detalle
            </button>
        </div>
        <div className='card-footer'>
            <p className='fst-italic'>El stock es de: {stock}</p>
        </div>
    </div>
  )
}

export default Item