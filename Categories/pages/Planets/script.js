var container = document.getElementById('container')
var person = document.getElementById('name')
var imagem = document.getElementById('img')
var containerChild = document.getElementById('container-tatoine')


const url = 'https://swapi.dev/api/planets/'
fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let item in data.results) {
      console.log(data )
      container.innerHTML += `
      <div class="container-planet">
      <img src="https://starwars-visualguide.com/assets/img/planets/${item * 1 +1}.jpg" alt="Star wars" id="img-${item}" class="planet">
      <p class="name" id="name-${item}">${data.results[item].name} </p>
      </div>
      `
    }

  }    
    
  )
  .catch(error => console.error(error))

  function adddiv() {
    container.appendChild(
      containerChild
    )
  }

  adddiv()
