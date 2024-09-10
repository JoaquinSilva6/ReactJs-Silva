import React from 'react'
import { useParams } from 'react-router'
import { useProductByIndex } from '../hooks/useProductByIndex'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
export const Item = () => {
  const { index } = useParams()

  const { product } = useProductByIndex(index)
  return (
    <ItemDetailContainer product={product}/>
  )
}
