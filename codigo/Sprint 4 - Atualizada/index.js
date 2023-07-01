// index.js

// Function to update carousel items with movie data
function updateCarouselItems(movieIds, movieData) {
  // Loop through the provided movie IDs
  movieIds.forEach(movieId => {
    // Get the carousel item based on movie ID
    const carouselItemId = 'carousel-item-' + movieId;
    const carouselItem = document.getElementById(carouselItemId);

    if (carouselItem) {
      // Modify the movie poster
      const moviePoster = carouselItem.querySelector('.movie-poster');
      moviePoster.src = movieData.moviePosterSrc;
      moviePoster.alt = movieData.title;

      // Modify the movie title
      const movieTitle = carouselItem.querySelector('.movie-title');
      movieTitle.textContent = movieData.title;

      // Modify the movie plot
      const plot = carouselItem.querySelector('.plot');
      plot.textContent = movieData.plot;
    }
  });
}

// Fetch the movie data from movies.json
fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    // Create an object to map movie IDs to movie data
    const movieMap = {};

    // Loop through the movie data and populate the movie map
    data.forEach(movie => {
      if (!movieMap[movie.id]) {
        movieMap[movie.id] = movie;
      }
    });

    // Update carousel items with movie data
    updateCarouselItems([1], movieMap[1]); 
    updateCarouselItems([2], movieMap[2]);
    updateCarouselItems([3], movieMap[3]);
    updateCarouselItems([4], movieMap[4]);
    updateCarouselItems([5], movieMap[5]);
    updateCarouselItems([6], movieMap[6]);   
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });


  document.getElementById("pesquisa-form").addEventListener("submit", function(e) {
    window.location.href = `/pesquisa.html?query=${document.getElementById("input-search").value}`;
    e.preventDefault();
  });


  