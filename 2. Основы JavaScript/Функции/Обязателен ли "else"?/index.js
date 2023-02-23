// Обе функции будут работать одинаково
// else не нужен, т.к., если условие age > 18 не будет выполнено, выполнение функции и так продолжится

function checkAgeWithElse(age) {
	if (age > 18) {
		return true
	} else {
		// ...
		return confirm('Родители разрешили?')
	}
}

function checkAgeWithoutElse(age) {
	if (age > 18) {
		return true
	}
	// ...
	return confirm('Родители разрешили?')
}
