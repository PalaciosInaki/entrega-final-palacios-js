const getProducts = () => {

    fetch('../products.json')
  
      .then((response) => response.json())
  
      .then((productos) => {
  
        pintarProductos(productos)
  
      })
  
  };