let pokemonInformation = [];
let nombrePokemon = 0;

function RenderizarPokemon(imagenFrente, imagenEspalda, nombre, tipo) {
  let divImagenesPokemon = document.getElementById("Pokemon");
  divImagenesPokemon.className = "container-md imagenesPokemon"
  divImagenesPokemon.innerHTML = ""
  let imagenEspaldaPok = document.createElement("img");
  imagenEspaldaPok.setAttribute("src", imagenEspalda)
  let imagenFrentePok = document.createElement("img");
  imagenFrentePok.setAttribute("src", imagenFrente)
  let h3nombre = document.createElement('h3');
  let nombrePokemon = document.createElement('p');
  h3nombre.textContent = "Nombre";
  h3nombre.className = "negritaText yellow";
  nombrePokemon.textContent = nombre;
  let h3tipo = document.createElement('h3');
  let tipoPokemon = document.createElement('p');
  h3tipo.textContent = "Tipo de pokemon";
  h3tipo.className = "negritaText yellow";
  nombrePokemon.className = "negritaText"
  tipoPokemon.className = "negritaText"
  tipoPokemon.textContent = tipo

  divImagenesPokemon.insertAdjacentElement("beforeend", h3nombre)
  divImagenesPokemon.insertAdjacentElement("beforeend", nombrePokemon)
  divImagenesPokemon.insertAdjacentElement("beforeend", imagenEspaldaPok)
  divImagenesPokemon.insertAdjacentElement("beforeend", imagenFrentePok)
  divImagenesPokemon.insertAdjacentElement("beforeend", h3tipo)
  divImagenesPokemon.insertAdjacentElement("beforeend", tipoPokemon)
}
function movimientosPokemon(moviemientosPoke) {
  let movimientos = [];
  movimientos = moviemientosPoke;
  let divMovimientos = document.getElementById('divMovimientos');
  divMovimientos.className = "container-md movimientos"
  let h3Movimiento = document.createElement("h3")
  h3Movimiento.textContent = "Movimientos"
  h3Movimiento.className = "negritaText yellow"

  divMovimientos.innerHTML = "";
  divMovimientos.insertAdjacentElement("beforeend", h3Movimiento)
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
  divStats.className = "container-md stats"
  let h3Stats = document.createElement("h3");
  h3Stats.textContent = "Stats"
  h3Stats.className = "negritaText yellow"
  divStats.innerHTML = "";
  divStats.insertAdjacentElement("beforeend", h3Stats)
  arraystats.forEach(element => {
    let nombreBase = document.createElement("p")
    nombreBase.textContent = element.base_stat
    let numeroStat = document.createElement("p")
    numeroStat.className = "negritaText"
    nombreBase.className = "negritaText"
    numeroStat.textContent = element.stat.name
    divStats.insertAdjacentElement("beforeend", numeroStat)
    divStats.insertAdjacentElement("beforeend", nombreBase)
  })
}
function alturaAnchura(altura, anchura) {
  let divAlturaAnchura = document.getElementById("alturaAnchura")
  divAlturaAnchura.className = "container-md alturaAnchura"
  let titleAltura = document.createElement('h3')
  let titleAnchura = document.createElement('h3')
  titleAltura.textContent = "Altura"
  titleAnchura.className = "negritaText yellow"
  titleAnchura.textContent = "Anchura"
  titleAltura.className = "negritaText yellow"
  let alturaPokemon = document.createElement('p')
  alturaPokemon.textContent = altura;
  alturaPokemon.className = "negritaText"
  let anchuraPokemon = document.createElement('p')
  anchuraPokemon.textContent = anchura;
  anchuraPokemon.className = "negritaText"
  divAlturaAnchura.insertAdjacentElement("beforeend", titleAltura)
  divAlturaAnchura.insertAdjacentElement("beforeend", alturaPokemon)
  divAlturaAnchura.insertAdjacentElement("beforeend", titleAnchura)
  divAlturaAnchura.insertAdjacentElement("beforeend", anchuraPokemon)
}
function habilidades(abilities) {
  let arrayAbilities = [];
  arrayAbilities = abilities;
  let divAbilities = document.getElementById("divAbilities")
  divAbilities.className = "container-md habilidades"
  let h3Habilidad = document.createElement('h3')
  h3Habilidad.textContent = "Habilidades"
  h3Habilidad.className = "negritaText yellow"
  divAbilities.innerHTML = ""
  divAbilities.insertAdjacentElement("beforeend", h3Habilidad);
  arrayAbilities.forEach(element => {
    let nombreAbilitie = document.createElement("p")
    nombreAbilitie.className = "negritaText"
    nombreAbilitie.textContent = element.ability.name
    divAbilities.insertAdjacentElement('beforeend', nombreAbilitie)
  })
}
function spinerInsert() {
  let contendorInformation = document.getElementById("contenedorInfo")
  let divSpiner = document.createElement('div');
  divSpiner.id = "spinerDesaparecer"
  let spanDiv = document.createElement('span');
  divSpiner.className = "spinner-border spinner"
  divSpiner.setAttribute("status", "")
  spanDiv.className = "visually-hidden"
  contendorInformation.insertAdjacentElement("beforeend", divSpiner)
  divSpiner.insertAdjacentElement("beforeend", spanDiv)
}
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  let input = document.getElementById('inputNombre').value;
  if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input)) {
    nombrePokemon = input;
    e.preventDefault()
    traerDatos()
    formulario.reset()
  }
  else {
    alert('rellena bien los campos')
    e.preventDefault()
  }
})

const traerDatos = async () => {

  let contendorInformation = document.getElementById("contenedorInfo")
  let divPokemon = document.createElement('div');
  let divMovimientos = document.createElement("div");
  let divAlturaAnchura = document.createElement("div");
  let divStats = document.createElement("div");
  let divAbilities = document.createElement("div");
  divPokemon.setAttribute("id", "Pokemon")
  divMovimientos.setAttribute("id", "divMovimientos")
  divAlturaAnchura.setAttribute("id", "alturaAnchura")
  divStats.setAttribute("id", "stats")
  divAbilities.setAttribute("id", "divAbilities")
  try {
    debugger
    spinerInsert()
    contendorInformation.insertAdjacentElement("beforeend", divPokemon)
    contendorInformation.insertAdjacentElement("beforeend", divMovimientos)
    contendorInformation.insertAdjacentElement("beforeend", divStats)
    contendorInformation.insertAdjacentElement("beforeend", divAlturaAnchura)
    contendorInformation.insertAdjacentElement("beforeend", divAbilities)
    //bacground bonito
   
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    let datosJson = await fetch(urlPokemon)
    let data = await datosJson.json();
    RenderizarPokemon(data.sprites.front_default, data.sprites.back_default, data.name, data.types[0].type.name)
    movimientosPokemon(data.moves);
    estadisticasDeLucha(data.stats);
    alturaAnchura(data.height, data.weight);
    habilidades(data.abilities);
    contendorInformation.className = "contenedorInformacion background1"
    if (datosJson.status === 200) {
      let spiner = document.getElementById("spinerDesaparecer");
      spiner.remove()   
    }

  }
  catch (error) {

    contendorInformation.innerHTML = ""
    contendorInformation.className = "contenedorInformacion verdeClaro error404 heightError"
  }
};
