const sumInput = () => {
	const values = []

	while (true) {
		const newValue = prompt('Введите число', '')
		if (newValue === null || newValue === '' || !Number.isInteger(+newValue))
			break

		values.push(+newValue)
	}

	const sumElements = values.reduce((accum, value) => {
		accum += value
		return accum
	}, 0)

	return sumElements
}

alert(sumInput())
