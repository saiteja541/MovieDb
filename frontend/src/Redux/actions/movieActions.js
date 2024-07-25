import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = () => async dispatch => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch({ type: 'FETCH_POPULAR_MOVIES', payload: response.data.results });
};

export const fetchTopRatedMovies = () => async dispatch => {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch({ type: 'FETCH_TOP_RATED_MOVIES', payload: response.data.results });
};

export const fetchUpcomingMovies = () => async dispatch => {
    const response = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch({ type: 'FETCH_UPCOMING_MOVIES', payload: response.data.results });
};

export const fetchMovieDetails = (id) => async dispatch => {
    const movieResponse = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const castResponse = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: { movie: movieResponse.data, cast: castResponse.data.cast } });
};

export const searchMovies = (query) => async dispatch => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
    dispatch({ type: 'SEARCH_MOVIES', payload: response.data.results });
};
