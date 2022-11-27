import MovieCard from "./MovieCard.jsx";

function MoviesListPage({movies}){
         return (  
        <>
        <h1>Movies List Page</h1>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie}/> )}
        </>  
    )}

export default MoviesListPage