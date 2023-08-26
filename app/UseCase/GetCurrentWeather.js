import axios from 'axios';
import {getConfig} from '../Storage/ConfigStorage.js'

const getCurrentWeather = async city => {
	const token = await getConfig('token')
	const url = new URL('https://api.openweathermap.org/data/2.5/weather')
	url.searchParams.set('q', city)
	url.searchParams.set('appid', token)
	url.searchParams.set('lang', 'ru')
	url.searchParams.set('units', 'metric')
	return (await axios.get(url)).data
}

export {getCurrentWeather}