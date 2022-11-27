function ActorCard ({actor, i}){
    return(
<>
<p>{actor}</p>
<img src={`https://picsum.photos/id/${i}/200/200`} />
</>
    )
}

export default ActorCard