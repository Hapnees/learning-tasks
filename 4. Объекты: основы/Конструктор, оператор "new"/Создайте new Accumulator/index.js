function Accumulator(startingValue) {
	this.value = Number(startingValue)

	this.read = function () {
		this.value += Number(prompt('Введите число', ''))
	}
}

const accumulator = new Accumulator(1) // начальное значение 1

accumulator.read() // прибавляет введённое пользователем значение к текущему значению
accumulator.read() // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value) // выведет сумму этих значений
