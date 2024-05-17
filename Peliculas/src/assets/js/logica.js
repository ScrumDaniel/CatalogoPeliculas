function mostrarPeli(peliAMostrar) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  if (peliAMostrar.length === 0) {
    movieList.innerHTML = "<p>No se encontraron resultados</p>";
  } else {
    peliAMostrar.forEach((peliculas) => {
      const movieCard = `
        <div class="col-md-3 mb-3">
          <div class="card">
            <img src="${peliculas.image}" class="card-img-top" alt"${peliculas.titulo}">
            <div class="card-body">
              <h5 class="card-title">${peliculas.titulo}</h5>
              <p class="card-text">Año Estreno: ${peliculas.estreno}<p>
              <p class="card-text">Genero: ${peliculas.genero}<p>
              <p class="card-text">Director: ${peliculas.director}<p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles</button>
            </div>         
          </div>        
        </div>        
       `;
      movieList.innerHTML += movieCard;
    });
  }
}

//Funcion para buscar las películas
function busquedaPeli(query) {
  const terminoBusqueda = query.trim().toLowerCase();

  //Filtrar
  const filtroPeli = peliculas.filter((peli) => {
    return (
      peli.titulo.toLowerCase().includes(terminoBusqueda) ||
      peli.genero.toLowerCase().includes(terminoBusqueda) ||
      String(peli.estreno).includes(terminoBusqueda)
    );
  });

  //Mostrar las películas filtradas
  mostrarPeli(filtroPeli);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPeli(peliculas);
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  busquedaPeli(searchInput.value);
});
