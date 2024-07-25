import React, { useEffect } from 'react';
import './Popular.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../Redux/actions/movieActions';
import MovieCard from '../MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

const Popular = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(state => state.movies.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <Container>
      <h2 className='text-center mt-3 mb-3'>Popular Movies</h2>
      <Row className="movie-grid">
        {popularMovies.map(movie => (
          <Col xs={12} sm={6} md={4} lg={3} className="movie-card-col" key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Popular;
