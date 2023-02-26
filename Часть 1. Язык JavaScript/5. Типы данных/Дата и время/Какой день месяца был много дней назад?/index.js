const getDateAgo = (date, days) => {
	date.setDate(date.getDate() - days)
	const result = date.getDate()

	return result
}
