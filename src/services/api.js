const API_KEY = '61ae4725c8a0d6b2728232e0ecfb069f';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
    }
    const data = await response.json();
    return data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
        description: movie.overview,
        release_date: movie.release_date
    }));
}

const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
        throw new Error('Failed to search movies');
    }
    const data = await response.json();
    return data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path!== null ? `${IMAGE_BASE_URL}/${movie.poster_path}` : "/vite.svg",
        description: movie.overview,
        release_date: movie.release_date
    }));
}

export { getPopularMovies, searchMovies };