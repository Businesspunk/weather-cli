import {ParseQueryParamsFromCliCommand} from './UseCase/ParseQueryParamsFromCliCommand.js'
import {printError, printSuccess, printHelp} from './Services/OutputService.js'

function main() {
	const queryParams = ParseQueryParamsFromCliCommand(process.argv.slice(2))
	//console.log(queryParams)
	printHelp()
}

main()