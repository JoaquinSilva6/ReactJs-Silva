import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const ItemListContainer = ({ products }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {products.map((product) => (
        <Box key={product.index} borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
          <Text mt="2" fontWeight="bold">{product.name}</Text>
          <Text>${product.price}</Text>
          <Button variant="outline-info">
            <Link to={`/item/${product.index}`}>Comprar</Link>
          </Button>
        </Box>
      ))}
    </Grid>
  )
}
