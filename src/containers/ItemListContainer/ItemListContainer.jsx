import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
function ItemListContainer({greeting}) {
  return (
    <div>
        <h2>{greeting}</h2>
        <ItemCount initial={0} stock={10}/>
        <ItemList />
    </div>
  )
}
export default ItemListContainer