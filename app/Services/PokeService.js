import Poke from "../Models/Poke.js"
import { pokeApi } from "../Services/AxiosService.js"
import { ProxyState } from "../AppState.js"

class PokeService {

  constructor() {
    console.log("Poke Service")
  }
  async getPoke() {
    let res = await pokeApi.get("pokemon?limit=100&offset=200")
    console.log(res.data.results)
    ProxyState.pokemon = (res.data.results)
  }
}

export const pokeService = new PokeService