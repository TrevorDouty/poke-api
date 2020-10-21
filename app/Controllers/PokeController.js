import { pokeService } from "../Services/PokeService.js"
import { ProxyState } from "../AppState.js"
import { pokeApi } from "../Services/AxiosService.js"

function _drawPoke() {
  let template = ""
  let pokemon = ProxyState.pokemon
  pokemon.forEach(p => template += `<li onclick="app.pokeController.getCurrentPoke('${p.url}')">${p.name}</li>`)
  document.getElementById('pokemon-list').innerHTML = template

}

function _drawCurrentPoke() {
  if (ProxyState.currentPoke) {
    document.getElementById('current-poke').innerHTML = ProxyState.currentPoke.Template
  } else {
    document.getElementById('current-poke').innerHTML = ""

  }
}

export default class PokeController {
  constructor() {
    console.log("Poke Controller")
    ProxyState.on("pokemon", _drawPoke)
    ProxyState.on("currentPoke", _drawCurrentPoke)
    this.getPoke()
  }

  getPoke() {
    try {
      pokeService.getPoke()

    } catch (error) {
      console.error(error)
    }
  }

  getCurrentPoke(url) {
    try {
      pokeService.getCurrentPoke(url)
    } catch (error) {
      console.error(error)

    }
  }



}