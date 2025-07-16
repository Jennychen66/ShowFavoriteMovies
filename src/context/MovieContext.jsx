import { useEffect } from "react";
import React from "react";


const MovieContext = React.createContext();

const movieUseContext = () => React.useContext(MovieContext);

const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = React.useState([]);
    useEffect(() => {

        const storedFavorites = localStorage.getItem('favorites');
        if(storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }

    }, [])


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prevFav => [...prevFav, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prevFav => prevFav.filter(movie => 
            movie.id !== movieId
        ));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}

export {MovieProvider, movieUseContext}