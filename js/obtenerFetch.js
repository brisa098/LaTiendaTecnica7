// promesa sincronica
fetch('https://fakestoreapi.com/products') //endpoint
  .then(response => response.json())
  .then(data => console.log(data));
  

  //promesa asincronica
  const endpoint = './data/data.json'

  const obtenerProd = async() => {

    response = awaitFetch(endpoint)
    response = response.json()
    console.log(response)

  }