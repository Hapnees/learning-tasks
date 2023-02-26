const getSecondsToday = () => {
	const dateNow = new Date()

	const dateToday = new Date(
		dateNow.getFullYear(),
		dateNow.getMonth(),
		dateNow.getDate()
	)

	const diff = dateNow - dateToday
	const result = Math.round(diff / 1000)
	return result
}
