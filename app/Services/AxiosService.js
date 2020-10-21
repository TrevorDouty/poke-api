export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000
})