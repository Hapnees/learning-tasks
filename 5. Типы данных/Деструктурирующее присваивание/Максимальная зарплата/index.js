const topSalary = salaries => {
	const [employee] = Object.entries(salaries).sort(([, a], [, b]) => b - a)

	return employee[0]
}
