function pow(x, n) {
	let result = x
	for (let i = 1; i < n; i++) {
		result *= x
	}

	return result
}

const num = prompt('Введите число, которое хотите возвести в степень', '')
const power = prompt('Введите степень', '')

if (!Number.isInteger(+num)) {
	alert(`Некорректное значение ${num}`)
} else if (power <= 1 || !Number.isInteger(+power)) {
	alert(`Некорректное значение ${power}`)
} else {
	alert(pow(num, power))
}
