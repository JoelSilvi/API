const d = document;
const container = d.querySelector(".container");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    datos.forEach((usuario) => {
      const $parrafo = d.createElement("p");
      $parrafo.innerHTML = usuario.name;
      container.appendChild($parrafo);
    });
  })
  .catch((error) => console.log(error));
