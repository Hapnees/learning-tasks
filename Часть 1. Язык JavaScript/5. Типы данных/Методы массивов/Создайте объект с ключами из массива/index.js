const groupById = arr => {
	const result = arr.reduce((accum, value) => {
		accum[value.id] = value
		return accum
	}, {})

	return result
}
