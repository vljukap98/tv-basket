//import { Link } from "react-router-dom";

const MovieList = ({ movies, title }) => {

    return ( 
        <div className="movie-list">
            <h2>{ title }</h2>
               {movies.map((movie) => (
                <div className="movie-preview" key={ movie._id }>
                        <h2> { movie.title } </h2>
                        <img className="movie-poster" src={movie.poster} alt={movie.title}></img>
                        <p className="movie-description">{movie.description}</p>
                </div>
            ))}
        </div>
     );
}
 
export default MovieList;