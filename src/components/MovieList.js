import MovieItem from "./MovieItem";


function MovieList(props) {
    const { movieList = []} = props
    
    return <section className="movies">
        {movieList.length ? movieList.map(movie => <MovieItem key={movie.imdbID} {...movie} />) : <h4>Not found</h4>}
    </section>
}

export default MovieList;