const getProducts = () => {

    fetch('../productos.json')
  
      .then((response) => response.json())
  
      .then((productos) => {
  
        pintarProductos(productos)
  
      })
  
  };