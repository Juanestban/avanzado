import axios from "axios"

const url = "https://rickandmortyapi.com/api"
const getSomeCharacters = `${url}/character/1,2,3,4,5,6,7`

export const getCharacters = (params) => {
  return axios.get(getSomeCharacters, params)
}
