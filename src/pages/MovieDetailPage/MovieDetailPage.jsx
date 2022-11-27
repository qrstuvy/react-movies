import { useParams } from "react-router-dom"

function MovieDetailPage({movies}){   
    const movieTitle = useParams()
    const movie = movies.find(movie => movie.title === movieTitle.movieTitle)
    return(
        <>
        <h1>Movie Detail Page</h1>
        <p>Title: {movie.title} | Release Date: {movie.releaseDate}</p>
        <img src={movie.posterPath}></img>
        <p>Casts: {movie.cast.join(', ')}</p>
        </>
    )
}



export default MovieDetailPage