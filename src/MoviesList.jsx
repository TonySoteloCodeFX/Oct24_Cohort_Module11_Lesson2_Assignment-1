import React, { useState } from 'react';

const MoviesList = () => {
    
    const initialMovies = [
        { id: 1, title: 'Inception', genre: 'Action', description: 'A mind-bending thriller by Christopher Nolan.' },
        { id: 2, title: 'The Godfather', genre: 'Crime', description: 'A mafia classic directed by Francis Ford Coppola.' },
        { id: 3, title: 'Interstellar', genre: 'Sci-Fi', description: 'A journey through space and time by Christopher Nolan.' },
        { id: 4, title: 'The Dark Knight', genre: 'Action', description: 'The best Batman movie ever made.' }
    ];
    
    const [movies, setMovies] = useState(initialMovies);
    const [expandedMovie, setExpandedMovie] = useState(null);
    const [showActionMovies, setShowActionMovies] = useState(false);

    
    const toggleDetails = (id) => {
        setExpandedMovie(expandedMovie === id ? null : id);
    };

    
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    
    const toggleGenreView = () => {
        setShowActionMovies(!showActionMovies);
    };

    return (
        <div>
            <button onClick={toggleGenreView}>
                {showActionMovies ? 'Show All Movies' : 'Show Action Movies Only'}
            </button>
            <ul>
                {movies.filter(movie => !showActionMovies || movie.genre === 'Action').map(movie => (
                    <li key={movie.id}>
                        <span onClick={() => toggleDetails(movie.id)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(movie.id)} style={{ marginLeft: '10px' }}>Remove</button>
                        {expandedMovie === movie.id && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;