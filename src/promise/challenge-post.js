import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "Hola Holbieeeeeee",
  "price": 56900000,
  "description": "This a short description betty",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

// Sin poner el then de abajo ya funcionaria pero quiero ver que me va a responder el servidor
// cuando sucede de manera correcta almacenar esta información
postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));
