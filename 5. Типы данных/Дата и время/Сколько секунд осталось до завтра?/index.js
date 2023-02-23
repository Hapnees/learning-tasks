const getSecondsToTomorrow = () => {
	const dateNow = new Date()

	const dateTomorrow = new Date(
		dateNow.getFullYear(),
		dateNow.getMonth(),
		dateNow.getDate() + 1
	)

	const diff = dateTomorrow - dateNow
	const result = Math.round(diff / 1000)
	return result
}
