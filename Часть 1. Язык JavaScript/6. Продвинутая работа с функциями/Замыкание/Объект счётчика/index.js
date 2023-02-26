function Counter() {
	let count = 0

	this.up = function () {
		return ++count
	}
	this.down = function () {
		return --count
	}
}

let counter = new Counter()

alert(counter.up()) // ?
alert(counter.up()) // ?
alert(counter.down()) // ?

// Он будет работать. Покажет 1 2 1. Т.к. вложенные функции работают в одном лексическом окружении
