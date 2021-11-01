import axios from 'axios';

export const getMovie = ({ per_page }) =>
    axios.get(`http://localhost:8080/api/movies?page=${per_page}`)

export const getMovieDetail = (code) =>
    axios.get(`http://localhost:8080/api/movies/${code}`)
