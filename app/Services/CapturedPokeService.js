import { capturedPokeApi } from "../Services/AxiosService.js"
import Poke from "../Models/Poke.js"
import { ProxyState } from "../AppState.js"

class CapturedPokeService {
  constructor() {
    console.log("capture poke service")
  }

  async postCapturedPoke() {
    let res = await capturedPokeApi.post("", ProxyState.currentPoke)
    ProxyState.capturedPoke = [...ProxyState.capturedPoke, new Poke(res.data.results)]

  }
}

export const capturedPokeService = new CapturedPokeService()