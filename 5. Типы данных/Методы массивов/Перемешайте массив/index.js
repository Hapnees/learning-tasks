const shuffle = array => {
	const result = Array(array.length)
		.fill(0)
		.map((_, idx) => [Math.random(), idx])
		.sort((a, b) => a[0] - b[0])
		.map(el => array[el[1]])

	return result
}
