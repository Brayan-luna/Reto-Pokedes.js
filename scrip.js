let pokemonInformation = [];
let nombrePokemon = 0;
function RenderizarPokemon(imagenFrente, imagenEspalda, nombre, tipo) {

let divImagenesPokemon = document.getElementById("Pokemon");
divImagenesPokemon.innerHTML = ""
let imagenEspaldaPok = document.createElement("img");
imagenEspaldaPok.setAttribute("src",imagenEspalda)
let imagenFrentePok = document.createElement("img");
imagenFrentePok.setAttribute("src",imagenFrente)
let h3nombre = document.createElement('h3');
let nombrePokemon = document.createElement('p');
h3nombre.textContent = "Nombre";
h3nombre.className = "negritaText";
nombrePokemon.textContent = nombre;
let h3tipo = document.createElement('h3');
let tipoPokemon = document.createElement('p');
h3tipo.textContent = "Tipo";
h3tipo.className = "negritaText";
tipoPokemon.textContent = tipo

divImagenesPokemon.insertAdjacentElement("beforeend",h3nombre)
divImagenesPokemon.insertAdjacentElement("beforeend",nombrePokemon)
divImagenesPokemon.insertAdjacentElement("beforeend",imagenEspaldaPok)
divImagenesPokemon.insertAdjacentElement("beforeend",imagenFrentePok)
divImagenesPokemon.insertAdjacentElement("beforeend",h3tipo)
divImagenesPokemon.insertAdjacentElement("beforeend",tipoPokemon)
}
function movimientosPokemon(moviemientosPoke) {
  let movimientos = [];
  movimientos = moviemientosPoke;
  let divMovimientos = document.getElementById('divMovimientos');
  let h3Movimiento = document.createElement("h3")
  h3Movimiento.textContent = "Movimientos"
  h3Movimiento.className = "h3Titles"

  divMovimientos.innerHTML = "";
  divMovimientos.insertAdjacentElement("beforeend",h3Movimiento)
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
  let h3Stats = document.createElement("h3");
  h3Stats.textContent = "Stats"
  h3Stats.className = "h3Titles"
  divStats.innerHTML = "";
  divStats.insertAdjacentElement("beforeend",h3Stats)
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
  titleAnchura.className = "negritaText"
  titleAnchura.textContent = "Anchura"
  titleAltura.className = "negritaText"
  let alturaPokemon = document.getElementById("altura");
  alturaPokemon.textContent = altura;
  let anchuraPokemon = document.getElementById("anchura");
  anchuraPokemon.textContent = anchura;
}
function habilidades(abilities) { 
let arrayAbilities = [];
arrayAbilities = abilities;
let divAbilities = document.getElementById("divAbilities")
let h3Habilidades = document.getElementById("habilidades")
h3Habilidades.textContent = "Habilidades"
h3Habilidades.className = "negritaText"
divAbilities.innerHTML = ""
divAbilities.insertAdjacentElement("beforeend",h3Habilidades);
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
  let contenedorInformacion = document.getElementById("contenedorInformacion");
  try {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    let datosJson = await fetch(urlPokemon)
    let data = await datosJson.json()
    console.log(data)
    RenderizarPokemon(data.sprites.front_default, data.sprites.back_default, data.name, data.types[0].type.name)
    movimientosPokemon(data.moves)
    estadisticasDeLucha(data.stats)
    alturaAnchura(data.height,data.weight)
    habilidades(data.abilities)
  }
  catch (error) {
 
  }
};
