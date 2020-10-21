
export default class Poke {

  constructor(data) {
    this.name = data.name
    this.moves = data.moves[0].move.name
    this.weight = data.weight
    this.img = data.sprites.front_default
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
    
    `
  }
}