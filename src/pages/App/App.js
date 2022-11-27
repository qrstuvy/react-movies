import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import { movies } from '../../data';

import "./App.css";

import ActorsListPage from '../ActorsListPage/ActorsListPage';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import NavBar from '../../Components/NavBar/NavBar';


function App() {
  const [user, setUser] = useState(null)
  
  return (
    <div className="App">
      {user ?
      <>
      <NavBar user={user}/>
<Routes >
<Route path="/" element={<MoviesListPage movies={movies} />}/>
<Route path="/actors" element={<ActorsListPage movies={movies} />}/>
<Route path="/movies/:movieTitle" element={<MovieDetailPage movies={movies}/>} />
</Routes></> : <LoginPage setUser={setUser}/>}
    </div>
  );
}

export default App;
