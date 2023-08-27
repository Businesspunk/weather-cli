import axios from 'axios';

const getCurrentWeather = async (city, token) => {
	const url = new URL('https://api.openweathermap.org/data/2.5/weather')
	url.searchParams.set('q', city)
	url.searchParams.set('appid', token)
	url.searchParams.set('lang', 'en')
	url.searchParams.set('units', 'metric')
	return (await axios.get(url)).data
}

export {getCurrentWeather}