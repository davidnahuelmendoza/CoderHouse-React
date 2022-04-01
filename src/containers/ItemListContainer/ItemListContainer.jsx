import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
function ItemListContainer({greeting}) {
  return (
    <div>
        <h2>{greeting}</h2>
        <ItemCount initial={0} stock={10}/>
    </div>
  )
}
export default ItemListContainer