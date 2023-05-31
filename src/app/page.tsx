"use client"
import { ShoppingCartDataStates, setID, setShoppingCartItems } from '@/@core/ShoppingCartData/ShoppingCartData'
import { useAppDispatch, useAppSelector } from '@/redux.config/hook'
 
export default function Home() {

  /* Usar dados do carrinho de compras */
  const id = useAppSelector(ShoppingCartDataStates).ID
  const shoppingCartItems = useAppSelector(ShoppingCartDataStates).shoppingCartItems


  /* Modificar dados do carrinho de compras */
  const dispatch = useAppDispatch();
  const modificarID = () => dispatch(setID("999"))
  const modificarShoppingCartItems = () => dispatch(setShoppingCartItems({
    carne: "2kg",
    arroz: "1kg"
  }))


  return (
    <div>
      <div>
        <p>
          {`Id: ${id} - carrinho de compras: ${JSON.stringify(shoppingCartItems)}`}
        </p>
      </div>
      <div>
        <button onClick={modificarID}>Modificar ID</button><br />
        <button onClick={modificarShoppingCartItems}>Modificar shoppingCartItems</button>
      </div>
    </div>
  )
}
