function makeArmy() {
	let shooters = []

	let i = 0
	while (i < 10) {
		let shooter = function () {
			// функция shooter
			alert(i) // должна выводить порядковый номер
		}
		shooters.push(shooter)
		i++
	}

	return shooters
}

let army = makeArmy()

army[0]() // у 0-го стрелка будет номер 10
army[5]() // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// У всех стрелков одинаковые номера, потому что alert выводит значение переменной i, которая объявлена в лексическом окружении функции makyArmy(). В результате цикла её значение увеличилось до 10-ти и останется таким до скончания времён

// Можем заменить while на for

function makeArmy() {
	let shooters = []

	for (let i = 0; i < 10; i++) {
		let shooter = function () {
			// функция shooter
			alert(i) // должна выводить порядковый номер
		}

		shooters.push(shooter)
	}

	return shooters
}

let army = makeArmy()

army[0]()
army[5]()

// Теперь i объявлено в лексическом окружении цикла for
