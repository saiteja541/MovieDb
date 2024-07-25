import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../Redux/actions/movieActions';
import MovieCard from '../MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import './Upcoming.css';

const Upcoming = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(state => state.movies.upcomingMovies);

    useEffect(() => {
        dispatch(fetchUpcomingMovies());
    }, [dispatch]);

    return (
        <Container>
            <h2 className='text-center mt-3 mb-4'>Upcoming Movies</h2>
            <Row className="movie-grid">
                {upcomingMovies.map(movie => (
                    <Col xs={12} sm={6} md={4} lg={3} className="movie-card-col" key={movie.id}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Upcoming;
