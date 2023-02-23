const getWeekDay = date => {
	const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
	const dayNum = date.getDay()
	return days[dayNum]
}
