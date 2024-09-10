import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { MainRouter } from './routes'
import { MainLayout } from './layout'

function App() {
  return (
    <ChakraProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
      
    </ChakraProvider>
  )
}

export default App