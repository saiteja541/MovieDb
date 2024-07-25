import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './Search.css';

const Search = () => {
  const { searchResults, loading, error } = useSelector(state => state.movies);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Container>
      <h1 className="mt-3 mb-3 text-center">Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Row>
          {searchResults.map(movie => (
            <Col md={3} key={movie.id} className="mb-4">
              <Card onClick={() => handleCardClick(movie.id)} className="movie-card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>Rating: {movie.vote_average}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Search;
