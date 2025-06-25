// promesa sincronica
// fetch('https://fakestoreapi.com/products') //endpoint
//   .then(response => response.json())
//   .then(data => console.log(data));
  
  //promesa asincronica
const endpoint = './data/data.json'
const obtenerProd = async() => {
    response = await fetch('./data/data.json')
    response = await response.json()
    console.log(response)
  }
  //promesa asincronica2
  // const obtenerProd2 = async() => {
  // try{
  // response = awaitFetch(endpoint)
  //   response = awaitresponse.json()
  //   console.log(response)
  // }
  // catch{
  //   console.log("error")
  //  } 

  // }