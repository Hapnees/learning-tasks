let num = 0

do {
	num = prompt('Введите число, большее 100', '')
} while (num !== null && (num < 100 || !Number(num)))
