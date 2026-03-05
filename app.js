const URL = "https://jsonfakery.com/movies/random";

const container = document.getElementById("movies");
const button = document.getElementById("loadMovies");

function getMovies() {
  container.innerHTML = "";

  //Bucle for para hacer 15 peticiones a la API
  for (let i = 0; i < 15; i++) {
    fetch(URL)
      .then((res) => res.json())

      .then((movie) => {
        const card = document.createElement("div");

        card.classList.add("movie-card");

        /*Añadir Card a HTML*/
        card.innerHTML = `

<img src="${movie.poster_path}">

<div class="movie-info">

<p class="movie-title">${movie.original_title}</p>

<p class="movie-year">${movie.release_date}</p>

</div>

`;

        container.appendChild(card);
      })

      .catch((error) => console.log(error));
  }
}

button.addEventListener("click", getMovies);
