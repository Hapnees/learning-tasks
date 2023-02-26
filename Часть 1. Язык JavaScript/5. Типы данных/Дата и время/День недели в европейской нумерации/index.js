const getLocalDay = date => {
	let dayNum = date.getDay()

	if (dayNum === 0) dayNum = 7

	return dayNum
}
