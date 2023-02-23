function makeCounter() {
	let count = 0

	return function () {
		return count++
	}
}

let counter = makeCounter()
let counter2 = makeCounter()

alert(counter()) // 0
alert(counter()) // 1

alert(counter2()) // ?
alert(counter2()) // ?

// Вторая группа алертов также покажет 0 1, т.к. у каждый из функций counter и  counter2 своё лексическое окружение, и они никак друг с другом не связаны
