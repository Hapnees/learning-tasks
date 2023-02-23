const sumSalaries = salaries => {
	const salaryValues = Object.values(salaries)
	let result = 0

	for (let el of salaryValues) {
		result += el
	}

	return result
}
