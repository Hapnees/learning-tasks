let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
}

const sumSalary = salaries => {
	let result = 0
	for (let key in salaries) {
		result += salaries[key]
	}

	return result
}
