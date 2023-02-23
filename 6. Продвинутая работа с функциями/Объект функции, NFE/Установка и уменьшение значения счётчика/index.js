function makeCounter() {
	function counter() {
		return counter.count++
	}

	counter.set = function (value) {
		return (counter.count = value)
	}

	counter.decrease = function () {
		return counter.count--
	}

	counter.count = 0

	return counter
}

const counter = makeCounter()

//console.log(counter())
//counter.set(4)
//console.log(counter())
//counter.decrease()
//counter.decrease()
//console.log(counter())
