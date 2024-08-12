const getProducts = () => {

  fetch('data/productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();  // Convierte la respuesta en JSON
  })
  .then(productos => {
    pintarProductos(productos);
  })

  };