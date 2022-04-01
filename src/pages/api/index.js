import axios from 'axios';
import { callbackify } from 'util';

/* // Axios instance
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
}) */

const baseURL = ''

export async function getPokemon() {
  
  
}

/* // Fetch pokemon data from api
export const getPokemon = () => {
  // PokeApi only accepts get method
  api.get('/pokemon/?limit=151')
    .then(function (response) {
      return response.data.results
    })
    .catch(function (error) {
      console.log(error)
    })
} */