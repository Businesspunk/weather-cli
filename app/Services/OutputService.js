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
			-c [CITY] for setting city
			-h for output help
			-t [API_KEY] for saving token`
		)
	)
}

const printWeather = (city, temperature, temperatureFeelsLike, airHumidity, windVelocity, description, icon) => {
	console.log(
		dedent(
			`${chalk.bgYellow(' Weather in city', city, '')}
			${icon}${description}
			Temperature: ${temperature}°C (feels like ${temperatureFeelsLike}°C)
			Air humidity: ${airHumidity}%
			Wind velocity: ${windVelocity} m/s
			`
		)
	)
}

export {printError, printSuccess, printHelp, printWeather}