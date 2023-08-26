import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = errorMessage => {
	console.log(chalk.bgRed(` ERROR `) + ` ${errorMessage}`)
}

const printSuccess = message => {
	console.log(chalk.bgGreen(` SUCCESS `) + ` ${message}`)
}

const printHelp = () => {
	console.log(
		dedent(
			`${chalk.bgCyan(' HELP ')}
			Without parameters - weather output
			-s [CITY] for setting city
			-h for output help
			-t [API_KEY] for saving token`
		)
	)
}

export {printError, printSuccess, printHelp}