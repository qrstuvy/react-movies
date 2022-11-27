import ActorCard from "./ActorCard.jsx";

function ActorsListPage({movies}){
        const actorList = []
        movies.map((movie) => {
            actorList.push(...movie.cast)
        })
        const actorSet = new Set(actorList)
        const actorArray = Array.from(actorSet)
        const actors = actorArray.map((actor, i) => {
            return(
                        <ActorCard key={i} actor={actor} i={i} />
            )
        })
            return ( 
            <>
            <h1>Actors List Page</h1>
            {actors}
            </>  
       ) }

export default ActorsListPage