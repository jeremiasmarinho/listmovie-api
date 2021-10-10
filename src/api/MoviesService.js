import axios from 'axios';

const API_KEY = 'd416af5d4faee64e25ab001d87ab5c3';
const BASE_URL = 'http://api.themoviedb.org/3/';

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`
export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl('movie/popular'))
  }
}
