// Исправленный вариант

class Rabbit extends Object {
	constructor(name) {
		super() // <== Добавил строчку
		this.name = name
	}
}

let rabbit = new Rabbit('Кроль')

alert(rabbit.hasOwnProperty('name'))

// При наследовании нужно вызвать super() в конструкторе
