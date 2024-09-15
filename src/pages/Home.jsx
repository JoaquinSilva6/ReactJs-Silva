import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { useProducts } from '../hooks'

export const Home = () => {

  const { products} = useProducts()
  return (
    <ItemListContainer products={products} />
  )
}
