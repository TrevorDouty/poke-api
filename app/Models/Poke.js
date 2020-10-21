
export default class Poke {

  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.moves = data.name || data.moves[0].move.name
    this.weight = data.weight
    this.img = data.img || data.sprites.front_default
    this.height = data.height

  }

  get Template() {
    return /*html*/`
<div class ="card">
<div class = "card-body">
     <img src="${this.img}" alt="">
    <h1>Name: ${this.name}</h1>
    <h3>Move: ${this.moves}</h3>
    <h3>Weight: ${this.weight}</h3>
    <h3>Height: ${this.height}</h3>
    </div>
    </div>
    ${this.Button}
    `
  }

  get Button() {
    if (this.id) {
      return `<button class="btn btn-danger" onclick="app.capturedPokeController.removePoke()">Remove Pokemon</button>`
    }
    return `<button class="btn btn-primary" onclick="app.capturePokeController.capturePoke()">Capture Pokemon</button>`
  }
}