var container = document.getElementById('container');
var person = document.getElementById('name');
var imagem = document.getElementById('img');
var teste;
var teste2;

const url = 'https://swapi.dev/api/people/'
fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let item in data.results) {
      teste = item * 1 + 1;
      teste2 = 'a' + teste;
      container.innerHTML += `
      <div class="characters" id="${teste2}">

      <img src="https://starwars-visualguide.com/assets/img/characters/${item * 1 + 1}.jpg" alt="Star wars">
      <p class="name">${data.results[item].name} </p>
      </div>
      <button onclick="mostrar()">Verificar</button>
      `;
      
    }})
  .catch(error => console.error(error))


  container.addEventListener('click', (e) => {
    console.log(e.target.id)
        
  })
 








































