// Исправленный вариант

class Animal {
	constructor(name) {
		this.name = name
	}
}

class Rabbit extends Animal {
	constructor(name) {
		super(name) // <== Добавил строчку
		this.name = name
		this.created = Date.now()
	}
}

let rabbit = new Rabbit('Белый кролик')
alert(rabbit.name)
