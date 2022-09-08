const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    // Con el 4 le decimos que queremos que valide cuando este completada la informacion para hacer un valor particular
    if (xhttp.readyState === 4) {
      // Status code de 200 es todo correcto
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1){
  // Si tengo un error quiero que pare toda la ejecución porque ya me dio un error
  if (error1) return console.error(error1);
  // Quiero que dentro de fetchData vuelva a llamar a fetchData con otra lógica consecuente de obtener la información
  // Ya no quiero llamar a products sino a un producto en particular
  // Que sera del primer elemento del array que yo obtengo y que me su id
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    // Ahora nuevamente puedo anidar otra petición sabiendo que ya tenemos la data que hicimos
    // del fetch data anterior pero ahora pidiendo otra cosa en este caso sobre la categoría
    // Podemos hacer un optional chain que son los signos de interrogación
    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1[0]);
      console.log(data1[0].id)
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});
