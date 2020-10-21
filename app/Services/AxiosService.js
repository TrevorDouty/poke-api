export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000
})

export const capturedPokeApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/trevor/pokemon",
  timeout: 10000
})