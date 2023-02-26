const calculator = {
	read() {
		this.x = Number(prompt('x = ', ''))
		this.y = Number(prompt('y = ', ''))
	},
	sum() {
		return this.x + this.y
	},
	mul() {
		return this.x * this.y
	},
}

calculator.read()
alert(calculator.sum())
alert(calculator.mul())
