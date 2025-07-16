const imgPlaceholder = "https://via.placeholder.com/150";
import { movieUseContext } from "../context/MovieContext";
import '../css/MovieCard.css';
function MovieCard({ movie }) {

    const { addToFavorites, removeFromFavorites, isFavorite } = movieUseContext();
    const isFavoriteMovie = isFavorite(movie.id)

    const onFavoriteClick = () => {
        console.log("Favorite button clicked for movie:", movie.title);
        if(isFavoriteMovie) {
            console.log("Removing from favorites:", movie.title);
            removeFromFavorites(movie.id);
        }else{
            addToFavorites(movie);
        }
        
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.poster} alt={movie.title} />  
            <div className = "movie-overlay">
                <button className={`favorite-btn ${isFavoriteMovie ? `active` : ''} `} onClick = {onFavoriteClick}> @ </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <div>{movie.release_date.split('-')[0]}</div>
        </div>
      
    </div>
  )
}
export default MovieCard