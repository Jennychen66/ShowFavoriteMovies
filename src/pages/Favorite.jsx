import MovieCard from "../component/MovieCard";
import { movieUseContext } from "../context/MovieContext";
import '../css/Favorites.css'; // Assuming you have a CSS file for styling
function Favorite(){

    const {favorites} = movieUseContext();
    if(favorites){
        return (
            <div className="favorites">
                <h3>Favorites Movies:</h3>
                {
                    favorites.map((movie) => ( <MovieCard key={movie.id} movie={movie} />)
                   

                )
                }

            </div>
        )
    }
    return(
            
        
            <div className="favorite-page"> 
                <h1>Favorite Movies</h1>
                <p>List of favorite movies will be displayed here.</p>
            </div>
        
    )
}


export default Favorite;
