var container = document.getElementById('container')
var person = document.getElementById('name')
var imagem = document.getElementById('img')


const url = 'https://swapi.dev/api/films/'
fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let item in data.results) {
      console.log(data )
      container.innerHTML += `
      <div class="films">
      <img src="https://starwars-visualguide.com/assets/img/films/${item * 1 +1}.jpg" alt="Star wars">
      <p class="name">${data.results[item].title} </p>
      </div>
      `
    }

  }    
    
  )
  .catch(error => console.error(error))