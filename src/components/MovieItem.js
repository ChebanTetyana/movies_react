function MovieItem(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props

     return <div className="card movie" id={id}>
         <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ?  <img className="activator" src= {`https://via.placeholder.com/300x150&text=${title}`}/> : <img className="activator" src= {poster}/>
            }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p className="card-description"><span>{year}</span><span className="right-side">{ type }</span></p>
    </div>
  </div>
}

export default MovieItem;
