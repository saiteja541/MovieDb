import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../Redux/actions/movieActions';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movie, cast } = useSelector(state => state.movies.movieDetails);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    const backgroundImage = movie && movie.backdrop_path 
        ? `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')` 
        : 'none';

    return (
        <div className="movie-detail">
            {movie && (
                <>
                    <div 
                        className="movie-info mt-3" 
                        style={{ backgroundImage }}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                            className="poster"
                        />
                        <div className="movie-details">
                            <div className='movie-details-1'>
                                <h1>{movie.title}</h1>
                                <p className='rating'>Rating: {movie.vote_average}</p>
                                <div className="movie-info-extra">
                                    <p className='time'>{movie.runtime} min</p>
                                    <p className='category'>{movie.genres.map(genre => genre.name).join(', ')}</p>
                                </div>
                                <p className='date'>Release Date: {movie.release_date}</p>
                            </div>
                            <div className='movie-details-2'>
                                <h3>Overview</h3>
                                <p className='overview'>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cast-section">
                        <h2 className='mb-4'>Cast</h2>
                        <div className="cast-list">
                            {cast.map(member => (
                                <div key={member.cast_id} className="cast-member">
                                    <img
                                        src={member.profile_path ? `https://image.tmdb.org/t/p/w500/${member.profile_path}` : 'https://via.placeholder.com/150'}
                                        alt={member.name}
                                        className="cast-image mb-3"
                                    />
                                    <p>{member.name}</p>
                                    <p>Character: {member.character}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetail;
