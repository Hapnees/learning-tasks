function Calculator() {
	this.read = function () {
		this.x = Number(prompt('x = '))
		this.y = Number(prompt('y = '))
	}

	this.sum = function () {
		return this.x + this.y
	}

	this.mul = function () {
		return this.x * this.y
	}
}

const calculator = new Calculator()
calculator.read()

alert('Sum = ' + calculator.sum())
alert('Mul = ' + calculator.mul())
