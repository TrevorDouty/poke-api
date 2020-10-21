import { capturedPokeService } from "../Services/CapturedPokeService.js"
import { ProxyState } from "../AppState.js"

function _drawCapturedPoke() {
  let poke = ProxyState.capturedPoke
  let template = ""
  poke.forEach(p => template += `<li onclick="app.capturedPokeController.getCurrentPoke('${p.id}')" class="pointer">${p.name}</li>`)
  document.getElementById("captured-poke").innerHTML = template
}

export class CapturedPokeController {
  constructor() {
    console.log("capture poke controller")
    ProxyState.on("capturedPoke", _drawCapturedPoke)
    this.getCapturedPoke()
  }

  getCapturedPoke() {
    try {
      capturedPokeService.getCapturedPoke()
    } catch (error) {
      console.error(error)
    }
  }
  capturePoke() {
    try {
      capturedPokeService.capturePoke()
    } catch (error) {
      console.error(error)
    }
  }
  getCurrentPoke() {
    try {
      capturedPokeService.getCurrentPoke()
    } catch (error) {
      console.error(error)
    }
  }

  removePoke() {
    try {
      capturedPokeService.removePoke()
    } catch (error) {
      console.error(error)
    }
  }
}