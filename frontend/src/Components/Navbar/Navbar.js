import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../Redux/actions/movieActions';
import './Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(query));
    navigate('/search');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">MovieDB</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Popular</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top-rated">Top Rated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">Upcoming</Link>
            </li>
          </ul>
          <form className="d-flex ms-5" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="btn btn-light me-5" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
