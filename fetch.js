const d = document;
const container = d.querySelector(".container");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    datos.forEach((usuario) => {
      const $parrafo = d.createElement("p");
      $parrafo.setAttribute("id", usuario.id);
      $parrafo.innerHTML = usuario.name;
      $parrafo.addEventListener("click", function () {
        window.location.href = `./usuario.html?id=${usuario.id}`;
      });
      container.appendChild($parrafo);
    });
  })
  .catch((error) => console.log(error));
