"use client"
import { ShoppingCartDataStates } from '@/@core/ShoppingCartData/ShoppingCartData'
import { useAppSelector } from '@/redux.config/hook'
import { useState } from 'react'


export default function Home() {

  /* Usar dados do carrinho de compras */
  const id = useAppSelector(ShoppingCartDataStates).ID
  const shoppingCartItems = useAppSelector(ShoppingCartDataStates).shoppingCartItems
  const [showData, setShowData] = useState(false)
  const GetData = () => {
    return `Id: ${id} - carrinho de compras: ${JSON.stringify(shoppingCartItems)}`
  }
  


  return (
    <div>
      <div onClick={() => { GetData(), setShowData(true) }}>
        <p>
          {showData ? GetData() : "Clique para vizualizar os dados"}
        </p>
      </div>
    </div>
  )
}
