import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  // Ya fetch es una promesa por eso es que no hay necesidad de usar el new
  return fetch(urlApi);
};

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products[0]);
//   })
//   .then(() => {
//     console.log('Hola');
//   })
//   .catch(error => console.log(error));

// fetch devuelve una promesa
// fetch(API)
// 	.then(res => res.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

// Primera solicitud
fetchData(`${API}/products`)
  // con esto tranformamos lo que estamos recibiendo a un objeto
  .then(response => response.json())
  .then(products => {
    // Aca queremos mostrar todos los productos de la peticion antes hecha
    console.log(products)
    // Se realiza nueva petición (Segunda Solicitud)
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    // Aca queremos mostrar el title del producto que accedimos en la segunda solicitud
    console.log(product.title)
    // Se realiza nueva petición (Tercera solicitud)
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    // Aca queremos mostrar el nombre de la categoría
    console.log(category.name);
  })
  // Y finalmente si ocurre un error que lo capture y lo muestre
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));
