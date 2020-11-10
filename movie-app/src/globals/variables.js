/*example request
https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>


*/
// API Variables
export const API_KEY = 'fd3a2f3a95befbb278ea2485a60e680a';
export const API_DATA_MODE = '&mode=json';
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=fd3a2f3a95befbb278ea2485a60e680a';
export const FAV_URL = 'https://api.themoviedb.org/3/account?api_key=fd3a2f3a95befbb278ea2485a60e680a';
export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=fd3a2f3a95befbb278ea2485a60e680a';
export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fd3a2f3a95befbb278ea2485a60e680a';
export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=fd3a2f3a95befbb278ea2485a60e680a';

//General App Settings
export const APP_FOLDER_NAME = '/movie-app';


// LocalStorage Defaults
export const STORAGE_CURRENT_MOVIE = 'movie-app-current-movie';
export const STORAGE_FAVORITE_MOVIES = 'movie-app-favorite-movies';

// Length constants
export const MAX_LENGTH = 70;
export const TITLE_MAX_LENGTH = 13;

