/*var container = document.getElementById('container')
var person = document.getElementById('name')
var imagem = document.getElementById('img')


const url = 'https://swapi.dev/api/vehicles/'
fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let item in data.results) {
      console.log(data )
      container.innerHTML += `
      <div class="vehicles">
      <img src="https://starwars-visualguide.com/assets/img/vehicles/${item * 1 +1}.jpg" alt="Star wars" id="img">
      <p class="name">${data.results[item].name} </p>
      </div>
      `
    }

  }    
    
  )
  .catch(error => console.error(error))*/