import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { useProducts } from '../hooks'

export const Home = () => {

  const { products, loading } = useProducts()
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <ItemListContainer products={products} />
  )
}
