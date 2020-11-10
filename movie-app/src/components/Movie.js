import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL,STORAGE_FAVORITE_MOVIES} from '../globals/variables';
import { isItemInStorage, setStorage, removeFromStorage } from '../utilities/storageMaker';

const Movie = () => {

    let { id } = useParams();

    const [movieDataSingle, setMovieDataSingle] = useState(null);
    const [favoriteMovies, setFavoriteMovies] = useState();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`${BASE_URL}${id}?api_key=${API_KEY}`)
            const data = await res.json();
            setMovieDataSingle(data);
            console.log(movieDataSingle);
        }
        fetchMovies();
    }, [id]);

    const addMovie = () => {
        if(isItemInStorage(movieDataSingle) === true ){
            console.log('item exists');
        }else {
            const yourMovies = setStorage(movieDataSingle, STORAGE_FAVORITE_MOVIES, false);
            setFavoriteMovies(yourMovies);
        }   
    }
    const removeMovie = () => {
        const yourMovies = removeFromStorage(movieDataSingle.id);
        setFavoriteMovies(yourMovies);
    }
    return (
        
        <main>
        
        {movieDataSingle && 
        <section className="movie-wrapper">
        <div className="title-container">
                    <img src={`https://image.tmdb.org/t/p/w200${movieDataSingle.poster_path}`} alt={movieDataSingle.title} />
                    <div className="title">
                    <h2>{movieDataSingle.title}</h2>
                    </div>
                    <h2>Released:{movieDataSingle.release_date}</h2>
                    <div className="overview">
                    <h2>{movieDataSingle.overview}</h2>
                    </div>
                    <h2>♥{movieDataSingle.vote_average}/10</h2>
                    <div className="detail">

        </div>

                {!isItemInStorage(movieDataSingle)  && <button onClick={addMovie} className="mylist-btn not-added">Add Movie To Mylist <i className="far fa-heart"></i></button>}
                {isItemInStorage(movieDataSingle) && <button onClick={removeMovie} className="mylist-btn added">Remove Movie From Mylist <i className="fas fa-heart"></i></button>}
            </div>
        </section>
        
        }
        </main>
    );
}

export default Movie;