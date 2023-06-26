
    // Função para fazer a pesquisa
    function searchIMDb(event) {
      if (event.key === 'Enter') {
        var searchTerm = document.getElementById('searchTerm').value; // Obter o termo de pesquisa do campo de texto
        var url = 'https://imdb-api.com/en/API/SearchMovie/k_tt98zmx0/' + searchTerm; 

        // Fazer a requisição AJAX para a API do IMDb
        $.ajax({
          url: url,
          type: 'GET',
          dataType: 'json',
          success: function(data) {
            displayResults(data);
          },
          error: function() {
            alert('Ocorreu um erro ao buscar os resultados.');
          }
        });
      }
    }

    // Função para exibir os resultados
    function displayResults(data) {
      var resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = ''; // Limpar os resultados anteriores

      // Iterar sobre os filmes retornados pela API
      for (var i = 0; i < data.results.length; i++) {
        var movie = data.results[i];

        // Criar um elemento de div para exibir as informações do filme
        var movieElement = document.createElement('div');
        movieElement.className = 'movie';

        // Criar um elemento de imagem para exibir o cartaz do filme
        var posterElement = document.createElement('img');
        posterElement.src = movie.image;
        movieElement.appendChild(posterElement);

        // Criar um elemento de parágrafo para exibir o título do filme
        var titleElement = document.createElement('p');
        titleElement.innerHTML = '<strong>' + '<a href="filme.html" style="text-decoration: none; color:white;">' + movie.title + '</a>' +'</strong>';
        movieElement.appendChild(titleElement);

        // Criar um elemento de parágrafo para exibir a duração do filme
        var durationElement = document.createElement('p');
        durationElement.innerHTML = 'Duração: ' + movie.runningTimeInMinutes + ' minutos';
        movieElement.appendChild(durationElement);

        // Criar um elemento de parágrafo para exibir a sinopse do filme
        var plotElement = document.createElement('p');
        plotElement.innerHTML = '<em >'+  movie.description + '</em>';
        movieElement.appendChild(plotElement);

        resultsContainer.appendChild(movieElement);
      }
    }

