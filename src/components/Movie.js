export const Movie = ({movie}) => (
<div className="movie-item">
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
        </div>
        
        <div className="movie-excerpt">
          <h3>{movie.title}</h3>
          <a className="btn btn-primary" href="#">Ver detalhes</a>
        </div>
        </div>

);