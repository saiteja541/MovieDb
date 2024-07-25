const initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    movieDetails: {},
    searchResults: []
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POPULAR_MOVIES':
            return { ...state, popularMovies: action.payload };
        case 'FETCH_TOP_RATED_MOVIES':
            return { ...state, topRatedMovies: action.payload };
        case 'FETCH_UPCOMING_MOVIES':
            return { ...state, upcomingMovies: action.payload };
        case 'FETCH_MOVIE_DETAILS':
            return { ...state, movieDetails: action.payload };
        case 'SEARCH_MOVIES':
            return { ...state, searchResults: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
