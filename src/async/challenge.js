import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Recordemos que por debajo fetch utiliza el concepto de las promesas
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// Ahora una funcion que se encargara de hacer las solicitudes a todos los productos, a un producto en particular y a la categoria de un producto

// Esta es la otra forma de usar aync con arrow function
const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log("---------------------------")
    console.log(product)
    console.log(product.title);
    console.log("-------------------------")
    console.log(category)
    console.log(category.name);
    // Caera en este catch en caso algo suceda con nuestra petición o algun error con la API caera en este recurso y nos mostrara que esta pasando
  } catch (error) {
    console.error(error);
  }
}

anotherFunction(API);
