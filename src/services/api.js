import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'f43748e680msh9d1fe2028a70864p13a1b8jsnf07c676c46a9'
  }
})