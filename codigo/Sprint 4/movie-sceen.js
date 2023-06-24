// Select the elements
const titleElement = document.getElementById("movie-title");
const trailerBoxElement = document.getElementById("trailer-box");
const moviePosterElement = document.getElementById("movie-poster");
const directorElement = document.getElementById("director");
const writersElement = document.getElementById("writers");
const starsElement = document.getElementById("stars");
const genresElement = document.getElementById("genres");
const releaseDateElement = document.getElementById("release-date");
const runtimeElement = document.getElementById("runtime");
const plotElement = document.getElementById("plot");
const movieSwitcherBtn = document.getElementById("movie-switcher");

// Set the initial movie
let currentMovie;

// Load the movies from the JSON file
fetch('movies.json')
  .then(response => response.json())
  .then(movies => {
    // Set the initial movie to the first one in the array
    currentMovie = movies[0];

    // Update the HTML with the current movie
    const updateMovie = (movie) => {
      titleElement.innerText = movie.title;
      trailerBoxElement.src = movie.trailerBoxSrc;
      moviePosterElement.src = movie.moviePosterSrc;
      directorElement.innerText = "Director: " + movie.director;
      writersElement.innerText = "Writers: " + movie.writers.join(", ");
      starsElement.innerText = "Stars: " + movie.stars.join(", ");
      genresElement.innerText = "Genres: " + movie.genres.join(", ");
      releaseDateElement.innerText = "Release Date: " + movie.releaseDate;
      runtimeElement.innerText = "Runtime: " + movie.runtime;
      plotElement.innerText = "Plot: " + movie.plot;
    };


    var x = 0
    // Add event listener to switch between movies
    movieSwitcherBtn.addEventListener("click", () => {

      if (currentMovie === movies[0]) 
      { 
      x++;
      currentMovie = movies[x]; 
      }
      else if(currentMovie === movies[x] && movies[x+1] != null)
      {
        x++;
        currentMovie = movies[x];
      }
      else 
      {
        x = 0;
        currentMovie = movies[x];
      }
      updateMovie(currentMovie);
    });
    // Initial update with the current movie
    updateMovie(currentMovie);
  })
  .catch(error => console.error(error));
