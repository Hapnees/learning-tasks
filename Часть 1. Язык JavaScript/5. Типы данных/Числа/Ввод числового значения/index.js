const readNumber = () => {
	let value

	do {
		value = Number(prompt('Введите число', ''))
	} while (!Number.isInteger(value))

	return value
}

readNumber()
