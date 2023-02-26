const random = (min, max) => {
	const result = min + Math.random() * (max - min)
	return Math.round(result)
}
