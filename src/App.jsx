import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a la tienda de artículos D&D" />
    </ChakraProvider>
  )
}

export default App