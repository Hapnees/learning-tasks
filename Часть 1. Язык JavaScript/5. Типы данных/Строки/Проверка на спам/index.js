const checkSpam = str => {
	const lowerStr = str.toLowerCase()
	const result = lowerStr.includes('viagra') || lowerStr.includes('xxx')

	return result
}
