import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/Navbar';
import Popular from './Components/Popular/Popular';
import TopRated from './Components/TopRated/TopRated';
import Upcoming from './Components/Upcoming/Upcoming';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Search from './Components/Search/Search';

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
