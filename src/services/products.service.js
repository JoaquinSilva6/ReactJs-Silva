//la API que utilizo solo me proporciona nombres de articulos e ID, los precios los genero de manera aleatoria

export async function getMagicItems() {
    try {
      const response = await fetch('https://www.dnd5eapi.co/api/magic-items')
      if (!response.ok) {
        console.log('Error al obtener los objetos')
        return null
      }
      const data = await response.json()
      
      const productsPrecio = data.results.slice(0, 20).map(item => ({
        ...item,
        price: (Math.random() * 40).toFixed(2)
      }))
      
      return productsPrecio
    } catch (error) {
      console.log(error)
      return []
    }
  }

  export async function getMagicItemsByIndex(index) {
    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/magic-items/${index}`)
      
      if (!response.ok) {
        console.log('Error al cargar el artículo')
        return null
      }
      const data = await response.json()

      let datosAdicionales
  
      if (data.url) {
        const detalles = await fetch(data.url)
        if (detalles.ok) {
          datosAdicionales = await datosAdicionales.json()
        } else {
          console.log('Error al cargar los detalles adicionales')
        }
      }
      return {
        product: data,
        details: datosAdicionales || {} 
      }
    } catch (error) {
      console.log(error)
    }
  }

