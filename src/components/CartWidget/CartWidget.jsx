import '../CartWidget/CartWidget.css'

function CartWidget() {
  return (
    <img src="data:image/png;base64,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" alt="Icono Carrito" className="w-10"/> 
  )
}

export default CartWidget