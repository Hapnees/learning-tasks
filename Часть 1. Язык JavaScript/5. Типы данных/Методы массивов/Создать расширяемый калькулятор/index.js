function Calculator() {
	this.methods = {
		'+': (x, y) => x + y,
		'-': (x, y) => x - y,
	}

	this.calculate = function (str) {
		const splittedArr = str.split(' ')
		const x = +splittedArr[0]
		const y = +splittedArr[2]
		const currentMethod = splittedArr[1]

		if (
			!Number.isInteger(x) ||
			!Number.isInteger(y) ||
			!this.methods[currentMethod]
		)
			return

		const result = this.methods[currentMethod](x, y)

		return result
	}

	this.addMethod = function (name, func) {
		this.methods[name] = func
	}
}
