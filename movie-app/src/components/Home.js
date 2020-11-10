import React, { useState, useEffect } from 'react';
import { POPULAR_URL, NOW_PLAYING_URL,TOP_RATED_URL,UPCOMING_URL} from '../globals/variables';
import  MovieLists  from '../components/Movielists';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

const Home = (props) => {
	
const [movies, setMovies] = useState([]);
const [sort, setSort] = useState(props.sort);

	//const sort = props.sort;
	let url;

	if(sort  === 'popular'){
		url = POPULAR_URL;
	}else if(sort === 'nowplaying'){
		url = NOW_PLAYING_URL;
	}else if(sort === 'toprated'){
		url = TOP_RATED_URL;
	}else if(sort === 'upcoming'){
		url = UPCOMING_URL;
	}

	useEffect(() => {


	const fetchMovies = async () => {

			const response = await fetch(url, {
				headers: {
				  "Accept": "application/json",
				  "Content-Type": "application/json"
				}
			});
			const data = await response.json();
			const movies = data.results;
			console.log(movies);
			setMovies(movies);
		}
		fetchMovies();
	}, [sort]) 

	if(props.sort !== sort){
		setSort(props.sort);
	}

	console.log(sort);

	return (
	
	<main>
		
		<div className="filter-menu">
			<Subheader />
		</div>
		<section className="section-01">		
			{movies && <MovieLists movies={movies}/>}
	</section>
	</main>
	)
}; 
export default Home;