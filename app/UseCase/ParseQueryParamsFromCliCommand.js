const ParseQueryParamsFromCliCommand = parameters => {
	const parametersKeyValue = {}
	
	for (let i = 0; i < parameters.length; i++) {
		const currentValue = parameters[i]
		if (!currentValue.includes('-')) {
			continue
		}
		const nextValue = parameters[i + 1]
		if (nextValue === undefined || nextValue.includes('-')) {
			parametersKeyValue[currentValue] = true
			continue
		}
		parametersKeyValue[currentValue] = nextValue
	}
	
	return parametersKeyValue
}

export {ParseQueryParamsFromCliCommand}