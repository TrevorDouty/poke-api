import { pokeService } from "../Services/PokeService.js"
import { ProxyState } from "../AppState.js"
import { pokeApi } from "../Services/AxiosService.js"

function _drawPoke() {
  let template = ""
  let pokemon = ProxyState.pokemon
  pokemon.forEach(p => template += `<li>${p.name}</li>`)
  document.getElementById('pokemon-list').innerHTML = template

}

export default class PokeController {
  constructor() {
    console.log("Poke Controller")
    ProxyState.on("pokemon", _drawPoke)
    this.getPoke()
  }

  async getPoke() {
    try {
      pokeService.getPoke()

    } catch (error) {
      console.error(error)
    }
  }

}