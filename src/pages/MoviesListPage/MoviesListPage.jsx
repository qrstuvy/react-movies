import MovieCard from "./MovieCard.jsx";

function MoviesListPage({movies}){
    const movieList = movies.map((movie) => {
        return <MovieCard key={movie.title} movie={movie}/>
    })
         return (
        <>
        <h1>Movies List Page</h1>
        {movieList}
        </>  
    )}

export default MoviesListPage