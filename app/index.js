import {ParseQueryParamsFromCliCommand} from './UseCase/ParseQueryParamsFromCliCommand.js'
import {printError, printSuccess, printHelp} from './Services/OutputService.js'
import {saveConfig} from './Storage/ConfigStorage.js'
import {getCurrentWeather} from './UseCase/GetCurrentWeather.js'

async function main() {
	const queryParams = ParseQueryParamsFromCliCommand(process.argv.slice(2))
	
	if (queryParams.t) {
		await saveConfig('token', queryParams.t)
		printSuccess('Token has been saved')
		return
	}
	
	if (queryParams.h) {
		printHelp()
		return
	}
	
	const currentWeather = await getCurrentWeather('London')
}

try {
	await main()
} catch (error) {
	printError(error)
}