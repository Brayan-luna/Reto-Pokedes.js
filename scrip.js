let pokemonInformation = [];
let imagenPokemonFrente = document.getElementById('imagenPokemon');
let imagenPokemonEspalda = document.getElementById('imagenPokemon2')
let nombrePokemon = 0;
function RenderizarPokemon(imagenFrente, imagenEspalda, nombre, tipo) {
  let nombrepoke = document.getElementById("nombre");
  let tipoPokemon = document.getElementById("tipo");
  tipoPokemon.textContent = tipo
  nombrepoke.textContent = nombre
  imagenPokemonFrente.setAttribute("src", imagenFrente)
  imagenPokemonEspalda.setAttribute("src", imagenEspalda)
}
function movimientosPokemon(moviemientosPoke) {
  let movimientos = [];
  movimientos = moviemientosPoke;
  let divMovimientos = document.getElementById('divMovimientos');
  divMovimientos.innerHTML = "";
  movimientos.forEach(element => {
    let nombreMovimiento = document.createElement("p");
    nombreMovimiento.className = "negritaText"
    nombreMovimiento.textContent = element.move.name;
    divMovimientos.insertAdjacentElement("beforeend", nombreMovimiento)
  });
}
function estadisticasDeLucha(stats) {
  let arraystats = [];
  arraystats = stats;
  let divStats = document.getElementById("stats");
  divStats.innerHTML = "";
  arraystats.forEach(element => {
    let nombreBase = document.createElement("p")
    nombreBase.textContent = element.base_stat
    let numeroStat = document.createElement("p")
    numeroStat.className = "negritaText"
    numeroStat.textContent = element.stat.name
    divStats.insertAdjacentElement("beforeend", numeroStat)
    divStats.insertAdjacentElement("beforeend", nombreBase)
  })
}
function alturaAnchura(altura, anchura) {
  let titleAltura = document.getElementById("titleAltura");
  let titleAnchura = document.getElementById("TitleAnchura")
  titleAltura.textContent = "Altura"
  titleAnchura.textContent = "Anchura"
  let alturaPokemon = document.getElementById("altura");
  alturaPokemon.textContent = altura;
  let anchuraPokemon = document.getElementById("anchura");
  anchuraPokemon.textContent = anchura;
}
function habilidades(abilities) { 
let arrayAbilities = [];
arrayAbilities = abilities;
let divAbilities = document.getElementById("divAbilities")
divAbilities.innerHTML = ""
arrayAbilities.forEach(element=>{
  let nombreAbilitie = document.createElement("p")
  nombreAbilitie.textContent = element.ability.name
  divAbilities.insertAdjacentElement('beforeend',nombreAbilitie)
})
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  let input = document.getElementById('inputNombre').value;
  console.log(input)
  nombrePokemon = input;
  traerDatos()
})

const traerDatos = async () => {
  try {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    let datosJson = await fetch(urlPokemon)
    let data = await datosJson.json()
    console.log(data)
    //Traer imagen del pokemon
    RenderizarPokemon(data.sprites.front_default, data.sprites.back_default, data.name, data.types[0].type.name)
    movimientosPokemon(data.moves)
    estadisticasDeLucha(data.stats)
    alturaAnchura(data.height,data.weight)
    habilidades(data.abilities)
  }
  catch (error) {
    alert(error)
  }
};
