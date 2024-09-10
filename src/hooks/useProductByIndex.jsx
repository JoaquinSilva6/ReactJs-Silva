export async function getMagicItemsByIndex(index) {
    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/magic-items/${index}`);
      if (!response.ok) {
        console.log('Error al cargar el artículo');
        return;
      }
  
      const data = await response.json();
  
      // Ahora accedemos al contenido adicional dentro de la URL (si es necesario)
      // Si `data.url` no es correcto, revisa cuál es el formato de la API
      if (data.url) {
        const additionalResponse = await fetch(data.url);
        if (!additionalResponse.ok) {
          console.log('Error al cargar el artículo adicional');
          return;
        }
  
        const additionalData = await additionalResponse.json();
        
        // Combina los datos del producto con los datos adicionales
        return {
          ...data,
          additionalData
        };
      } else {
        return data; // Si no hay `url`, retorna solo los datos principales
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
