import Poke from "../Models/Poke.js"
import { pokeApi } from "../Services/AxiosService.js"
import { ProxyState } from "../AppState.js"

class PokeService {

  constructor() {
    console.log("Poke Service")

  }
  async getPoke() {
    let res = await pokeApi.get("pokemon?limit=100&offset0")
    console.log(res.data.results)
    ProxyState.pokemon = (res.data.results)
  }

  async getCurrentPoke(url) {
    let res = await pokeApi.get(url)
    console.log(res)
    ProxyState.currentPoke = new Poke(res.data)
  }
}

export const pokeService = new PokeService