import MovieList from './movieList';
import useFetch from './useFetch';

const Home = () => {

    const { data: movies, isPending, error } = useFetch('http://localhost:3000/movies');


    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { movies && <MovieList movies={ movies } title = "All momvies"/> }
        </div> 
     );
}
  
export default Home;