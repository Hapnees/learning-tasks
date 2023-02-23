const getAverageAge = arr => {
	const result = arr.reduce((accum, value) => accum + value.age, 0) / arr.length

	return result
}
