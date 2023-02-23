const camelize = str => {
	const splittedStr = str.split('-')
	const result = splittedStr
		.map((el, idx) => (idx !== 0 ? el[0].toUpperCase() + el.slice(1) : el))
		.join('')

	return result
}
