import MovieCard from "../component/MovieCard"
import React, { useState } from "react";
import { useEffect } from "react";
import '../css/Home.css' // Assuming you have a CSS file for styling
import {getPopularMovies, searchMovies} from "../services/api"; // Assuming you have an API utility to fetch movies
function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const getMovies = async () => {
            // Simulate fetching movies from an API
            try {
                const response = await getPopularMovies();
                // for test the failure case, you can uncomment the following line
                // if(!response.ok) {
                //     throw new Error('Failed to fetch movies');
                // }
                // ----- Uncomment the above line to simulate an error ---- 
                setMovies(response);
            } catch (error) {
                setError(error.message);
                console.log("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
            console.log("Fetching movies...");
        }
        getMovies();

    }, [])

    // const Movies = [{
    //     id:1, title: "John wick", poster: "Joe", description: "this is the first movie", release_date: "2023-01-01"
    // },{
    //     id:2, title: "The Matrix", poster: "Neo", description: "this is the second movie", release_date: "2023-02-01"
    // },{
    //     id:3, title: "Inception", poster: "Cobb", description: "this is the third movie", release_date: "2023-03-01"
    // },{
    //     id:4, title: "Interstellar", poster: "Cooper", description: " this is the fourth movie", release_date: "2023-04-01"
    // }]
    function handleType(event){
        console.log(event.target.value)
        setSearchTerm(event.target.value);
    }
    async function handleSearch(event){
        event.preventDefault();
        console.log("Search button clicked")
        setLoading(true);
        setError(null); 
        try{
            
            const searchResult = await searchMovies(searchTerm);
            setMovies(searchResult);

        }catch(error){
            console.error("Error during search:", error);
            setError(error.message);
            return;
        }finally{
            setLoading(false);
        }
        



    }

    return (
        <div className="home">
            <input type= "text" onChange={handleType} ></input>
            <button type="submit" onClick={handleSearch}> Search</button>
            <h1>Movie List</h1>
            {error && <div className="error-message">Error: {error}</div>}
            {loading ? <div className="loading-message">Loading movies...</div> : <div className="movie-list">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(searchTerm) && <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>}
            
        </div>
    )


}

export default Home