var container = document.getElementById('container')
var person = document.getElementById('name')
var imagem = document.getElementById('img')


const url = 'https://swapi.dev/api/species/'
fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let item in data.results) {
      console.log(data )
      container.innerHTML += `
      <div class="species">
      <img src="https://starwars-visualguide.com/assets/img/species/${item * 1 +1}.jpg" alt="Star wars">
      <p class="name">${data.results[item].name} </p>
      </div>
      `
    }

  }    
    
  )
  .catch(error => console.error(error))