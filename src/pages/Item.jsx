import React from 'react'
import { useParams } from 'react-router'
import { useProductById } from '../hooks'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
export const Item = () => {
  const { id } = useParams()
  const { product } = useProductById(id)


  return (
    <ItemDetailContainer product={product}/>
  )
}
