const d = document;
const container = d.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get("id");
const url = "https://jsonplaceholder.typicode.com/users";
console.log(`${url}/${id}`);
fetch(`${url}/${id}`)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos);
    const $nombre = d.createElement("p");
    $nombre.innerHTML = datos.name;

    const $email = d.createElement("p");
    $email.innerHTML = datos.email;

    const $calle = d.createElement("p");
    $calle.innerHTML = datos.address.street;

    const $latitud = d.createElement("p");
    $latitud.innerHTML = datos.address.geo.lat;

    const $phone = d.createElement("p");
    $phone.innerHTML = datos.phone;

    container.appendChild($nombre);
    container.appendChild($email);
    container.appendChild($calle);
    container.appendChild($latitud);
    container.appendChild($phone);
  })

  .catch((error) => console.log(error));
