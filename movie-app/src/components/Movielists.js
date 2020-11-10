import React from 'react';
import { MAX_LENGTH, TITLE_MAX_LENGTH } from '../globals/variables';
import { Link } from 'react-router-dom';


const createMovieContainer = (arr) => {
    return arr.map((item, i) => {
        if (i < 12 ){
            return(
                    <div className="title-container" key={i}>
                    <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} />
                    <div className="movie-title">
                    {item.title.length > TITLE_MAX_LENGTH ? <h2>{`${item.title.substring(0, TITLE_MAX_LENGTH)}...`}</h2> : <h2>{item.title}</h2>}
                    </div>
                    <h2>Released:{item.release_date}</h2>
                    <div className="summary">
                    {item.overview.length > MAX_LENGTH ? <p className="fav-overview">{`${item.overview.substring(0, MAX_LENGTH)}...`}</p> : <p>{item.overview}</p>}
                    </div>
                    <h2>♥{item.vote_average}/10</h2>
                    <div className="detail">
                    <Link className="more-info" to={`movie/${item.id}`}>More info...</Link>
                    </div>
                    </div>
            )
        }  
    })
}

const MovieLists = ({movies}) => {
    return (
        <section className="movie-list">
        {createMovieContainer(movies)}
        </section>
    )
}

export default MovieLists;

