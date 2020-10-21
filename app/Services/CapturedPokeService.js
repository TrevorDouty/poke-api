import { capturedPokeApi } from "../Services/AxiosService.js"
import Poke from "../Models/Poke.js"
import { ProxyState } from "../AppState.js"

class CapturedPokeService {
  constructor() {
    console.log("capture poke service")
  }


  async capturePoke() {
    let res = await capturedPokeApi.post("", ProxyState.currentPoke)
    console.log(res)
    ProxyState.capturedPoke = [...ProxyState.capturedPoke, new Poke(res.data.data)]
    this.getCapturedPoke()
  }
  async getCapturedPoke() {
    let res = await capturedPokeApi.get("")
    console.log(res.data.data)
    ProxyState.capturedPoke = res.data.data.map(p => new Poke(p))
  }

  getCurrentPoke(id) {
    ProxyState.currentPoke = ProxyState.capturedPoke.find(p => p.id == id)

  }
  async removePoke() {
    await capturedPokeApi.delete(ProxyState.currentPoke.id)
    this.getCapturedPoke()
    ProxyState.capturedPoke = null
  }
}

export const capturedPokeService = new CapturedPokeService()