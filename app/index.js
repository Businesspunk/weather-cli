#!/usr/bin/env node
import {ParseQueryParamsFromCliCommand} from './UseCase/ParseQueryParamsFromCliCommand.js'
import {printError, printSuccess, printHelp, printWeather} from './Services/OutputService.js'
import {saveConfig} from './Storage/ConfigStorage.js'
import {getCurrentWeather} from './UseCase/GetCurrentWeather.js'
import {getIcon} from './Services/IconService.js';
import {getConfig} from './Storage/ConfigStorage.js'

async function main() {
	const queryParams = ParseQueryParamsFromCliCommand(process.argv.slice(2))
	
	if (queryParams.t && queryParams.c) {
		await saveConfig('token', queryParams.t)
		await saveConfig('city', queryParams.c)
		return printSuccess('Token and city have been saved')
	}
	
	if (queryParams.t) {
		await saveConfig('token', queryParams.t)
		return printSuccess('Token has been saved')
	}
	
	if (queryParams.c) {
		await saveConfig('city', queryParams.c)
		return printSuccess('City has been saved')
	}
	
	if (queryParams.h) {
		return printHelp()
	}
	
	const city = process.env.CITY ?? await getConfig('city')
	const token = process.env.TOKEN ?? await getConfig('token')
	if (!city) {
		throw new Error('City is not defined, please run command with -c [city]')
	}
	
	const currentWeather = await getCurrentWeather(city, token)
	printWeather(
		city, currentWeather.main.temp, currentWeather.main.feels_like, currentWeather.main.humidity,
		currentWeather.wind.speed, currentWeather.weather[0].description,
		getIcon(currentWeather.weather[0].icon.slice(0, 2))
	)
}

try {
	await main()
} catch (error) {
	printError(error)
}