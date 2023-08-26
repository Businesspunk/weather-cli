import {homedir} from 'os'
import {join} from 'path'
import {promises} from 'fs'

const configPath = join(homedir(), 'weather-config.json')

const isFileExist = async path => {
	try {
		await promises.access(path)
		return true
	} catch {
		return false
	}
}

const saveConfig = async (key, value) => {
	if (!(await isFileExist(configPath))) {
		return await promises.writeFile(configPath, JSON.stringify({[key]: value}))
	}
	const currentConfigContent = JSON.parse(await promises.readFile(configPath, 'utf-8'))
	currentConfigContent[key] = value
	return await promises.writeFile(configPath, JSON.stringify(currentConfigContent))
}

const getConfig = async key => {
	if (!(await isFileExist(configPath))) {
		throw new Error(`Config file does not exist`)
	}
	return JSON.parse(await promises.readFile(configPath, 'utf-8'))[key]
}

export {saveConfig, getConfig}