import React from "react"
import { getMagicItems } from "../services/products.service"


    export const useProducts = () => {
        const [products, setProducts] = React.useState([])
        const [loading, setLoading] = React.useState(true)
      
        React.useEffect(() => {
          getMagicItems().then((items) => {
            setProducts(items)
            setLoading(false)
          })
        }, [])
      
        return { products, loading }
      }
