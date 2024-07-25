import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies } from '../../Redux/actions/movieActions';
import MovieCard from '../MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import './TopRated.css';

const TopRated = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(state => state.movies.topRatedMovies);

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

    return (
        <Container>
            <h2 className='text-center mt-3 mb-4'>Top Rated Movies</h2>
            <Row className="movie-grid">
                {topRatedMovies.map(movie => (
                    <Col xs={12} sm={6} md={4} lg={3} className="movie-card-col" key={movie.id}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TopRated;
