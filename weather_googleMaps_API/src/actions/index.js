import axios from 'axios';


const API_KEY = '8da8d2ef5b8dc3e491e20b910ddeca13';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // l.57

// l.57
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); // l.57 npm installed axios 
 

	return {
		type: FETCH_WEATHER,
		payload: request 
	}
}