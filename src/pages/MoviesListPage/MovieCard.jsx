import { Link } from "react-router-dom"

function MovieCard ({movie}) {
    return(
        <>
        <p><Link to={`/movies/${movie.title}`}>Title: {movie.title} | Release Date: {movie.releaseDate}</Link></p>
        <img src={movie.posterPath}></img>
        </>
    )
}

export default MovieCard